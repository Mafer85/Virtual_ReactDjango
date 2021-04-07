from django.db import models

class Ciclo(models.Model):
    anio = models.PositiveSmallIntegerField()
    ciclo_activo = models.BooleanField(default=True)
    ciclo_creado = models.DateTimeField(auto_now_add=True)
    ciclo_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.ciclo_activo = False
        self.save()
        return True
