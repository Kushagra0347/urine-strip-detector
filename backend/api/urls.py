from django.urls import path
from . import views

urlpatterns = [
	path('add', views.addUrineStrip, name='add-urine-strip')
]