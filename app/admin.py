from django.contrib import admin
from django.apps import apps
from .models import *

admin.site.register(PROJECT)
admin.site.register(ASSESSEMENT)
admin.site.register(ISSUES_CLASS)
admin.site.register(ISSUES)
admin.site.register(PROFILE)
admin.site.register(TIMESPEND)
