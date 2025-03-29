import axios from 'axios';

export class CustomerService {
    baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:9092';

    getAll() {
        return axios.get(`${this.baseUrl}/allcustomers`).then(res => res.data)
    }

    saveCustomer(values) {
        return axios.post(`${this.baseUrl}/addcustomer`, values);
    }

    deleteCustomer(id) {
        return axios.get(`${this.baseUrl}/deletecustomer/${id}`).then(res => res.data)
    }

    getCustomer(id) {
        return axios.get(`${this.baseUrl}/findcustomer/${id}`).then(res => res.data)
    }
}