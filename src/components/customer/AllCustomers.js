import React, { Component } from 'react';
import { CustomerService } from '../../service/CustomerService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

export default class AllCustomers extends Component {
    constructor() {
        super();
        this.state = {}
        this.customerService = new CustomerService();
    }

    componentDidMount() {
        this.customerService.getAll().then(data => this.setState({ customers: data }));
    }

    render(){
        return (
            <Panel header="All customers" className='Panel1'>
                <DataTable value={this.state.customers}>
                    <column field="id" header="ID"></column>
                    <Column field="firstName" header="First Name"></Column>
                    <Column field="lastName" header="Last Name"></Column>
                    <Column field="location" header="Location"></Column>
                </DataTable>
            </Panel>
        );
    }
}