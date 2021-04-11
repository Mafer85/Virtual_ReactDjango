from django.db import models

class Profesion(models.Model):
    titulo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255, null=True, blank=True)
    profesion_activa = models.BooleanField(default=True)
    creacion = models.DateTimeField(auto_now_add=True)
    modificacion = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.profesion_activa = False
        self.save()
        return True
