# Generated by Django 2.2.13 on 2021-04-14 17:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Asignacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('portada', models.ImageField(blank=True, null=True, upload_to='portada')),
                ('descripcion_asig', models.CharField(blank=True, max_length=255, null=True)),
                ('asig_activa', models.BooleanField(default=True)),
                ('asig_creada', models.DateTimeField(auto_now_add=True)),
                ('asig_modificada', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ciclo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('anio', models.PositiveSmallIntegerField()),
                ('ciclo_activo', models.BooleanField(default=True)),
                ('ciclo_creado', models.DateTimeField(auto_now_add=True)),
                ('ciclo_modificado', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_curso', models.CharField(max_length=25)),
                ('descripcion_curso', models.CharField(max_length=255)),
                ('curso_activo', models.BooleanField(default=True)),
                ('curso_creado', models.DateTimeField(auto_now_add=True)),
                ('curso_modificado', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('carnet', models.CharField(max_length=25)),
                ('contacto', models.CharField(blank=True, max_length=45, null=True)),
                ('direccion_contacto', models.CharField(blank=True, max_length=45, null=True)),
                ('telefono_contacto', models.CharField(blank=True, max_length=10, null=True)),
                ('estudiante_activo', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo_material', models.CharField(max_length=50)),
                ('descripcion_material', models.CharField(blank=True, max_length=255, null=True)),
                ('archivo', models.FileField(blank=True, null=True, upload_to='archivos/')),
                ('material_activo', models.BooleanField(default=True)),
                ('material_creado', models.DateTimeField(auto_now_add=True)),
                ('material_modificado', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Nivel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_nivel', models.CharField(max_length=45)),
                ('descripcion_nivel', models.CharField(max_length=255)),
                ('nivel_activo', models.BooleanField(default=True)),
                ('nivel_creado', models.DateTimeField(auto_now_add=True)),
                ('nivel_modificado', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Profesion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('descripcion', models.CharField(blank=True, max_length=255, null=True)),
                ('profesion_activa', models.BooleanField(default=True)),
                ('creacion', models.DateTimeField(auto_now_add=True)),
                ('modificacion', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_rol', models.CharField(max_length=50)),
                ('descripcion', models.CharField(blank=True, max_length=200, null=True)),
                ('rol_activo', models.BooleanField(default=True)),
                ('rol_creado', models.DateTimeField(auto_now_add=True)),
                ('rol_modificado', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Seccion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_seccion', models.CharField(max_length=10)),
                ('seccion_activa', models.BooleanField(default=True)),
                ('seccion_creada', models.DateTimeField(auto_now_add=True)),
                ('seccion_modificada', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tarea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_tarea', models.CharField(max_length=50)),
                ('descripcion_tarea', models.CharField(max_length=255)),
                ('archivo', models.FileField(blank=True, null=True, upload_to='archTareas/')),
                ('fecha_entrega', models.DateTimeField()),
                ('hora_entrega', models.TimeField()),
                ('nota', models.FloatField()),
                ('tarea_activa', models.BooleanField(default=True)),
                ('tarea_creada', models.DateTimeField(auto_now_add=True)),
                ('tarea_modificada', models.DateTimeField(auto_now=True)),
                ('asignacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tarea_asignacion', to='api.Asignacion')),
            ],
        ),
        migrations.CreateModel(
            name='TareaEs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_ent', models.DateTimeField()),
                ('archivo_te', models.FileField(blank=True, null=True, upload_to='TE/')),
                ('texto_te', models.CharField(blank=True, max_length=255, null=True)),
                ('te_nota', models.FloatField()),
                ('te_activa', models.BooleanField(default=True)),
                ('te_creada', models.DateTimeField(auto_now_add=True)),
                ('te_modificada', models.DateTimeField(auto_now=True)),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='te_estudiante', to='api.Estudiante')),
                ('tarea', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='te_tarea', to='api.Tarea')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='Avatar')),
                ('phone', models.CharField(blank=True, max_length=15, null=True)),
                ('address', models.CharField(blank=True, max_length=250, null=True)),
                ('gender', models.PositiveSmallIntegerField(blank=True, choices=[(0, 'MALE'), (1, 'FEMALE')], null=True)),
                ('nombre', models.CharField(blank=True, max_length=100, null=True)),
                ('apellidos', models.CharField(blank=True, max_length=100, null=True)),
                ('activo', models.BooleanField(default=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('modificado', models.DateTimeField(auto_now=True)),
                ('rol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rol_profile', to='api.Rol')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profesor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profesor_activo', models.BooleanField(default=True)),
                ('profesor_creado', models.DateTimeField(auto_now_add=True)),
                ('profesor_modificado', models.DateTimeField(auto_now=True)),
                ('perfil', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profesor_perfil', to='api.Profile')),
                ('profesion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profesion_profesor', to='api.Profesion')),
            ],
        ),
        migrations.CreateModel(
            name='Grado',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_grado', models.CharField(max_length=45)),
                ('descripcion_grado', models.CharField(blank=True, max_length=255, null=True)),
                ('grado_activo', models.BooleanField(default=True)),
                ('grado_creado', models.DateTimeField(auto_now_add=True)),
                ('grado_modificado', models.DateTimeField(auto_now=True)),
                ('nivel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nivel_grado', to='api.Nivel')),
            ],
        ),
        migrations.CreateModel(
            name='Evento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo_evento', models.CharField(max_length=50)),
                ('decripcion_evento', models.CharField(max_length=255)),
                ('fecha', models.DateTimeField()),
                ('hora', models.TimeField()),
                ('evento_activo', models.BooleanField(default=True)),
                ('evento_creado', models.DateTimeField(auto_now_add=True)),
                ('evento_modificado', models.DateTimeField(auto_now=True)),
                ('ciclo_escolar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ciclo_eventos', to='api.Ciclo')),
            ],
        ),
        migrations.AddField(
            model_name='estudiante',
            name='perfilE',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='estudiante_perfil', to='api.Profile'),
        ),
        migrations.CreateModel(
            name='Asignarestudiante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ae_activo', models.BooleanField(default=True)),
                ('asignacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ae_asignacion', to='api.Asignacion')),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ae_estudiante', to='api.Estudiante')),
            ],
        ),
        migrations.AddField(
            model_name='asignacion',
            name='ciclo_escolar',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ciclo_asignacion', to='api.Ciclo'),
        ),
        migrations.AddField(
            model_name='asignacion',
            name='curso',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='curso_asignacion', to='api.Curso'),
        ),
        migrations.AddField(
            model_name='asignacion',
            name='grado',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='grado_asignacion', to='api.Grado'),
        ),
        migrations.AddField(
            model_name='asignacion',
            name='seccion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seccion_asignacion', to='api.Seccion'),
        ),
    ]
