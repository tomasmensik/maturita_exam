# Generated by Django 4.1.4 on 2022-12-13 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_issues_class_issues_class'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='id_profile',
            field=models.CharField(default='itstudent', help_text='Zadejte id studenta', max_length=10, verbose_name='priklad:it1987'),
        ),
    ]
