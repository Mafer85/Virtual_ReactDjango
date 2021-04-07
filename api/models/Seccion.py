from django.db import models

class Seccion(models.Model):
    nombre_seccion = models.CharField(max_length=10)
    seccion_activa = models.BooleanField(default=True)
    seccion_creada = models.DateTimeField(auto_now_add=True)
    seccion_modificada = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.seccion_activa = False
        self.save()
        return True
