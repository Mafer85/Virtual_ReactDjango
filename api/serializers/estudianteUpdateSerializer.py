from rest_framework import serializers

class EstudianteUpdateSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField(max_length=250)
    nombre = serializers.CharField(max_length=100)
    apellidos = serializers.CharField(max_length=100)
    carnet = serializers.CharField(max_length=25)
    contacto = serializers.CharField(max_length=45)
    direccion_contacto = serializers.CharField(max_length=45)
    telefono_contacto = serializers.CharField(max_length=10)
