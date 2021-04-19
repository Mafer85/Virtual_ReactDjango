from rest_framework import serializers
from api.models import Curso

class CursoRegistroSerializer(serializers.Serializer):
    nombre_curso = serializers.CharField(max_length=25)
    descripcion_curso = serializers.CharField(max_length=255)


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'id',
            'nombre_curso',
            'descripcion_curso',
        )
        
