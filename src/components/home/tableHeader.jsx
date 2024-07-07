import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function TableHeader(){
    return(
        <div className='p-4 bg-white flex flex-row gap-5 '>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>
                
            
            <Button 
                icon="pi pi-cloud-upload"
                label="Crear" 
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

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