from django.db import models

class Rol(models.Model):
    nombre_rol = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200, null=True, blank=True)
    rol_activo = models.BooleanField(default=True)
    rol_creado = models.DateTimeField(auto_now_add=True)
    rol_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.rol_activo = False
        self.save()
        return True
