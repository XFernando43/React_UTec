import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import React from 'react';

const header = (
    <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b661c2ac-7563-4815-8762-0f0a8686c87e-profile_image-300x300.png" alt="Image" width="250" className='pointer-events-none'/>
);

const footer = (
    <div className="flex gap-3 mt-1">
        <Button label="Register" severity="warning"  outlined className="w-full hover:bg-red-600 hover:text-white" />
        <Button label="Login" className="w-full" />
    </div>
);



export default function TableHeader() {
    const [visible, setVisible] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
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

            <Dialog header="Registrar" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <Card ntitle="IDBI Login" subTitle="Ingrese su usuario" footer={footer} header={header} className="max-w-lg select-none rounded-xl">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <InputText value={email} onChange={(e) => setEmail(e.target.value)} type="mail" id="email" aria-describedby="Email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <InputText value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" aria-describedby="password" />
                        </div>
                    </div>
                </Card>
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