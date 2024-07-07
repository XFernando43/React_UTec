import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';
export default function TableHeader(){
    const [visible, setVisible] = React.useState(false);
    return(
        <div className='p-4 bg-white flex flex-row gap-5 '>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>
                
            
            <Button 
                icon="pi pi-cloud-upload"
                label="Crear" 
                onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>

            <Button 
                icon="pi pi-sync"
                label="Recargar" 
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />
            
            <Button 
                icon="pi pi-download"
                label="Descargar" 
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

            <Button 
                icon="pi pi-trash"
                label="Eliminar" 
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

        </div>
    );
}