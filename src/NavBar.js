
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './NavBar.css'
import Logo from './İmages/preview_image20200912-17072-1rkpzoy.png';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Woman',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'Clothes',
                },
                {
                    label: 'Shoes',
                },
                {
                    label: 'Bags',
                }
            ]
        },
        {
            label: 'Man',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Clothes',
                    template: itemRenderer
                },
                {
                    label: 'Shoes',
                    template: itemRenderer
                },
                {
                    label: 'Wallets',
                    template: itemRenderer
                },
            ]
        },
        {
            label: 'Kid',
            icon: 'pi pi-user',
            template: itemRenderer,
            items: [
                {
                    label:'Clothes'
                },
                {
                    label:'Shoes',
                },
            ]
        }
    ];

    const start = <img alt="logo" src={Logo} height="150" width='175' className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search for a product or brand" type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    return (
        <div className="card">
            <div className="flex justify-center">
                <Menubar start={start} end={end} />
            </div>
            <div className="second-menubar">
                <Menubar className='second-menubar-content' model={items} />
            </div>
        </div>
    )
}





        