from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver



class ISSUES(models.Model):

    issue_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev pro tridu ukolu', verbose_name="Nazev pro tridu ukolu")
    deadline = models.DateField(null=True, blank=True, help_text="Zadejte, dokdy musi byt issue zhotoven", verbose_name="datum")

    is_done = models.BooleanField(default=False, help_text="Je Issue hotov? ANO, NE", verbose_name="Hotov")

    issue_detail = models.TextField(blank=True,
                                help_text='Zadejte strucny popis tridy pro ukoly', verbose_name="popis")



    class_image = models.ImageField(upload_to='uploads/Issue/%Y/%m/%d/', null=True, blank=True, verbose_name="Ilustracni foto")
    def __str__(self):
        return f"{self.issue_name}"

class ISSUES_CLASS(models.Model):
    issues_class = models.ManyToManyField(ISSUES, help_text="Pridat issue",
                                          verbose_name="issues", null=True, blank=True,)
    issues_class_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev pro tridu ukolu', verbose_name="Nazev pro tridu ukolu")

    issues_class_color = models.CharField(max_length=45, blank=False, default="rgb(255,255,255)",
                                help_text='Zadejte  barvu ve tvaru: rgb(255,255,255)', verbose_name="barva pro tridu ukolu")

    class_detail = models.TextField(blank=True,
                                help_text='Zadejte strucny popis tridy pro ukoly', verbose_name="popis")


    class_image = models.ImageField(upload_to='uploads/Issue_class/%Y/%m/%d/', null=True, blank=True, verbose_name="Ilustracni foto")
    def __str__(self):
        return f"{self.issues_class_name}"
class PROJECT(models.Model):
    project_issue_call = models.ManyToManyField(ISSUES_CLASS, help_text="Vytvoreni tridy pro issues", verbose_name="trida pro issue",  null=True, blank=True)

    pro_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev projektu', verbose_name="Nazev")

    pro_description = models.TextField(blank=False,
                                help_text='Zadejte strucny popis projektu', verbose_name="popis")

    def __str__(self):
        return f"{self.pro_name}"

class ASSESSEMENT(models.Model):

    as_percent = models.FloatField(blank=True, null=True, help_text=" Zadejte hodnoceni v procentech",
                                     verbose_name="Procenta hodnoceni",validators=[MinValueValidator(0.0), MaxValueValidator(100.0)])

    MARKS = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),

    )

    as_mark = models.CharField(max_length=1, choices=MARKS, blank=True,
                                help_text='Zadejte znamku za projekt', verbose_name="Znamka")

    project_id = models.ForeignKey(PROJECT, on_delete=models.CASCADE, verbose_name="projekt")
    def __str__(self):
        return f"{self.project_id} známka: {self.as_mark}"





class Profile(models.Model):
    profile_project = models.ManyToManyField(PROJECT, help_text="Na jakem projektu bude pracovat", verbose_name="projekt",null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    id_profile = models.CharField(max_length=10, blank=False,
                                help_text='Zadejte id studenta', verbose_name="priklad:it1987", default="itstudent")
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    profile_git = models.CharField(max_length=200, blank=False,
                                help_text='Zadejte link na github', verbose_name="Github")
    profile_time = models.TimeField(null=True, blank=True, help_text="Zadejte cas straveny na projektu", verbose_name="Cas")
    profile_foto = models.ImageField(upload_to='uploads/Profile_images/%Y/%m/%d/', null=True, blank=True,
                                    verbose_name="Profilova fotografie")
    def __str__(self):
        return f"{self.user.first_name} {self.id_profile}"


