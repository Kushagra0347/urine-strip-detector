from django.contrib.auth.models import User
# REST Framework
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerailizer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username', 'email_address', 'first_name']


class RegisteredUserSerializer(serializers.ModelSerializer):
	token = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_token(obj):
		token = RefreshToken.for_user(obj)
		return str(token.access_token)

	class Meta:
		model = User
		fields = ['id', 'first_name', 'email', 'username', 'token']


class LoginSerializer(TokenObtainPairSerializer):
	def validate(self, attrs):
		data = super().validate(attrs)

		serialized_data = RegisteredUserSerializer(self.user).data

		for key, value in serialized_data.items():
			data[key] = value

		return data
