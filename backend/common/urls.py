from rest_framework import routers
from projects.views import ProjectViewSet
# Defining Router
common_router = routers.DefaultRouter()

common_router.register(r'projects', ProjectViewSet, 'projects')
