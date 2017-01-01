from staticjinja import make_site


if __name__ == '__main__':
    context_for_requests = {'comments': 10,
               'sections': 6}
    context_for_catalog = {'suppliers': 10,
                           'sections': 6}

    context_for_section = {'suppliers': 10}

    site = make_site(outpath='./pages',contexts=[('requests.html', context_for_requests),
                                                 ('catalog.html', context_for_catalog),
                                                 ('section.html', context_for_section)])
    site.render()