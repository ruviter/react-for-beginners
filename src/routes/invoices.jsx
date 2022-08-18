import { getInvoices } from "../data";
import { Link, Outlet } from 'react-router-dom'

export default function Invoices() {
    let invoices = getInvoices()
    return (
        <div>
            {
                invoices.map((invoice) =>
                    <Link
                        to= {`${invoice.number}`}
                        key={invoice.number}
                    >
                        <p>
                            {invoice.name}
                        </p>
                    </Link>
                )
            }
            <Outlet />
        </div>
    );
};