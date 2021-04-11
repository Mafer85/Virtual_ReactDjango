from django.db import models

class Curso(models.Model):
    nombre_curso = models.CharField(max_length=25)
    descripcion_curso = models.CharField(max_length=255)
    curso_activo = models.BooleanField(default=True)
    curso_creado = models.DateTimeField(auto_now_add=True)
    curso_modificado = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.curso_activo = False
        self.save()
        return True
