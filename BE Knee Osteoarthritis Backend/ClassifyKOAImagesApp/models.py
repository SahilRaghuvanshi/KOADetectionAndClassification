from django.db import models

class KneePatients(models.Model):
    PatientId = models.AutoField(primary_key=True)
    PatientName = models.CharField(max_length=500,blank=True, null=True)
    Age = models.IntegerField(blank=True, null=True)
    Gender = models.CharField(max_length=500,blank=True, null=True)
    XRayImageFileName = models.CharField(max_length=500,blank=True, null=True)
    SegmentedImageFileName = models.CharField(max_length=500,blank=True, null=True)
    PreviousInjuries = models.BooleanField(default=False,blank=True, null=True) 
    Genetics = models.BooleanField(default=False,blank=True, null=True)  
    Height = models.FloatField(blank=True, null=True) 
    Weight = models.FloatField(blank=True, null=True) 
    OutputClass = models.CharField(max_length=500, blank=True, null=True) 