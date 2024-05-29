from odoo import api, fields, models, _
class CrmTeam(models.Model):
    _inherit = 'crm.team'
    logo_sale_recipt = fields.Image()
