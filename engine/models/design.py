from django.db import models
from django.db import models
import os

import os, uuid, json

from collections import OrderedDict

PRINTLOCATION = (
    ('F', 'Front'),
    ('B', 'Back')
)

class Design(models.Model):
    title = models.CharField(max_length=128)
    image = models.ImageField(upload_to='design/finished', blank=True, null=True)
    rotation = models.IntegerField(default=0, blank=True)
    dimension_x = models.IntegerField(blank=True, null=True)
    dimension_y = models.IntegerField(blank=True, null=True)
    pre_made = models.BooleanField(default=False, help_text="Is FM Expressions in Stock?")
    pinned = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    def render_object(self):
        pass

class DesignPrintable(models.Model):
    design = models.ForeignKey('Design', on_delete=models.CASCADE)
    printable = models.ForeignKey('Printable', on_delete=models.CASCADE)
    options = models.ForeignKey('PrintableOption', on_delete=models.SET_NULL, blank=True, null=True)
    location = models.CharField(max_length=1, choices=PRINTLOCATION)
    pos_x = models.IntegerField(default=0)
    pos_y = models.IntegerField(default=0)
    pos_h = models.IntegerField(default=6000)
    pos_w = models.IntegerField(default=6000)

    def __str__(self):
        return "%s: %s" %(self.design.title, self.printable.title)
