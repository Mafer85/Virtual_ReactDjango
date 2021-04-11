from django.db import models
from .Estudiante import Estudiante
from .Asignacion import Asignacion

class Asignarestudiante(models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name="ae_estudiante")
    asignacion = models.ForeignKey(Asignacion, on_delete=models.CASCADE, related_name="ae_asignacion")
    ae_activo = models.BooleanField(default=True)

    def delete(self, *args):
        self.ae_activo = False
        self.save()
        return True
