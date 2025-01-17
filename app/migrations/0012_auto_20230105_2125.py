# Generated by Django 3.2 on 2023-01-05 21:25

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_profile_id_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_foto',
            field=models.ImageField(blank=True, null=True, upload_to=app.models.profile_images),
        ),
        migrations.AlterField(
            model_name='timespend',
            name='month',
            field=models.CharField(choices=[('January', 'January'), ('February', 'February'), ('March', 'March'), ('April', 'April'), ('May', 'May'), ('June', 'June'), ('July', 'July'), ('August', 'August'), ('September', 'September'), ('October', 'October'), ('November', 'November'), ('December', 'December')], help_text='Zvolte zda je uživatel programátor, nebo síťař', max_length=30, verbose_name='měsíc'),
        ),
    ]
