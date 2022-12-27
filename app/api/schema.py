import graphene

from graphene_django import DjangoObjectType, DjangoListField
from ..models import PROFILE as PROFILEMODEL
from ..models import PROJECT as PROJECTMODEL

class Project(DjangoObjectType):
    
    class Meta:
        model = PROJECTMODEL
        fields = ["id","project_issue_call","pro_name","pro_description"]


    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.filter(profile_project=self)
"""
    @classmethod
    def get_node(cls, info, id):
        return Project.objects.get(id=id)    
"""

class Profile(DjangoObjectType):
    class Meta:
        model = PROFILEMODEL
        fields = ["id","profile_project","user","id_profile","bio","birth_date","profile_git","profile_time","profile_foto"]
"""    
    def resolve_projects(self, info):
        return PROJECTMODEL.objects.filter(id=self)

    @classmethod
    def get_node(cls, info, id):
        return Project.objects.get(id=id) 
"""

class Query(graphene.ObjectType):
    projects = graphene.List(Project)
    profiles = graphene.List(Profile)
    def resolve_projects(self, info):
        return PROJECTMODEL.objects.all()

    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.all()

schema = graphene.Schema(query=Query)











#class Id_Issues(DjangoObjectType):
#    class Meta:
#        model = ISSUES
#        fields = "__all__"

#class Id_Issues_class(DjangoObjectType):
#    class Meta:
#        model = ISSUES_CLASS
#        fields = "__all__"



#class Id_Assassement(DjangoObjectType):
#    class Meta:
#        model = ASSESSEMENT
#        fields = "__all__"

#class Id_User(DjangoObjectType):
#    class Meta:
#        model = User
#        fields = "__all__"



#        try:
#            return Profile.objects.get(id_profile=id_profile)
#        except Profile.DoesNotExist:
#            return None



schema = graphene.Schema(query=Query)    