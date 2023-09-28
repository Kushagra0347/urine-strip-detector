import numpy as np
from PIL import Image
from sklearn.cluster import KMeans

def extract_colors(file_path):
	img = Image.open(file_path)
	img_arr = np.array(img)

	num_pixels = img_arr.shape[0] * img_arr.shape[1]
	img_arr_new = img_arr.reshape(num_pixels, -1)

	num_colors = 10

	kmeans = KMeans(n_clusters=num_colors)
	kmeans.fit(img_arr_new)

	colors = kmeans.cluster_centers_
	colors = colors.astype(int)

	res = []

	for color in colors:
		res.append(color.tolist())

	return res