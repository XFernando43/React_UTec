
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import React from 'react';

export default function LoginForm(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const header = (
        // <img alt="user header" src="../../assets/329182497_580658887303089_6817430973110470755_n.jpg" className="pointer-events-none" />
        <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b661c2ac-7563-4815-8762-0f0a8686c87e-profile_image-300x300.png" alt="Image" width="250" className='pointer-events-none'/>
        // <Image src="../../assets/react.svg" alt="Image" width="250" className='pointer-events-none' />

        // <h1>PIPIPI</h1>
    );

    const footer = (
        <div className="flex gap-3 mt-1">
            <Button label="Register" severity="warning"  outlined className="w-full hover:bg-red-600 hover:text-white" onClick={() => redirectToRoute()} />
            <Button label="Login" className="w-full" />
        </div>
    );

    const redirectToRoute = () => {
        // Add your routing logic here
    };


    return(
        // <div className="card flex justify-content-center">
            <Card title="IDBI Login" subTitle="Ingrese su usuario" footer={footer} header={header} className="max-w-lg select-none rounded-xl">
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
        // </div>
    )
  }