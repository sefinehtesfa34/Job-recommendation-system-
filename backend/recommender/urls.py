from django.urls import path
from . import views
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('api/v1/users/', views.UserList.as_view(), name = 'user'),
    path('api/v1/jobs/', views.JobList.as_view(), name = 'jobs'),
    path('api/v1/user/<str:userId>/', views.UserDetail.as_view(), name = 'user_detail'),
    path('api/v1/job/<int:pk>/', views.JobDetail.as_view(), name = 'job_detail'),
    path('api/v1/token/access/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/recommend/<str:pk>/', views.RecommenderView.as_view(), name = 'recommend'),
    path('api/v1/profile/<str:userId>/', views.ProfileView.as_view(), name = 'profile'),
    path('api/v1/skill/', views.SkillView.as_view(), name = 'skill'),
    path('api/v1/skill<str:pk>/', views.SkillDetailView.as_view()),
    path('', TemplateView.as_view(template_name="index.html")),
    path('logout', LogoutView.as_view()),
    
]
