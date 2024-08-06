from django.urls import path
from ClassifyKOAImagesApp import views


urlpatterns=[
    path('kneepatients', views.KneeOsteoarthritisApi),
    path('kneepatients/savefile',views.SaveFile),
    path('kneepatients/upload',views.SegmentUploadedImage)
]