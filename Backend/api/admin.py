from django.contrib import admin
from api.models import Location, User
# Register your models here.

# 
admin.site.register([Location,User])