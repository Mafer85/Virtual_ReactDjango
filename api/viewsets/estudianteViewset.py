import json
from django.db import transaction
from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User

from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings

from api.models import Estudiante
from api.models import Profile
from api.models import Rol
from api.serializers import EstudianteRegistroSerializer, EstudianteSerializer, EstudianteUpdateSerializer

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.filter(estudiante_activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("perfil__nombre", "perfil__apellidos")
    search_fields = ("perfil__nombre", "perfil__apellidos")
    ordering_fields = ("perfil__nombre", "perfil__apellidos")

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return EstudianteSerializer
        elif self.action == 'put':
            return EstudianteUpdateSerializer
        else:
            return EstudianteRegistroSerializer

    def get_permissions(self):
        """" Define permisos para este recurso """
        if self.action == "create" or self.action == "token":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


    """*********************CREAR*********************"""
    def create(self,request, *args, **kwargs):
        try:
            data = request.data
            serializer = EstudianteRegistroSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    user = User.objects.create(
                        email= data.get("email"),
                        username=data.get("username"),
                    )
                    user.set_password(data.get("password"))
                    user.save()

                    rol = Rol.objects.get(pk=3)
                    profile = Profile.objects.create(
                        user = user,
                        rol = rol,
                        phone = data.get("phone"),
                        address = data.get("address"),
                        nombre = data.get("nombre"),
                        apellidos = data.get("apellidos"),
                    )

                    Estudiante.objects.create(
                        perfil = profile,
                        carnet = data.get("carnet"),
                        contacto = data.get("contacto"),
                        direccion_contacto = data.get("direccion_contacto"),
                        telefono_contacto = data.get("telefono_contacto"),
                    )
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)

    """*********************ACTUALIZAR*********************"""
    def update(self,request, pk=None):
        try:
            data = request.data
            serializer = EstudianteUpdateSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    print("data: ", data)
                    estudiante = Estudiante.objects.get(pk = pk)
                    estudiante.carnet = data.get("carnet")
                    estudiante.contacto = data.get("contacto")
                    estudiante.direccion_contacto = data.get("direccion_contacto")
                    estudiante.telefono_contacto = data.get("telefono_contacto")
                    estudiante.save()

                    perfil = estudiante.perfil
                    perfil.rol = Rol.objects.get(pk=3)
                    perfil.phone = data.get("phone")
                    perfil.address = data.get("address")
                    perfil.nombre = data.get("nombre")
                    perfil.apellidos = data.get("apellidos")
                    perfil.save()

                    user = perfil.user
                    user.email = data.get("email")
                    user.save()

                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)
