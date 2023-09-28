from rest_framework import serializers
# Mine
from .models import UrineStrip
class UrineStripSerializer(serializers.ModelSerializer):
	class Meta:
		model = UrineStrip
		fields = ['urine_strip', 'colors']