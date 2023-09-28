from django.db import models

# Create your models here.
class UrineStrip(models.Model):
	urine_strip = models.ImageField(upload_to='UrineStrip')
	colors = models.JSONField(blank=True, null=True)
	uploaded_at = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return self.urine_strip.name