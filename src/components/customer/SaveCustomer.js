import React, { useState } from 'react';
import { CustomerService } from '../../service/CustomerService';
import { Panel } from 'primereact/panel';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

function SaveCustomer() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        location: ""
    });
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setValues({
            ...values,
            [e.target.name]: value
        });
    }

    const validate = () => {
        let errors = {};
        if (!values.firstName) errors.firstName = "First Name is required";
        if (!values.lastName) errors.lastName = "Last Name is required";
        if (!values.location) errors.location = "Location is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const RegisterCustomer = (e) => {
        e.preventDefault();

        if (!validate()) return;

        console.log(values);
        new CustomerService().saveCustomer(values).then((res) => {
            setMsg("Customer saved successfully!");
            setTimeout(() => navigate('/'), 2000);
        }).catch((err) => {
            setMsg("There was an error saving the customer: ", err);
        });
    }

    return (
        <Panel header="Save customer" className="Panel1" toggleable>
            <form onSubmit={(e) => RegisterCustomer(e)}>
                <label htmlFor='firstName'>First Name</label>
                <input name='firstName' type='text' onChange={(e) => handleChange(e)} value={values.firstName} />
                {errors.firstName && <p className='error'>{errors.firstName}</p>}
                <p></p>
                <label htmlFor='lastName'>Last Name</label>
                <input name='lastName' type='text' onChange={(e) => handleChange(e)} value={values.lastName} />
                {errors.lastName && <p className='error'>{errors.lastName}</p>}
                <p></p>
                <label htmlFor='location'>Location</label>
                <input name='location' type='text' onChange={(e) => handleChange(e)} value={values.location} />
                {errors.location && <p className='error'>{errors.location}</p>}
                <p></p>
                <Button label="Register" type="submit" className="p-button-success" />
            </form>
            {msg && <p className='success'>{msg}</p>}{}
        </Panel>
    );
}

export default SaveCustomer;