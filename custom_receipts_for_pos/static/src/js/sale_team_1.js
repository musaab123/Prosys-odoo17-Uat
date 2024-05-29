/** @odoo-module */

import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import { usePos } from "@point_of_sale/app/store/pos_hook";

patch(PaymentScreen.prototype, {
      setup() {
        super.setup();
        this.orm = useService("orm");
        this.pos = usePos();
      },
    async validateOrder(isForceValidate) {
        let receipt_order = await super.validateOrder(arguments);
        const data = this.env.services.pos.session_orders;
        // var order = data[length];
        var order = data[data.length - 1];
        var sale_team_name =  order.pos_crm_team_id.name ;
        this.pos.sale_team_name = order.pos_crm_team_id;
        this.pos.sale_team_id = order.pos_crm_team_id[0];
        console.log(order.pos_crm_team_id);


        
 
        return receipt_order;
    },
});

