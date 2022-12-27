import graphene

from graphene_django import DjangoObjectType, DjangoListField
from ..models import PROFILE as PROFILEMODEL
from ..models import PROJECT as PROJECTMODEL

    
class Project(DjangoObjectType):
    
    class Meta:
        model = PROJECTMODEL
        fields = ("id","project_issue_call","pro_name","pro_description")

class Profile(DjangoObjectType):

    class Meta:
        model = PROFILEMODEL
        fields = ("id","profile_project","user","id_profile","bio","birth_date","profile_git","profile_time","profile_foto")
    projekty=DjangoListField(Project)
    def resolve_projekty(self, info):
        return self.profile_project.all()

class Query(graphene.ObjectType):
    AllProfiles = graphene.List(Profile)
    AllProjects = graphene.List(Project)
    def resolve_AllProfiles(root, info):
        return PROFILEMODEL.objects.all()

    def resolve_AllProjects(root, info):
        return PROJECTMODEL.objects.all()
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