from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
# REST Framework
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
# Mine
from .serializers import RegisteredUserSerializer, LoginSerializer


class Login(TokenObtainPairView):
	serializer_class = LoginSerializer


@api_view(['POST'])
def signup(request):
	data = request.data

	try:
		user = User.objects.create(username=data['username'], first_name=data['f_name'], email=data['email'],
		                           password=make_password(data['password']))
		serializer = RegisteredUserSerializer(user, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		message = {'detail': 'User with this username already exists'}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)
