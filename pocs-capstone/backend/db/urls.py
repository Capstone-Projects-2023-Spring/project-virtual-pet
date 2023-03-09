from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import *
from .views import CookieTokenRefreshView, CookieTokenObtainPairView # Import the above views


router = DefaultRouter()
router.register(r'tasks',TaskViewSet,basename='tasks')
router.register(r'inventory',InventoryViewSet,basename='inventory')
router.register(r'avatar',AvatarViewSet,basename='avatar')
#router.register(r'users',CustomUserCreate.as_view(),basename="user")
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

app_name = 'db'
#urlpatterns = router.urls

urlpatterns = [
    path('register/',CustomUserCreate.as_view(),name="create_user"),
    path('', include(router.urls)),
    path('api/token/',CookieTokenObtainPairView.as_view(),name='token_obtain_pair'), # get a token
    #path('api/user/',include('db.urls',namespace='database')),
    path('api/token/refresh/',CookieTokenRefreshView.as_view(),name='token_refresh'), # refresh a token
    
]