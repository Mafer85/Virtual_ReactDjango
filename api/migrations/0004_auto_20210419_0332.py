# Generated by Django 2.2.13 on 2021-04-19 03:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210415_1417'),
    ]

    operations = [
        migrations.RenameField(
            model_name='estudiante',
            old_name='perfilE',
            new_name='perfil',
        ),
    ]
