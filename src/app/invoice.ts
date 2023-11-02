export interface Invoice {
    id: number;


    //Header Info
    companyName: string | null;
    companyPOBox: string | null;
    companyEmail: string | null;
    companyPhone: string | null;

    //Customer Info
    customerAddress: string | null;
    customerName: string | null;

    //Shippee Info
    shipeeAddress: string | null;
    shipeeName: string | null;

    //Order Info
    pONum: number | null;
    shipDate: number | null;
    productType: string | null;

    //Item Info
    itemId: number | null;
    itemQuantity: number | null;
    itemSize: number | null;
    itemPrice: number | null;

    //Tracking Info
    trackingNumber: number | null;

}
