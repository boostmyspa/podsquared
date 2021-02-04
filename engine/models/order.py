from django.db import models
import uuid

class Cart(models.Model):
    store = models.ForeignKey('Store', on_delete=models.CASCADE)
    test = models.BooleanField(default=False)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    current_status = models.ForeignKey('CartStatus', blank=True, null=True, on_delete=models.SET_NULL,related_name='current_status')
    friendly_id = models.IntegerField(blank=True, null=True)

    to_customer = models.BooleanField(default=False)

    first_name = models.CharField(max_length=128, blank=True, null=True)
    last_name = models.CharField(max_length=128, blank=True, null=True)
    name = models.CharField(max_length=128, blank=True, null=True)
    phone = models.CharField(max_length=128, blank=True, null=True)
    email = models.EmailField(max_length=128, blank=True, null=True)
    address = models.CharField(max_length=128, blank=True, null=True)
    address_2 = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    state = models.CharField(max_length=128, blank=True, null=True)
    zip = models.CharField(max_length=128, blank=True, null=True)
    country = models.CharField(max_length=128, blank=True, null=True)

    subtotal_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    total_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    shipping_price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)

    stripe_token = models.CharField(max_length=128, blank=True, null=True)
    paypal_trans = models.CharField(max_length=128, blank=True, null=True)
    patch_path = models.CharField(max_length=128, blank=True, null=True)

    has_payment_error = models.BooleanField(default=False)

    easyship_address_id = models.CharField(blank=True, null=True, max_length=256)
    easyship_address_verified = models.BooleanField(default=False)


class CartItem(models.Model):
    pass

class CartStatus(models.Model):
    status = models.ForeignKey('Status', on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    date_started = models.DateTimeField(auto_now_add=True)
    date_completed = models.DateTimeField(blank=True, null=True)


class Status(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        pass
