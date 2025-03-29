import React, { useState, useEffect } from 'react';
import { CustomerService } from '../../service/CustomerService';
import { useNavigate } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

function DeleteCustomer() {
    const [customers, setCustomers] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [customer, setCustomer] = useState(null);
    const [msg, setMsg] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        new CustomerService().getAll().then(data => {
            setCustomers(data);
        }).catch(error => {
            setError("Hubo un error al cargar los clientes.", error);
        });
    }, []);

    const handleSelectChange = (e) => {
        const id = e.target.value;
        setSelectedId(id);

        if (id) {
            const foundCustomer = customers.find(customer => customer.id === parseInt(id));
            if (foundCustomer) {
                setCustomer(foundCustomer);
                setError(null);
            } else {
                setCustomer(null);
                setError("The customer does not exist");
            }
        } else {
            setCustomer(null);
            setError(null);
        }
    };

    const handleDelete = () => {
        new CustomerService().deleteCustomer(customer.id).then(() => {
            setMsg("Customer successfully deleted");
            setTimeout(() => navigate('/'), 2000);
        }).catch((err) => {
            setMsg("Error deleting customer: ", err);
        });
    };

    return (
        <Panel header="Delete customer" className="Panel1">
            <div>
                <label htmlFor="id">Select customer ID </label>
                <select id="id" value={selectedId} onChange={handleSelectChange}>
                    <option value="">Select ID</option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                            {customer.id}
                        </option>
                    ))}
                </select>

                {error && <p className='error'>{error}</p>}

                {customer && !showConfirm && (
                    <div>
                        <h3>Customer found:</h3>
                        <p>ID: {customer.id}</p>
                        <p>Full name: {customer.firstName} {customer.lastName}</p>
                        <p>Location: {customer.location}</p>
                        <Button className='p-button-danger' label="Delete" onClick={() => setShowConfirm(true)} />
                    </div>
                )}

                {showConfirm && (
                    <div>
                        <p>Are you sure you want to remove this customer?</p>
                        <Button className='p-button-danger' label="Yes" onClick={handleDelete} />
                        <Button className='p-button-secondary' label="No" onClick={() => setShowConfirm(false)}/>
                    </div>
                )}

                {msg && <p className='success'>{msg}</p>}
            </div>
        </Panel>
    );
}

export default DeleteCustomer;