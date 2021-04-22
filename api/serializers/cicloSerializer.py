from rest_framework import serializers
from api.models import Ciclo


class CicloRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = (
            'anio',
        )


class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = (
            'id',
            'anio',
        )
