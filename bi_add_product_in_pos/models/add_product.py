# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _


class AddProductInPOS(models.Model):
    _inherit='product.template'


    def add_products_in_pos(self):
        self.write({'available_in_pos': True})


class AddProductVariantInPOS(models.Model):
    _inherit='product.product'


    def add_products_variant_in_pos(self):
        self.write({'available_in_pos': True})