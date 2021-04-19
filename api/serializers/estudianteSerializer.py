from rest_framework import serializers
from api.models import Estudiante

class EstudianteRegistroSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=150)
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField(max_length=250)
    nombre = serializers.CharField(max_length=100)
    apellidos = serializers.CharField(max_length=100)
    carnet = serializers.CharField(max_length=25)
    contacto = serializers.CharField(max_length=45)
    direccion_contacto = serializers.CharField(max_length=45)
    telefono_contacto = serializers.CharField(max_length=10)


class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = (
            'id',
            'carnet',
            'perfil',
            'contacto',
            'direccion_contacto',
            'telefono_contacto',
        )
        depth = 2
