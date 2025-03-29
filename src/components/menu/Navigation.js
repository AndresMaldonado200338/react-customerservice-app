import { Menubar } from "primereact/menubar";

const Navigation = () => {
    const navList = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.href = '/' }
        },
        {
            label: 'Customer', icon: 'pi pi-fw pi-user', items: [
                {
                    label: 'All Customers', icon: 'pi pi-fw pi-users', command: () => { window.location.href = './allcustomers' }
                },
                {
                    label: 'Save Customer', icon: 'pi pi-fw pi-user-plus', command: () => { window.location = './savecustomer' }
                },
                {
                    label: 'Delete Customer', icon: 'pi pi-fw pi-user-minus', command: () => { window.location = './deletecustomer' }
                },
                {
                    label: 'Get Customer', icon: 'pi pi-fw pi-search', command: () => { window.location = './getcustomer' }
                }
            ]
        },
    ]

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <Menubar model={navList} />
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;