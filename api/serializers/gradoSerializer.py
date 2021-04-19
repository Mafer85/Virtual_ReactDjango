from rest_framework import serializers
from api.models  import Grado

class GradoRegistroSerializer(serializers.Serializer):
    nivel = serializers.IntegerField()
    nombre_grado = serializers.CharField(max_length=45)
    descripcion_grado = serializers.CharField(max_length=255)


class GradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grado
        fields = (
            'id',
            'nivel',
            'nombre_grado',
            'descripcion_grado',
        )
        depth = 2
