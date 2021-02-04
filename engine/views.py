from django.shortcuts import render

from django.views.generic import TemplateView, ListView, DetailView, UpdateView, CreateView, View
from engine.models import *

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth.mixins import PermissionRequiredMixin, LoginRequiredMixin
from django.contrib.auth.views import redirect_to_login
from django.core.exceptions import PermissionDenied
from django.contrib.auth import logout

from django.http import HttpResponseRedirect

class CurrentStore(LoginRequiredMixin, View):
    store = None

    def dispatch(self, request, *args, **kwargs):
        if not self.has_store():
            return self.handle_no_permission()
        return super().dispatch(request, *args, **kwargs)

    def handle_no_store(self):
        if self.raise_exception or self.request.user.is_authenticated:
            raise PermissionDenied(self.get_permission_denied_message())
        return redirect_to_login(self.request.get_full_path(), self.get_login_url(), self.get_redirect_field_name())

    def has_store(self):
        return self.store

    def setup(self, *args, **kwargs):
        super().setup(*args, **kwargs)
        user = self.request.user
        if user.is_authenticated:
            try:
                self.store = Store.objects.get(user=user)
            except Store.DoesNotExist:
                self.store = None


class HomeView(TemplateView):
    template_name = "front/landing-classic-advertisement.html"

class Dashboard(CurrentStore, TemplateView):
    template_name = "builder/dashboard.html"


class DesignListView(CurrentStore, ListView):
    model = Design
    template_name = "builder/design-list.html"

class DesignDetailView(CurrentStore, DetailView):
    pass


class DesignCreateView(CurrentStore, TemplateView):
    pass

class OrderListView(CurrentStore, ListView):
    model = Cart
    template_name = "builder/order-list.html"

class OrderDetailView(CurrentStore, DetailView):
    pass

class OrderPayment(CurrentStore, TemplateView):
    pass

class ThankYouView(CurrentStore, TemplateView):
    pass

class AccountBillingView(CurrentStore, TemplateView):
    template_name = "builder/account-billing.html"

class AccountBillingCreateView(CurrentStore, CreateView):
    template_name = "builder/account-billing.html"
    model = StorePayment
    fields = ['stripe_token', 'billing_zip']
    success_url = "/dashboard/billing"

    def form_valid(self, form):
        form.instance.store = self.store
        if self.request.POST.get('primary') == 'on':
            form.instance.default = True

        return super().form_valid(form)

class AccountSettingsView(CurrentStore, TemplateView):
    template_name = "builder/account-settings.html"

