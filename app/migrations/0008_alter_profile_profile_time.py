# Generated by Django 4.1.4 on 2022-12-28 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_profile_id_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_time',
            field=models.IntegerField(blank=True, help_text='Zadejte pocet hodin stravenych na projektu', null=True, verbose_name='Cas'),
        ),
    ]
