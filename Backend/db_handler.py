from math import sqrt, pow
import functools
from api.models import Hospital

# hospital_dict = {
#     "name": "Hadash Ein Karem",
#     "phone": "026777111",
#     "north_loc" : 31765090,
#     "east_loc" : 35148933,
#     "district" : Hospital.DISTRICTS.JERUSALEM,
#     "min_till_doctor": 125,
#     "is_private": False,
#     "er_type": Hospital.ER_TYPE.HOS,
#     "care_fields": [Hospital.CARE_CHOICES.PSYCH, Hospital.CARE_CHOICES.CARDI]
# }

def add_hospital(hosp_dict):
    h = Hospital(**hosp_dict)
    h.save()


def get_by_field(field, value):
    """" 
    Return all hospitals with field: value
    """
    hospitals = Hospital.objects.filter(**{field: value})
    return hospitals

def get_all():
    hospitals = Hospital.objects.all()
    return hospitals


def get_nearest_places(n_loc, e_loc, num):
    """" 
    Return nearest num hospitals to the given location
    """
    hospitals = get_all()
    def compare_hospitals(h1, h2):
        h1_dist = cal_distance(n_loc, e_loc, h1.north_loc, h1.east_loc)
        h2_dist = cal_distance(n_loc, e_loc, h2.north_loc, h2.east_loc)
        return h1_dist - h2_dist
    hospitals = sorted(hospitals, key=functools.cmp_to_key(compare_hospitals))
    return hospitals[:num]

def get_by_radius(north_loc, east_loc, radius):
    """" 
    Return all hospitals inside the given radius from the given location
    """
    nearest_hospitals = []
    hospitals = get_all()
    for h in hospitals:
        if cal_distance(north_loc, east_loc, h.north_loc, h.east_loc) <= radius:
            nearest_hospitals.append(h)
    return nearest_hospitals


def cal_distance(n_loc, e_loc, other_n_loc, other_e_loc):
    return sqrt(pow(n_loc - other_n_loc, 2) + pow(e_loc - other_e_loc, 2))

