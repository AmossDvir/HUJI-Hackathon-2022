


from api.models import Hospital


hospital_dict = {
    "name": "Hadash Ein Karem",
    "phone": "026777111",
    "north_loc" : 31765090,
    "east_loc" : 35148933,
    "district" : Hospital.DISTRICTS.JERUSALEM,
    "min_till_doctor": 125,
    "is_private": False,
    "er_type": Hospital.ER_TYPE.HOS,
    "care_fields": [Hospital.CARE_CHOICES.PSYCH, Hospital.CARE_CHOICES.CARDI]
}

def add_hospital(hosp_dict=hospital_dict):
    h = Hospital(hosp_dict)
    # import ipdb; ipdb.set_trace()


add_hospital(hospital_dict)