from django.db import models



class PROJECT(models.Model):

    pro_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev projektu', verbose_name="Nazev")

    pro_description = models.TextField(blank=False,
                                help_text='Zadejte strucny popis projektu', verbose_name="popis")

    def __str__(self):
        return f"Nazev projektu {self.pro_name}"

class ASSESSEMENT(models.Model):

    as_percent = models.FloatField(blank=True, null=True, help_text=" Zadejte hodnoceni v procentech",
                                     verbose_name="Procenta hodnoceni")

    MARKS = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),

    )

    as_mark = models.CharField(max_length=1, choices=MARKS, blank=True,
                                help_text='Zadejte znamku za projekt', verbose_name="Znamka")

    project_id = models.ForeignKey(PROJECT, on_delete=models.CASCADE)
    def __str__(self):
        return f"Hodnoceni projektu{self.pro_name}"


class ISSUES_CLASS(models.Model):

    issues_class_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev pro tridu ukolu', verbose_name="Nazev pro tridu ukolu")

    issues_class_color = models.CharField(max_length=45, blank=False, default="rgb(255,255,255)",
                                help_text='Zadejte  barvu ve tvaru: rgb(255,255,255)', verbose_name="barva pro tridu ukolu")

    class_detail = models.TextField(blank=True,
                                help_text='Zadejte strucny popis tridy pro ukoly', verbose_name="popis")

    project_id = models.ManyToManyField(PROJECT, help_text="Pro jaky projekt je trida urcena", verbose_name="projekt")

    class_image = models.ImageField(upload_to='uploads/Issue_class/%Y/%m/%d/', null=True, verbose_name="Ilustracni foto")
    def __str__(self):
        return f"{self.issues_class_name}"

class ISSUES(models.Model):

    issue_name = models.CharField(max_length=45, blank=False,
                                help_text='Zadejte nazev pro tridu ukolu', verbose_name="Nazev pro tridu ukolu")

    issue_color = models.CharField(max_length=45, blank=False, default="rgb(255,255,255)",
                                help_text='Zadejte  barvu ve tvaru: rgb(255,255,255)', verbose_name="barva pro tridu ukolu")

    issue_detail = models.TextField(blank=True,
                                help_text='Zadejte strucny popis tridy pro ukoly', verbose_name="popis")

    issues_class = models.ManyToManyField(ISSUES_CLASS, help_text="Pro jakou tridu ma byt issue urcen", verbose_name="trida")

    class_image = models.ImageField(upload_to='uploads/Issue/%Y/%m/%d/', null=True, verbose_name="Ilustracni foto")
    def __str__(self):
        return f"{self.issues_class_name}"