from django.urls import path
from . import views
urlpatterns = [
    path('user/', views.UserList.as_view(), name = 'user')
]
