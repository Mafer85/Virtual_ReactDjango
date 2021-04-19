import json

from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings

from api.models import Profesion
from api.serializers import ProfesionRegistroSerializer, ProfesionSerializer

class ProfesionViewset(viewsets.ModelViewSet):
    queryset = Profesion.objects.filter(profesion_activa = True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("titulo","descripcion")
    search_fields = ("titulo","descripcion")
    ordering_fields = ("titulo","descripcion")

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return ProfesionSerializer
        else:
             return ProfesionRegistroSerializer

    def get_permissions(self):
        """" Define permisos para este recurso """
        if self.action == "create" or self.action == "token":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
