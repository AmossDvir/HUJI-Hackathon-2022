from http.client import HTTPResponse
import json
import ast
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

import db_handler
from .models import Hospital

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = "__all__"
# Create your views here.

def get_all_hospitals(request):
    hospitals = db_handler.get_all()
    serializer = HospitalSerializer(hospitals, many=True)
    return JsonResponse(serializer.data, safe=False)


# def get_hospitals_by_parameters(request):
#     if request.method == "GET":
#         param = request.GET.dict()
#         north_loc = param["north"]
#         east_loc = param["east"]
#         # if param["filter"] == "radius" :
#         #     hospitals =  db_handler.get_by_radius(north_loc= 31773465, east_loc=35196418, radius=2 )
#         # if param["filter"] == "district":
#         #     pass
#         all_hos = db_handler.get_all()
#         if param["radius"]:
#             r_hos = db_handler.get_by_radius(north_loc, east_loc, param["radius"])
#         else:
#             r_hos = all_hos
#         if not param["disrict"]:
#             d_hos = db_handler.get_by_field("disrict",param["district"])
#         else:
#             d_hos = all_hos
#         if not param["care"]:
#             c_hos = db_handler.get_by_field("care",param["care"])
#         else:
#             c_hos = all_hos
#         if not param["er"]:
#             d_hos = db_handler.get_by_field("er",param["er"])
#         else:
#             d_hos = all_hos
#         serializer = HospitalSerializer(hospitals, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     return JsonResponse({'email': 'leila@example.com'}, safe=False)
    
def get_hospitals_by_parameters(request):
    if request.method == "GET":
        param = request.GET.dict()
        north_loc = param["north"]
        east_loc = param["east"]
        # if param["filter"] == "radius" :
        #     hospitals =  db_handler.get_by_radius(north_loc= 31773465, east_loc=35196418, radius=2 )
        # if param["filter"] == "distrisct":
        #     pass
        all_hos = db_handler.get_all()
        if param["radius"]:
            r_hos = db_handler.get_by_radius(north_loc, east_loc, param["radius"])
            all_hos = list(set(all_hos) & set(r_hos))
        if param["disrict"]:
            d_hos = db_handler.get_by_field("disrict",param["district"])
            all_hos = list(set(all_hos) & set(d_hos))
        if not param["care"]:
            c_hos = db_handler.get_by_field("care",param["care"])
            all_hos = list(set(all_hos) & set(c_hos))
        if not param["er"]:
            e_hos = db_handler.get_by_field("er",param["er"])
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
