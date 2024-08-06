from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.conf import settings
from ClassifyKOAImagesApp.models import KneePatients
from ClassifyKOAImagesApp.serializers import KneePatientsSerializer
from django.core.files.storage import default_storage
import pickle
import numpy as np
import os
from django.http import JsonResponse
from skimage.io import imread, imshow
from skimage.transform import resize
from skimage import color
import matplotlib.pyplot as plt
from PIL import Image
import cv2

# Load the UNet model
with open('models/model_KOA_UNet', 'rb') as f:
    unet_model = pickle.load(f)
# Load the Resnet model
with open('models/Resnet_Model_to_Classify_KneeOA_Pickle','rb') as file:
    resnet_model = pickle.load(file)
def segmentImage(image_path,file_name):
    IMG_WIDTH = 128
    IMG_HEIGHT = 128
    IMG_CHANNELS = 3
    img = imread(image_path)
    print("img.shape",img.shape)
    img = resize(img, (IMG_HEIGHT, IMG_WIDTH), mode='constant', preserve_range=True)
    print("resize img.shape",img.shape)
    img = color.gray2rgb(img)
    print(" gray to rgb img.shape",img.shape)
    img = np.expand_dims(img, axis=0)
    print(" expand dims img.shape",img.shape)
    segmentation = unet_model.predict(img, verbose=1)
    segmented_image = (segmentation > 0.9995).astype(np.uint8)
    segmented_image = np.squeeze(segmented_image, axis=0)
    fig = imshow(segmented_image)
    fig.set_cmap('gray')  
    fig.axes.get_xaxis().set_visible(False)
    fig.axes.get_yaxis().set_visible(False)
    segmented_image_name = 'segmented_' + file_name
    output_filename = os.path.join(settings.MEDIA_ROOT, segmented_image_name)
    plt.savefig(output_filename,transparent=True,bbox_inches='tight')
    plt.close() 
    im = Image.open(output_filename)
    left = 10
    top = 15
    right = 430
    bottom = 435
    im1 = im.crop((left, top, right, bottom))
    im1.save(output_filename)

def segment_image(image_path,file_name):
    IMG_WIDTH = 128
    IMG_HEIGHT = 128
    IMG_CHANNELS = 3
    img = imread(image_path)
    img = resize(img, (IMG_HEIGHT, IMG_WIDTH), mode='constant', preserve_range=True)
    img = color.gray2rgb(img)
    img = np.expand_dims(img, axis=0)
    segmentation = unet_model.predict(img, verbose=1)
    segmented_image = (segmentation > 0.9995).astype(np.uint8)
    segmented_image = np.squeeze(segmented_image, axis=0)
    fig = imshow(segmented_image)
    fig.set_cmap('gray')  
    fig.axes.get_xaxis().set_visible(False)
    fig.axes.get_yaxis().set_visible(False)
    segmented_image_name = 'segmented_' + file_name
    output_filename = os.path.join(settings.MEDIA_ROOT, segmented_image_name)
    plt.savefig(output_filename,transparent=True,bbox_inches='tight')
    plt.close() 
    im = Image.open(output_filename)
    left = 10
    top = 15
    right = 430
    bottom = 435
    im1 = im.crop((left, top, right, bottom))
    im1.save(output_filename)

def classify_image(image_path):
    img = imread(image_path)
    img = cv2.resize(img, (224,224))
    img = color.gray2rgb(img)
    img = np.expand_dims(img, axis=0)
    print(img.shape)
    class_names = ["Normal", "Doubtful", "Mild", "Moderate", "Severe"]
    pred=resnet_model.predict(img)
    print("pred: ",pred)
    output_class = class_names[np.argmax(pred)]
    print("The predicted class is ",output_class)
    return output_class

@csrf_exempt
def KneeOsteoarthritisApi(request,id=0):
    if request.method=='GET':
        kneepatients = KneePatients.objects.all()
        kneepatients_serializer=KneePatientsSerializer(kneepatients,many=True)
        return JsonResponse(kneepatients_serializer.data,safe=False)
    elif request.method=='POST':
        kneepatients_data=JSONParser().parse(request)
        kneepatients_serializer=KneePatientsSerializer(data=kneepatients_data)
        if kneepatients_serializer.is_valid():
            kneepatients_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
@csrf_exempt
def SaveFile(request):
    if request.method == 'POST':
        patient_name = request.POST.get('PatientName')
        age = request.POST.get('Age')
        gender = request.POST.get('Gender')
        file = request.FILES['file']
        previous_injuries = request.POST.get('PreviousInjuries') == 'true'  
        genetics = request.POST.get('Genetics') == 'true' 
        height = request.POST.get('Height')
        weight = request.POST.get('Weight')
        file_name = default_storage.save(file.name, file)
        segment_image(os.path.join(settings.MEDIA_ROOT, file_name),file_name)
        output_class = classify_image(os.path.join(settings.MEDIA_ROOT, file_name))
        knee_patient = KneePatients(
            PatientName=patient_name,
            Age=age,
            Gender=gender,
            XRayImageFileName=file_name,  
            SegmentedImageFileName='segmented_' + file_name,
            PreviousInjuries=previous_injuries,
            Genetics=genetics,
            Height=height,
            Weight=weight,
            OutputClass=output_class
        )
        knee_patient.save()
        return JsonResponse({"message": "Data saved successfully.", "segmented_image": 'segmented_' + file_name,"output_class":output_class}, status=200)
    return JsonResponse({"error": "Invalid request method."}, status=400)

@csrf_exempt
def SegmentUploadedImage(request):
    if request.method == 'POST':
         file = request.FILES['file']
         file_name = default_storage.save(file.name, file)
         segmentImage(os.path.join(settings.MEDIA_ROOT, file_name),file_name)
         return JsonResponse({"message": "Segmented successfully.", "segmented_image": 'segmented_' + file_name}, status=200)
    return JsonResponse({"error": "Invalid request method."}, status=400)
