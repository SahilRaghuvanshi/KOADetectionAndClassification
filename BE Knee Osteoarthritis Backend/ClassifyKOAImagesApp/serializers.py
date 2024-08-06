from rest_framework import serializers
from ClassifyKOAImagesApp.models import KneePatients

class KneePatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = KneePatients
        fields = ('PatientId', 'PatientName', 'Age', 'Gender', 'XRayImageFileName', 'SegmentedImageFileName', 'PreviousInjuries', 'Genetics', 'Height', 'Weight','OutputClass')
