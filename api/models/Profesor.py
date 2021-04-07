from django.db import models
from .profile import Profile
from .Profesion import Profesion

class Profesor(models.Model):
    perfil = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profesor_perfil")
    profesion = models.ForeignKey(Profesion, on_delete=models.CASCADE, related_name="profesion_profesor")
    profesor_activo = models.BooleanField(default=True)
    profesor_creado = models.DateTimeField(auto_now_add=True)
    profesor_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.profesor_activo = False
        self.save()
        return True
