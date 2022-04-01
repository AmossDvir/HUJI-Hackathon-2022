from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    pass


# Example: 
class Location(models.Model):
    # Here I define my fields
    x = models.BigIntegerField()
    y = models.BigIntegerField()
    
# Create your models here.
