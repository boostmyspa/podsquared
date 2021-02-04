"""podecom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.views.generic import TemplateView

from engine.views import *
urlpatterns = [
    path('', HomeView.as_view(), name='home'),

    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),

    path('dashboard/', Dashboard.as_view(), name='dashboard'),

    path('dashboard/design', DesignListView.as_view(), name='design-list'), #List all Designs
    path('dashboard/design/create', TemplateView.as_view(template_name="builder/design.html"), name='design-create'),

    #path('dashboard/design/create'), #List all Designs
    path('dashboard/design/<uuid:id>', TemplateView.as_view(template_name="builder/design.html"), name='design-create'),
    path('dashboard/order', OrderListView.as_view(), name='order-list'), #List All Orders
    path('dashboard/order/<uuid:id>', TemplateView.as_view(template_name="builder/order.html"), name='design-order'),
    path('dashboard/order/payment', TemplateView.as_view(template_name="builder/order-payment.html"), name='order-payment'),
    #path('dashboard/thank-you/<uuid:id>'),
    path('dashboard/billing', AccountBillingView.as_view(), name='billing'),
    path('dashboard/billing/create', AccountBillingCreateView.as_view(), name='billing-create'),  # Credit Card Create
    #path('dashboard/billing/<uuid:id>'), #Credit Card Details
    #path('dashboard/billing/<uuid:id>/delete'), #Credit Card Delete
    #path('dashboard/settings'),
]
