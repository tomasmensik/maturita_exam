from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import Sum


def profile_images(instance, filename):
    return "image_profile/" + str(instance.id) + "/image/" + filename





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
class LANGUAGES(models.Model):
      language = models.CharField(max_length=30, blank=True, default='jine',
                                help_text='Zadejte programovací jazyky', verbose_name="jazyk")      
      def __str__(self):
        return f"{self.language}"
class PROJECT(models.Model):
    
    pro_language = models.ManyToManyField(LANGUAGES)
    project_issue_call = models.ManyToManyField(ISSUES_CLASS, help_text="Vytvoreni tridy pro issues", verbose_name="trida pro issue",  null=True, blank=True)

    pro_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev projektu', verbose_name="Nazev")

    pro_description = models.TextField(blank=False,
                                help_text='Zadejte strucny popis projektu', verbose_name="popis")

    TYPES = (
        ('hardware', 'hardware'),
        ('software', 'software'),
    )

    # Pole s definovanými předvolbami pro uložení typu přílohy
    types = models.CharField(max_length=30, choices=TYPES, blank=True, default='software',
                                help_text='Zvolte, zda projekt bude softwarový, nebo hardwarový', verbose_name="Typ")

    # Pole s definovanými předvolbami pro uložení typu přílohy
                        

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


class TIMESPEND(models.Model):
    time = models.IntegerField(null=True, blank=True, help_text="Zadejte pocet hodin stravenych na projektu", verbose_name="Cas")
    MONTH = (
        ('January', 'January'),
        ('February', 'February'),
        ('March', 'March'),
        ('April', 'April'),
        ('May', 'May'),
        ('June', 'June'),
        ('July', 'July'),
        ('August', 'August'),
        ('September', 'September'),
        ('October', 'October'),
        ('November', 'November'),
        ('December', 'December'),
    )

    month = models.CharField(max_length=30, choices=MONTH, blank=False,
                                help_text='Zvolte zda je uživatel programátor, nebo síťař', verbose_name="měsíc")  
    def __str__(self):
        return f"{self.id}" + ". " + f"{self.month}" + " pocet hodin:" + f"{self.time}"




class PROFILE(models.Model):
    profile_project = models.ManyToManyField(PROJECT, help_text="Na jakem projektu bude pracovat", verbose_name="projekt",null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)

    id_profile = models.CharField(max_length=10, blank=True,
                                help_text='Zadejte id studenta', verbose_name="priklad:it1987", unique=True)

    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    profile_git = models.CharField(max_length=200, blank=False,
                                help_text='Zadejte link na github', verbose_name="Github")
    profile_time_spend = models.ManyToManyField(TIMESPEND, help_text="Kolik hodin a za jaký měsíc chcete přidat?", verbose_name="čas",null=True, blank=True)
    profile_foto = models.ImageField(upload_to=profile_images, blank=True, null=True)
    CLASS = (
        ('Programmer', 'Programmer'),
        ('Networker', 'Networker'),
    )
    is_admin = models.BooleanField(default=False, help_text="Jste učitel, nebo student? ANO, NE", verbose_name="Učitel")
    # Pole s definovanými předvolbami pro uložení typu přílohy
    pro_class = models.CharField(max_length=30, choices=CLASS, blank=True, default='Programmer',
                                help_text='Zvolte zda je uživatel programátor, nebo síťař', verbose_name="Třída")                                                           
    def __str__(self):
        return f"{self.user.first_name} {self.id_profile} {self.pro_class}"

class COMMENT(models.Model):

    profile_comment = models.ManyToManyField(PROFILE, help_text="Kdo komentář napsal", verbose_name="uživatel",null=True, blank=True)
   
    content = models.TextField(max_length=500, blank=True)
    time_comment = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.time_comment}"
