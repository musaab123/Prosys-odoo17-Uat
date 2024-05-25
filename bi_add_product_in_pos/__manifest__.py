# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Set Mass Product Available in POS',
    'version': '17.0.0.0',
    'category': 'Point of Sale',
    'summary': 'Add Multiple Product in POS at once allow mass product in pos set mass product available in pos available products mass allow multiple products in pos set Multiple Product in POS quick allow mass products in pos quick set mass product in point of sales',
    'description' :"""
        This odoo app helps users to add multiple selected products in the point of sale with a single click. Users do not need to enable the "Available in POS" option manually for each product, user can select multiple products from the tree view and make them available at the point of sale with a single click. 
    """,
    'author': 'BrowseInfo',
    'website': 'https://www.browseinfo.com',
    "price": 15,
    "currency": 'EUR',
    'depends': ['base','point_of_sale'],
    'data': [
        'views/models_view.xml',
    ],
    'license':'OPL-1',
    'demo': [],
    'test': [],
    'installable': True,
    'auto_install': False,
    'live_test_url':'https://youtu.be/R-iEBH78umY',
    "images":['static/description/Banner.gif'],
}
