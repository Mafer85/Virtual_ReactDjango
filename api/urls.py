from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from api import viewsets


router = DefaultRouter()
router.register(r'user', viewsets.UserViewset)
router.register(r'profesor', viewsets.CatedraticoViewSet)
router.register(r'profesion', viewsets.ProfesionViewset)
router.register(r'estudiante', viewsets.EstudianteViewSet)
router.register(r'nivel', viewsets.NivelViewset)
router.register(r'grado', viewsets.GradoViewSet)
router.register(r'curso', viewsets.CursoViewset)
router.register(r'seccion', viewsets.SeccionViewset)
router.register(r'ciclo', viewsets.CicloViewset)
router.register(r'evento', viewsets.EventoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    url(r"^api/token", obtain_auth_token, name="api-token"),
    path('api-auth/', include('rest_framework.urls')),
]
