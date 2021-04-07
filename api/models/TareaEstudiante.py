from django.db import models
from .Tarea import Tarea
from .Estudiante import Estudiante

class TareaEs(models.Model):
    tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE, related_name="te_tarea")
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name="te_estudiante")
    fecha_ent = models.DateTimeField()
    archivo_te = models.FileField(upload_to="TE/", null=True, blank=True)
    texto_te = models.CharField(max_length=255, null=True, blank=True)
    te_nota = models.FloatField()
    te_activa = models.BooleanField(default=True)
    te_creada = models.DateTimeField(auto_now_add=True)
    te_modificada = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.te_activa = False
        self.save()
        return True
