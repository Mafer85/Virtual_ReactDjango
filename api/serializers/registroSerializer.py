from rest_framework import serializers

class CatedraticoRegistroSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=150)
    rol = serializers.IntegerField()
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField(max_length=250)
    nombre = serializers.CharField(max_length=100)
    apellidos = serializers.CharField(max_length=100)
    perfil = serializers.IntegerField()
    profesion = serializers.IntegerField()
