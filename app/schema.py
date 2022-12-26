import graphene

from graphene_django import DjangoObjectType, DjangoListField
from .models import Profile,ISSUES,ISSUES_CLASS,PROJECT,ASSESSEMENT,User


class Id_Profile(DjangoObjectType):
    class Meta:
        model = Profile
        fields = ("profile_project","user","id_profile","bio","birth_date","profile_git","profile_time","profile_foto")

class Id_Issues(DjangoObjectType):
    class Meta:
        model = ISSUES
        fields = "__all__"

class Id_Issues_class(DjangoObjectType):
    class Meta:
        model = ISSUES
        fields = "__all__"

class Id_Project(DjangoObjectType):
    class Meta:
        model = ISSUES
        fields = "__all__"

class Id_Assassement(DjangoObjectType):
    class Meta:
        model = ISSUES
        fields = "__all__"

class Id_User(DjangoObjectType):
    class Meta:
        model = ISSUES
        fields = "__all__"


class Query(graphene.ObjectType):
    all_profiles = graphene.List(Id_Profile)
    profile = graphene.Field(Id_Profile,id_profile=graphene.String(required=True) )

    def resolve_all_profiles(self, info, **kwargs):
        return Profile.objects.all()

    def resolve_profile(self, info, id_profile):
        try:
            return Profile.objects.get(id_profile=id_profile)
        except Profile.DoesNotExist:
            return None



schema = graphene.Schema(query=Query)    