from rest_framework import serializers
from api.models import Nivel


class NivelRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = (
            'nombre_nivel',
            'descripcion_nivel',
        )


class NivelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = (
            'id',
            'nombre_nivel',
            'descripcion_nivel',
        )
