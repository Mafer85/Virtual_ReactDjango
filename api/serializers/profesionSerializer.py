from rest_framework import serializers
from api.models import Profesion


class ProfesionRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = (
            'titulo',
            'descripcion',
        )


class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = (
            'id',
            'titulo',
            'descripcion',
        )
