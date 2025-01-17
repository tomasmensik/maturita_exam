"""maturita URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings

from django.contrib.staticfiles.urls import static
from django.contrib import admin
from django.urls import path, include
from app.views import front
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from app.api.schema import schema
from graphql_jwt.decorators import jwt_cookie


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="front"),
    path("app/graphql/", csrf_exempt(jwt_cookie(GraphQLView.as_view(graphiql=True, schema=schema)))),
    path("gql/", csrf_exempt(jwt_cookie(GraphQLView.as_view(batch = True, schema=schema)))),
    path('accounts/', include('django.contrib.auth.urls')),
] +  static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

