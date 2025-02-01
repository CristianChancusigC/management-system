from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import MemberViewSet, TrainerViewSet
# from management import views

#api 
router = routers.DefaultRouter()
router.register(r'members', MemberViewSet,'members')
router.register(r'trainers', TrainerViewSet,'trainers')

urlpatterns = [
path('api/',include(router.urls)),
# path('docs/', include_docs_urls(title='Gym Manager API')),
]