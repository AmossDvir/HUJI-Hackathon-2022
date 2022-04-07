from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from multiselectfield import MultiSelectField


class User(AbstractUser):
    pass


# Example: 
# class Location(models.Model):
#     # Here I define my fields
#     x = models.BigIntegerField()
#     y = models.BigIntegerField()
    
# Create your models here.
class Hospital(models.Model):
    class ER_TYPE(models.IntegerChoices):
        HOS = 1, "HOSPITAL"
        BIKUR = 2, "BIKUR_ROFE"
        TEREM = 3, "TEREM"
    
    class CARE_CHOICES(models.IntegerChoices):
        GASTRO = 1, "GASTROENTEROLOGY"
        GYNAECO = 2, "GYNAECOLOGY"
        CARDI = 3, "CARDIOLOGY"
        DENDIS = 4, "DENDISTRY"
        PSYCH = 5, "PSYCHIATRY"
        ORTHO = 6, "ORTHOPEDIC"
        SURGERY = 7, "SURGERY"

    # our variables:
    name = models.CharField(max_length=30)
    phone = PhoneNumberField(null=False, blank=False, unique=True) # maybe change later
    # phone = models.CharField(max_length=12)
    x_location = models.SmallIntegerField(max_length=8)
    y_location = models.SmallIntegerField(max_length=8)
    min_till_doctor = models.SmallIntegerField(max_length=8)
    is_private = models.BooleanField()
    er_type = models.PositiveSmallIntegerField(choices=ER_TYPE.choices, default=ER_TYPE.HOS)
    care_fields = MultiSelectField(choices=CARE_CHOICES.choices)
