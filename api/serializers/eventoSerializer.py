from rest_framework import serializers
from api.models import Evento

class EventoRegistroSerializer(serializers.Serializer):
    ciclo_escolar = serializers.IntegerField()
    titulo_evento = serializers.CharField(max_length=50)
    decripcion_evento = serializers.CharField(max_length=255)
    fecha = serializers.DateTimeField()
    hora = serializers.TimeField()

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = (
            'id',
            'ciclo_escolar',
            'titulo_evento',
            'decripcion_evento',
            'hora',
        )
        depth = 2
