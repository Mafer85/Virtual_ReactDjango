from django.db import models

class Nivel(models.Model):
    nombre_nivel = models.CharField(max_length=45)
    descripcion_nivel = models.CharField(max_length=255)
    nivel_activo = models.BooleanField(default=True)
    nivel_creado = models.DateTimeField(auto_now_add=True)
    nivel_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.nivel_activo = False
        self.save()
        return True
