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
import datetime

from api.models import Ciclo, Evento
from api.serializers  import EventoRegistroSerializer, EventoSerializer

class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.filter(evento_activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("titulo_evento", "fecha")
    search_fields = ("titulo_evento", "fecha")
    ordering_fields = ("titulo_evento", "fecha")

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return EventoSerializer
        else:
            return EventoRegistroSerializer

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
            serializer = EventoRegistroSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    ciclo_escolar = Ciclo.objects.get(pk=data.get("ciclo_escolar"))

                    Evento.objects.create(
                        ciclo_escolar = ciclo_escolar,
                        titulo_evento = data.get("titulo_evento"),
                        decripcion_evento = data.get("decripcion_evento"),
                        fecha =  data.get("fecha"),
                        hora = data.get("hora"),
                    )
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)

    """*********************ACTUALIZAR*********************"""
    def update(self,request, pk=None):
        try:
            data = request.data
            serializer = EventoRegistroSerializer(data = data)
            with transaction.atomic():
                if serializer.is_valid():
                    evento = Evento.objects.get(pk = pk)
                    evento.ciclo_escolar = Ciclo.objects.get(pk=data.get("ciclo_escolar"))
                    evento.titulo_evento = data.get("titulo_evento")
                    evento.decripcion_evento = data.get("decripcion_evento")
                    evento.fecha =  data.get("fecha")
                    evento.hora = data.get("hora")
                    evento.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)
