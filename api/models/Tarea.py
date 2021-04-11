from django.db import models
from .Asignacion import Asignacion

class Tarea(models.Model):
    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE, related_name="tarea_asignacion")
    nombre_tarea = models.CharField(max_length=50)
    descripcion_tarea = models.CharField(max_length=255)
    archivo = models.FileField(upload_to="archTareas/", null=True, blank=True)
    fecha_entrega = models.DateTimeField()
    hora_entrega = models.TimeField(auto_now=False, auto_now_add=False)
    nota = models.FloatField()
    tarea_activa = models.BooleanField(default=True)
    tarea_creada = models.DateTimeField(auto_now_add=True)
    tarea_modificada = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.tarea_activa = False
        self.save()
        return True
