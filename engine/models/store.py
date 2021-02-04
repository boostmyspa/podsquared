from django.db import models
from django.contrib.auth.models import User

class Store(models.Model):
    name = models.CharField(max_length=128)
    activated_on = models.DateTimeField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    #Default Address for Merchant
    address = models.CharField(max_length=128, blank=True, null=True)
    address_2 = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    state = models.CharField(max_length=128, blank=True, null=True)
    zip = models.CharField(max_length=128, blank=True, null=True)
    country = models.CharField(max_length=128, blank=True, null=True)

    def __str__(self):
        return self.name


class StorePayment(models.Model):
    store = models.ForeignKey('Store', on_delete=models.CASCADE)
    billing_zip = models.CharField(max_length=128, blank=True, null=True)
    default = models.BooleanField(default=True)
    stripe_token = models.CharField(max_length=128)
    last_4 = models.CharField(max_length=4)

    def __str__(self):
        return "* * * * %s" %(self.last_4)

    def save(self, *args, **kwargs):
        if self.default:
            try:
                temp = StorePayment.objects.get(default=True,store=self.store)
                if self != temp:
                    temp.default = False
                    temp.save()
            except StorePayment.DoesNotExist:
                pass
        super().save(*args, **kwargs)

    def print(self, *args, **kwargs):
        pass
