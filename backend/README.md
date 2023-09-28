# Urine Test Color Extraction API

This project aims to develop a system for extracting the color information from urine test strips. Urine tests are
commonly used in medical diagnostics to detect various health conditions and monitor the overall well-being of
individuals. The color of the urine test strips provides valuable information about the presence and concentration of
certain substances in the urine, such as glucose, protein, ketones, and pH levels.

The goal of this project is to automate the process of extract all the colors from the urine test strips and return it
as a json result. By leveraging computer vision techniques, we aim to create a system that can capture an image of a
urine test strip and extract the relevant color information from it. This extracted color data can then be analyzed to
determine the levels of different substances in the urine.

### Some Endpoints

**Authentication**

*Sign Up*

- /user/signup

*Response*

```json
{
  "status": "success",
  "code": 200,
  "data": {
    "id": "1",
    "username": "rakesh",
    "email": "rakesh@rakesh.com",
    "first_name": "Rakesh",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTA4MTUyLCJpYXQiOjE2ODcxMDQ1NTIsImp0aSI6IjBkYzE1YmQwZDgzMzQzNmM4MmE1OWY1ZWU3MjRlMDUwIiwidXNlcl9pZCI6MTIsImVtYWlsIjoicmFrZXNoQHJha2VzaC5jb20iLCJyb2xlIjoiUkVHVUxBUiIsImlzcyI6IkRpdmVIUSJ9.hb8SdWEsFaAcUCsr7qkYRrFUummRtIF-JgcletlddX4"
  }
}
```

*Login*

- /user/login

*Response*

```json
{
  "status": "success",
  "code": 200,
  "data": {
    "id": "1",
    "username": "rakesh",
    "email": "rakesh@rakesh.com",
    "first_name": "Rakesh",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTA4MTUyLCJpYXQiOjE2ODcxMDQ1NTIsImp0aSI6IjBkYzE1YmQwZDgzMzQzNmM4MmE1OWY1ZWU3MjRlMDUwIiwidXNlcl9pZCI6MTIsImVtYWlsIjoicmFrZXNoQHJha2VzaC5jb20iLCJyb2xlIjoiUkVHVUxBUiIsImlzcyI6IkRpdmVIUSJ9.hb8SdWEsFaAcUCsr7qkYRrFUummRtIF-JgcletlddX4"
  }
}
```

**Urine Strip**

*Upload*

- /urine-strip/add

*Response*

```json
{
  "status": "success",
  "code": 200,
  "data": {
    "urine_strip": "file",
    "colors": "JSON_Object of the colors in the Urine Strip Sample"
  }
}
```

### How to set up locally?

- Clone the repo

```
git clone https://github.com/Kushagra0347/urine-strip-detector.git
```

- Change the working directory

```
cd urine-strip-detector
```

- Install the dependencies

```
pip install -r requirements.txt
```

- Change the db, if you don't have postgresql installed
    - In the `settings.py` file, scroll down to the line where `DATABASES` variable is defined and copy the below code
      in place of the existing one. **Adjust the tabs accordingly after pasting**.

```
DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': BASE_DIR / 'Urine Strip DB',
	}
}
```

- Migrate the models to the db

```
python3 manage.py makemigrations
python3 manage.py migrate
```

- Run the server

```
python3 manage.py runserver
```

Hurray! Your API Server has been successfully started!

**Accessing Admin Panel**

- Create a Super User

```
python3 manage.py createsuperuser
```

- Login to the Admin Portal

```
go to http://127:0.0.1:8000/admin, and login with your superuser credentials
```

Hurray! You're in Amin Panel.