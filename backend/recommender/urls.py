from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('api/v1/users/', views.UserList.as_view(), name = 'user'),
    path('api/v1/jobs/', views.JobList.as_view(), name = 'jobs'),
    path('api/v1/login/', views.Login.as_view(), name = 'login'),
    path('api/v1/user/<str:userId>/', views.UserDetail.as_view(), name = 'user_detail'),
    path('api/v1/job/<int:pk>/', views.JobDetail.as_view(), name = 'job_detail'),
    path('api/v1/token/access/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/recommend/<str:pk>', views.RecommenderView.as_view(), name = 'recommend')
]
