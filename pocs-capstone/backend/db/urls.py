from django.urls import include, path
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()
router.register(r'tasks',TaskViewSet,basename='tasks')
router.register(r'inventory',InventoryViewSet,basename='inventory')
router.register(r'avatar',AvatarViewSet,basename='avatar')
router.register(r'user-data',NewUserViewSet,basename="user-data")
#router.register(r'canvas-integration',CanvasTaskViewSet,basename="oof")
#router.register(r'users',CustomUserCreate.as_view(),basename="user")
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

app_name = 'db'
#urlpatterns = router.urls

urlpatterns = [
    path('register/',CustomUserCreate.as_view(),name="create_user"),
    path('logout/blacklist',BlacklistTokenView.as_view(),name="blacklist"),
    path('canvas/',CanvasView.as_view(),name="pose-canvas-tasks"),
    path('notify/', PushNotificationView.as_view(), name='notify'),
    path('', include(router.urls)),
]