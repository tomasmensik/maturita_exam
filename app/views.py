from django.shortcuts import render
from django.views.generic import DetailView
# relative import of forms
from .models import User,Profile,PROJECT

def index(request):

  user = User.objects.all().count()
  user_detail = User.objects.all().count()
  projects = PROJECT.objects.all()
  context = {
  'user': user,
  'user_detail': user_detail,
  'projects': projects
 }
  return render(request, 'index.html', context=context)


