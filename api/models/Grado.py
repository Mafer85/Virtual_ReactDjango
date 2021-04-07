from django.db import models
from .Nivel import Nivel

class Grado(models.Model):
    nivel = models.ForeignKey(Nivel,on_delete = models.CASCADE, related_name="nivel_grado")
    nombre_grado = models.CharField(max_length=45)
    descripcion_grado = models.CharField(max_length=255, null=True, blank=True)
    grado_activo = models.BooleanField(default=True)
    grado_creado = models.DateTimeField(auto_now_add=True)
    grado_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.grado_activo = False
        self.save()
        return True
