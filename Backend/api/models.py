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
        ALL = 0, "All",
        GASTRO = 1, "Gastroenterology"
        GYNAECO = 2, "Gynaecology"
        CARDI = 3, "Cardiology"
        DENDIS = 4, "Dendistry"
        PSYCH = 5, "Psychiatry"
        ORTHO = 6, "Orthopedic"
        SURGERY = 7, "Surgery"

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
    care_fields = MultiSelectField(choices=CARE_CHOICES.choices, default=CARE_CHOICES.ALL)

    # def __str__(self):
    #     return self.name