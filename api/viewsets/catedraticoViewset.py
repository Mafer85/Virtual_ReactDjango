from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework import status, viewsets
from api.serializers import CatedraticoRegistroSerializer

from api.models.Profesor import Profesor
from api.models.Profesion import Profesion

class CatedraticoViewSet(viewsets.ModelViewSet):
    queryset = Catedratico.objects.filter(profesor_activo=True)
    def create(self,request):
        try:
            with transaction.atomic():
                serializer = CatedraticoRegistroSerializer(data=request.data)
                if serializer.is_valid(raise_exception=True):
                    data = request.data
                    user = User.objects.create(
                        email= data.get("email"),
                        username=data.get("username"),
                    )
                    user.set_password(data.get("password"))

                    profile = Profile.objects.create(
                        user = user,
                        rol = data.get("rol"),
                        phone = data.get("phone"),
                        address = data.get("address"),
                        nombre = data.get("nombre"),
                        apellidos = data.get("apellidos"),
                    )
                    profesion = Profesion.objects.get(pk=data.get("Profesion"))
                    Profesor.objects.create(
                        profile = profile,
                        profesion = profesion,
                    )

                    return Response(status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"detail":str(e)},status=status.HTTP_400_BAD_REQUEST)

    def get_permissions(self):
        permissions_classes = [IsAuthenticated]
        return [permission() for permission in permissions_classes]
