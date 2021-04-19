from rest_framework import serializers
from api.models  import Profesor

class CatedraticoRegistroSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=150)
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField(max_length=250)
    nombre = serializers.CharField(max_length=100)
    apellidos = serializers.CharField(max_length=100)
    profesion = serializers.IntegerField()


class CatedraticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = (
            'id',
            'perfil',
            'profesion',
        )
        depth = 2
