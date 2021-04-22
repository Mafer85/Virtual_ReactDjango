from rest_framework import serializers
from api.models import Curso

class CursoRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'nombre_curso',
            'descripcion_curso'
        )

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = (
            'id',
            'nombre_curso',
            'descripcion_curso',
        )
