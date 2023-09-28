import os
import json
# Django
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
# REST Framework
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
# Mine
from .utility import extract_colors
from .models import UrineStrip
from .serializers import UrineStripSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addUrineStrip(request):
	data = request.data
	try:
		file = data['urine_strip']

		urine_strip_obj = UrineStrip.objects.create(urine_strip=file)

		file_path = os.path.join(settings.BASE_DIR, 'Media\\UrineStrip', str(file))

		colors = extract_colors(
			file_path)  # It just works works, everytime there's different reading of colors for the same picture
		colors_obj = {
			'URO': colors[0],
			'BIL': colors[1],
			'KET': colors[2],
			'BLD': colors[3],
			'PRO': colors[4],
			'NIT': colors[5],
			'LEU': colors[6],
			'GLU': colors[7],
			'SG': colors[8],
			'PH': colors[9]
		}
		json.dumps(colors_obj)

		urine_strip_obj.colors = colors_obj
		urine_strip_obj.save()

		serializer = UrineStripSerializer(urine_strip_obj, many=False)

		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		return Response({'message': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)
