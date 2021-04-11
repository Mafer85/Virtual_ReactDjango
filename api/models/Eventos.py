from django.db import models
from .CicloEscolar import Ciclo

class Evento(models.Model):
    ciclo_escolar = models.ForeignKey(Ciclo, on_delete=models.CASCADE, related_name="ciclo_eventos")
    titulo_evento = models.CharField(max_length=50)
    decripcion_evento = models.CharField(max_length=255)
    fecha = models.DateTimeField()
    hora = models.TimeField(auto_now=False, auto_now_add=False)
    evento_activo = models.BooleanField(default=True)
    evento_creado = models.DateTimeField(auto_now_add=True)
    evento_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.evento_activo = False
        self.save()
        return True
