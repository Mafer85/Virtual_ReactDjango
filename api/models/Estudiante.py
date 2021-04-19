from django.db import models
from .profile import Profile

class Estudiante(models.Model):
    carnet = models.CharField(max_length=25)
    perfil = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="estudiante_perfil")
    contacto = models.CharField(max_length=45, null=True, blank=True)
    direccion_contacto = models.CharField(max_length=45, null=True, blank=True)
    telefono_contacto = models.CharField(max_length=10, null=True, blank=True)
    estudiante_activo = models.BooleanField(default=True)

    def delete(self, *args):
        self.estudiante_activo = False
        self.save()
        return True
