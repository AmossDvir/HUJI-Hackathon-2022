from django.db import models
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField


class User(AbstractUser):
    pass
    
class Hospital(models.Model):
    class ER_TYPE(models.IntegerChoices):
        HOS = 1, "Hospital"
        BIKUR = 2, "Bikur_Rofe"
        TEREM = 3, "Terem"
    
    class CARE_CHOICES(models.IntegerChoices):
        OTHER = 0, "Other"
        BROKEN_BONE = 1, "Broken bone"
        CUT = 2, "Cut"
        RASH = 3, "Rash"
        ALLERGY = 4, "Non lethal allergy"
        BREATH = 5, "Shortness of breath"
        CHEST = 6, "Chest pain"
        FLU = 7, "Flu"

    class DISTRICTS(models.IntegerChoices):
        NORTH = 1, "North",
        CENTER = 2, "Center",
        JERUSALEM = 3, "Jerusalem"
        SOUTH = 4, "South"


    # our variables:
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=12, unique=True)
    north_loc = models.SmallIntegerField()
    east_loc = models.SmallIntegerField()
    district = models.PositiveSmallIntegerField(choices=DISTRICTS.choices, default=DISTRICTS.JERUSALEM)
    min_till_doctor = models.SmallIntegerField()
    is_private = models.BooleanField()
    er_type = models.PositiveSmallIntegerField(choices=ER_TYPE.choices, default=ER_TYPE.HOS)
    care_fields = MultiSelectField(choices=CARE_CHOICES.choices, default=CARE_CHOICES.OTHER)

    # def __str__(self):
    #     return self.name