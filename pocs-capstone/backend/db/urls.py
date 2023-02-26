from django.urls import include, path
from rest_framework import routers
from .views import CustomUserCreate

router = routers.DefaultRouter()
#router.register(r'notes', views.NoteViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

app_name = 'db'
urlpatterns = [
    #path('', include(router.urls)),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('register/',CustomUserCreate.as_view(),name="create_user")
    
]