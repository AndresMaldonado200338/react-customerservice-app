import React, { useState, useEffect } from 'react';
import { CustomerService } from '../../service/CustomerService';
import { Panel } from 'primereact/panel';

function GetCustomer() {
    const [customers, setCustomers] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        new CustomerService().getAll().then(data => {
            setCustomers(data);
        }).catch(error => {
            setError("There was an error loading the clients");
        });
    }, []);

    const handleSelectChange = (e) => {
        const id = e.target.value;
        setSelectedId(id);

        if (id) {
            new CustomerService().getCustomer(id).then(customer => {
                if (customer) {
                    setCustomer(customer);
                    setError(null);
                } else {
                    setCustomer(null);
                    setError("The customer does not exist.");
                }
            }).catch(() => {
                setError("There was an error when searching for the customer.");
                setCustomer(null);
            });
        } else {
            setCustomer(null);
            setError(null);
        }
    };

    return (
        <Panel header="Search customer" className="Panel1">
            <div>
                <label htmlFor="id">Select customer ID</label>
                <select id="id" value={selectedId} onChange={handleSelectChange}>
                    <option value="">select ID</option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                            {customer.id}
                        </option>
                    ))}
                </select>

                {error && <p className='error'>{error}</p>}

                {customer && (
                    <div>
                        <h3>Customer found:</h3>
                        <p>ID: {customer.id}</p>
                        <p>Full name: {customer.firstName} {customer.lastName}</p>
                        <p>Location: {customer.location}</p>
                    </div>
                )}
            </div>
        </Panel>
    );
}

export default GetCustomer;