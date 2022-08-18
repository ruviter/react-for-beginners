import { useParams } from "react-router-dom"
import { getInvoice } from "../data";
export default function Invoice () {
    let param = useParams();
    let invoice = getInvoice(parseInt(param.invoiceId,10));
    return (
        <div>
            <p>name : {invoice.name}</p>
            <p>number : {invoice.number} </p>
            <p>amount : {invoice.amount} </p>
        </div>
    )
}