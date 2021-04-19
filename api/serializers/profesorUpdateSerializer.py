from rest_framework import serializers

class ProfesorUpdateSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField(max_length=250)
    nombre = serializers.CharField(max_length=100)
    apellidos = serializers.CharField(max_length=100)
    profesion = serializers.IntegerField()
