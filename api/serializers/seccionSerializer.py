from rest_framework import serializers
from api.models import Seccion


class SeccionRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = (
            'nombre_seccion',
        )


class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = (
            'id',
            'nombre_seccion',
        )
