/** @odoo-module */
import { OrderReceipt } from "@point_of_sale/app/screens/receipt_screen/receipt/order_receipt";
import { patch } from "@web/core/utils/patch";
import { useState, Component, xml } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

patch(OrderReceipt.prototype, {
    setup() {
        super.setup();
        this.state = useState({
            template: true,
        });
        this.pos = useState(useService("pos"));
    },
    get templateProps() {
        console.log('Barcode data:', this.props.data.barcode); // Log barcode data
        return {
            data: this.props.data,
            order: this.pos.orders,
            receipt: this.pos.orders[0].export_for_printing(),
            orderlines: this.pos.orders[0].get_orderlines(),
            paymentlines: this.pos.orders[0].get_paymentlines(),
            barcode: this.props.data.barcode,
        };
    },
    get templateComponent() {
        var mainRef = this;
        return class extends Component {
            mounted() {
                super.mounted();
                this.renderBarcode();
            }

            renderBarcode() {
                const barcodeElement = this.el.querySelector("#barcode");
                console.log('Barcode data:', barcodeElement); // Log barcode data

                if (barcodeElement && mainRef.props.data.barcode) {
                    JsBarcode(barcodeElement, mainRef.props.data.barcode, {
                        format: "CODE128",
                        displayValue: true,
                    });
                }
            }

            static template = xml`${mainRef.pos.config.design_receipt}`;
        };
    },
    get isTrue() {
        return !this.env.services.pos.config.is_custom_receipt;
    }
});
