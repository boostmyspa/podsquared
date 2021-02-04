from django.db import models
from markdownx.models import MarkdownxField
from markdownx.utils import markdownify


class PrintableMockup(models.Model):
    image = models.ImageField(upload_to='printable/mockup')
    name = models.CharField(max_length=128)

    design_x0 = models.IntegerField(blank=True, null=True, default=0)
    design_y0 = models.IntegerField(blank=True, null=True, default=0)
    design_x1 = models.IntegerField(blank=True, null=True, default=0)
    design_y1 = models.IntegerField(blank=True, null=True, default=0)

    rotate = models.IntegerField(blank=True, null=True, default=0)

    def __str__(self):
        return self.name

    def get_image(self):
        return self.image.url if self.image else ''


class Printable(models.Model):
    short_title = models.CharField(default="Shirt", max_length=128)
    title = models.CharField(help_text="What does the customer see?", max_length=128)
    print_label_name = models.CharField(help_text="e.x. Bella Canvas 3001", max_length=128, blank=True, null=True)

    default_image = models.ForeignKey('PrintableMockup', blank=True, null=True, on_delete=models.SET_NULL)

    icon = models.ImageField(blank=True, null=True, upload_to='printable/icon')

    base_cost = models.DecimalField(decimal_places=2, max_digits=8, blank=True, null=True)

    details = MarkdownxField(blank=True, null=True)
    sizing = MarkdownxField(blank=True, null=True)

    def __str__(self):
        return self.title

    def get_colors(self):
        return self.printableoption_set.values_list('color', flat=True)

    def get_sizes(self):
        return self.printableoption_set.values_list('size', flat=True)


class PrintableOption(models.Model):
    parent = models.ForeignKey(Printable, blank=True, null=True, on_delete=models.CASCADE)
    mockup = models.ForeignKey(PrintableMockup, blank=True, null=True, on_delete=models.SET_NULL)

    size = models.CharField(max_length=128, blank=True, null=True)
    size_display = models.CharField(max_length=128, blank=True, null=True)

    color = models.CharField(max_length=128, blank=True, null=True)
    color_css = models.CharField(max_length=128, blank=True, null=True)
    stock = models.IntegerField(default=1000)

    extra_cost = models.DecimalField(decimal_places=2, max_digits=8, blank=True, null=True)
    additional_charge = models.DecimalField(decimal_places=2, max_digits=8, blank=True, null=True)

    weight = models.FloatField(blank=True, null=True)



