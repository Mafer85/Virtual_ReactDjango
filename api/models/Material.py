from django.db import models
from .Asignacion import Asignacion

class Material(models.Model):
    titulo_material = models.CharField(max_length=50)
    descripcion_material = models.CharField(max_length=255, null=True, blank=True)
    archivo = models.FileField(upload_to="archivos/", null=True, blank=True)
    material_activo = models.BooleanField(default=True)
    material_creado = models.DateTimeField(auto_now_add=True)
    material_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.material_activo = False
        self.save()
        return True
