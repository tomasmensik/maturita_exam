# Generated by Django 4.1.4 on 2022-12-28 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_profile_profile_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='class_profile',
            field=models.CharField(blank=True, default='Programmer', help_text='Zadejte třídu, Programmer, Networker', max_length=200, verbose_name='trida'),
        ),
    ]