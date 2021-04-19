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

from api.models import Grado, Nivel
from api.serializers  import GradoRegistroSerializer, GradoSerializer

class GradoViewSet(viewsets.ModelViewSet):
    queryset = Grado.objects.filter(grado_activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("nombre_grado", "descripcion_grado")
    search_fields = ("nombre_grado", "descripcion_grado")
    ordering_fields = ("nombre_grado", "descripcion_grado")

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return GradoSerializer
        else:
            return GradoRegistroSerializer

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
            serializer = GradoRegistroSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    nivel = Nivel.objects.get(pk=data.get("nivel"))
                    Grado.objects.create(
                        nivel = nivel,
                        nombre_grado = data.get("nombre_grado"),
                        descripcion_grado = data.get("descripcion_grado"),
                    )
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)
