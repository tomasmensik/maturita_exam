# Generated by Django 4.1.4 on 2022-12-13 18:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_project_project_issue_call'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assessement',
            name='project_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.project', verbose_name='projekt'),
        ),
    ]
