import graphene

from graphene_django import DjangoObjectType, DjangoListField
from ..models import PROFILE as PROFILEMODEL
from ..models import PROJECT as PROJECTMODEL
from ..models import User as USERMODEL
from ..models import TIMESPEND as TIMESPENDMODEL
from ..models import ISSUES as ISSUEMODEL

from django.db.models import Sum
import graphql_jwt
from graphql_jwt.decorators import login_required

class Issues(DjangoObjectType):
    class Meta:
        model = ISSUEMODEL  
        fields = ["isdone", "issue_detail"]


class Project(DjangoObjectType):
    
    class Meta:
        model = PROJECTMODEL
        fields = ["id","project_issue_call","pro_name","pro_description"]


    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.filter(profile_project=self)


class User(DjangoObjectType):
    class Meta:
        model = USERMODEL
        filds = ["id","username","password","email","first_name","last_name","is_active","last_login",]

    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.filter(user = self)



class TimeSpend(DjangoObjectType):
    class Meta:
        model = TIMESPENDMODEL
        fields = ["time","month"]
    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.filter(profile_time_spend = self)

class Profile(DjangoObjectType):
    class Meta:
        model = PROFILEMODEL
        fields = ["id","profile_project","user","id_profile","bio","birth_date","profile_git","profile_time_spend","profile_foto", "pro_class" , "profile_foto"]



class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    delete_token_cookie = graphql_jwt.DeleteJSONWebTokenCookie.Field()
    # Long running refresh tokens
    delete_refresh_token_cookie = graphql_jwt.DeleteRefreshTokenCookie.Field()


class Query(graphene.ObjectType):
    projects = graphene.List(Project)
    profiles = graphene.List(Profile)
    users = graphene.List(User)
    total_profiles = graphene.Int()
    timesSpend = graphene.Int()
    get_user = graphene.Field(User, token=graphene.String(required=True))

    @login_required
    def resolve_get_user(self, info, **kwargs):
        user = info.context.user
        if not user.is_authenticated:
             raise Exception("Authentication credentials were not provided")
        return info.context.user

    def resolve_profileTimeSpend(self, info):
        time_spend = PROFILEMODEL.objects.values('month').annotate(time=Sum('profileTime'))
        return [TimeSpend(time=item['time'], month=item['month']) for item in time_spend]


    def resolve_timeSpend(self, info):
        return TIMESPENDMODEL.objects.all()

    def resolve_total_profiles(self, info):
        return PROFILEMODEL.objects.count()



    def resolve_projects(self, info):
        return PROJECTMODEL.objects.all()

    def resolve_profiles(self, info):
        return PROFILEMODEL.objects.all()

    def resolve_users(self, info):
        return USERMODEL.objects.all()
schema = graphene.Schema(query=Query, mutation=Mutation)


