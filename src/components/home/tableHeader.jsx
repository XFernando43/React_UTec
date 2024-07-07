import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

export default function TableHeader(){
    return(
        <div className='flex flex-row gap-5 items-center justify-center'>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>
                
            <Button className='flex gap-4'>
                <i className='pi pi-cloud-upload'></i>
                <span>Crear</span>
            </Button>

            <Button severity='warning' className='flex gap-4'>
                <i className='pi pi-sync'></i>
                <span>Recargar</span>
            </Button>

            <Button severity='help' className='flex gap-4'>
                <i className='pi pi-download'></i>
                <span>Descargar</span>
            </Button>

            <Button severity='danger' className='flex gap-4'>
                <i className='pi pi-trash'></i>
                <span>Eliminar</span>
            </Button>
        </div>
    );
}