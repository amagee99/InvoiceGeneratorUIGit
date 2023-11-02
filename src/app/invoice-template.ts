export interface InvoiceTemplate {
    id: number
    //references invoice template for the user
    templateName: string
    templatePath: string

//data to cell mapping
    //invoice referencing
    invoiceIdCell: string | null;
    invoiceDateCell: string | null;

    //Header cell Info
    companyNameCell: string | null;
    companyPOBoxCell: string | null;
    companyEmailCell: string | null;
    companyPhoneCell: string | null;

    //Customer cell Info
    customerAddressCell: string | null;
    customerNameCell: string | null;

    //Shippee cell Info
    shipeeAddressCell: string | null;
    shipeeNameCell: string | null;

    //Order cell Info
    pONumCell: string | null;
    shipDateCell: string | null;
    productTypeCell: string | null;

    //Item cell Info
    itemIdCell: string | null;
    itemQuantityCell: string | null;
    itemSizeCell: string | null;
    itemPriceCell: string | null;
    itemPriceTotalCell: string | null;

    //Invoice Total
    invoiceTotalCell: string | null;

    //Tracking cell Info
    trackingNumberCell: string | null;
}
