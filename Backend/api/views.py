from http.client import HTTPResponse
import json
import ast
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

import db_handler
from .models import Hospital

CUR_LOC_N = 31773465
CUR_LOC_E = 35196418
TYPE_DICT = {"Hospital": 1, "Bikur_Rofe": 2, "Terem" : 3 }
DISTRICT_DICT = {"North" : 1,"Center" : 2, "Jerusalem" : 3, "South" : 4}
CARE_DICT = {"Other" : 0, "Broken bone" : 1, "Cut" : 2, "Rash" : 3, "Non lethal allergy" : 4, "Shortness of breath" :5 , "Chest pain" : 6, "Flu" : 7 }


class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = "__all__"
# Create your views here.

def get_all_hospitals(request):
    hospitals = db_handler.get_all()
    serializer = HospitalSerializer(hospitals, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_hospitals_by_parameters(request):
    if request.method == "GET":
        param = request.GET.dict()
        north_loc = CUR_LOC_N
        east_loc = CUR_LOC_E
        all_hos = db_handler.get_all()
        if param["radius"]:
            r_hos = db_handler.get_by_radius(north_loc, east_loc, int(param["radius"]))
            all_hos = list(set(all_hos) & set(r_hos))
        # if param["district"]:
        #     d_hos = db_handler.get_by_field("district",DISTRICT_DICT[param["district"]])
        #     all_hos = list(set(all_hos) & set(d_hos))
        if not param["care"]:
            c_hos = db_handler.get_by_field("care",CARE_DICT[param["care"]])
            all_hos = list(set(all_hos) & set(c_hos))
        if not param["er"]:
            e_hos = db_handler.get_by_field("er",TYPE_DICT[param["er"]])
            all_hos = list(set(all_hos) & set(e_hos))
        serializer = HospitalSerializer(all_hos, many=True)
        return JsonResponse(serializer.data, safe=False)
    return JsonResponse({'NOT A GET REQUEST'}, safe=False)

def Convert(tup, di):
    """convert list of tuples to dic """
    for a, b in tup:
        di.setdefault(a, []).append(b)
    return di


def district_choices(request):
    choices = db_handler.get_district_choices()
    J_choice = {}
    J_choice = Convert(choices,J_choice)
    return JsonResponse(J_choice, safe=False)


def care_choices(request):
    choices = db_handler.get_care_choices()
    J_choice = {}
    J_choice = Convert(choices,J_choice)
    return JsonResponse(J_choice, safe=False)


def er_type(request):
    choices = db_handler.get_er_types()
    J_choice = {}
    J_choice = Convert(choices,J_choice)
    return JsonResponse(J_choice, safe=False)


def emergency(request):
    param = request.GET.dict()
    best_hospital = db_handler.get_nearest_places(CUR_LOC_N, CUR_LOC_E, num=1)
    serializer = HospitalSerializer(best_hospital[0])
    return JsonResponse(serializer.data, safe=False)