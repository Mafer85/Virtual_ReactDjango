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

from api.models import Seccion
from api.serializers import SeccionRegistroSerializer, SeccionSerializer

class SeccionViewset(viewsets.ModelViewSet):
    queryset = Seccion.objects.filter(seccion_activa = True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("nombre_seccion",)
    search_fields = ("nombre_seccion",)
    ordering_fields = ("nombre_seccion",)

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return SeccionSerializer
        else:
             return SeccionRegistroSerializer

    def get_permissions(self):
        """" Define permisos para este recurso """
        if self.action == "create" or self.action == "token":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
