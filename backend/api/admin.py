from django.contrib import admin
from .models import UrineStrip

# Register your models here.
@admin.register(UrineStrip)
class UrineStripAdmin(admin.ModelAdmin):
    list_display = ['urine_strip', 'colors', 'uploaded_at']