from django.db import models
from .CicloEscolar import Ciclo
from .Curso import Curso
from .Grado import Grado
from .Seccion import Seccion

class Asignacion(models.Model):
    ciclo_escolar = models.ForeignKey(Ciclo, on_delete=models.CASCADE, related_name="ciclo_asignacion")
    grado = models.ForeignKey(Grado, on_delete=models.CASCADE, related_name="grado_asignacion")
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE, related_name="seccion_asignacion")
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name="curso_asignacion")
    portada = models.ImageField(upload_to='portada', null=True, blank=True)
    descripcion_asig = models.CharField(max_length=255, null=True, blank=True)
    asig_activa = models.BooleanField(default=True)
    asig_creada = models.DateTimeField(auto_now_add=True)
    asig_modificada = models.DateTimeField(auto_now=True)

    def delete(self, *args):
        self.asig_activa = False
        self.save()
        return True
