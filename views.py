from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'space_battles/index.html'
