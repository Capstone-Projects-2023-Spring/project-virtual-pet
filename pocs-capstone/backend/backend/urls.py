from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('db.urls',namespace='db')),
    path('api/token/',TokenObtainPairView.as_view(),name='token_obtain_pair'), # get a token
    path('api/user/',include('db.urls',namespace='db')),
    path('api/token/refresh/',TokenRefreshView.as_view(),name='token_refresh'), # refresh a token
    path('api/token/verify/',TokenVerifyView.as_view(),name='token_verify'), # verify a token without signing key


    path('docs/',include_docs_urls(title="Study Buddies API")),
    path('openapi', get_schema_view(title="Study Buddies - User Registration",description="User Registration, LogIn, LogOut Endpoints",version='0.0.1'),name='openapi-schema'),

]
