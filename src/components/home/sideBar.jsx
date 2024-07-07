import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
// import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function SideBarHomePage() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            {/* <Button label='PIPI' icon="pi pi-arrow-right" onClick={() => setVisible(true)} /> */}

            <div className="bg-blue-500 max-w-sm flex flex-col gap-4 ">
                <header className="flex items-center">
                    <i className="pi pi-user text-5xl"></i>
                    <div className="flex flex-col ">
                        <span>Nombre Admin</span>
                        <p>admin@gmail.com</p>
                    </div>
                </header>
                <main className="flex flex-col gap-5">
                    <button>
                        <i className="pi pi-home"></i>
                        <span>Home</span>
                    </button>

                    <Accordion activeIndex={1}>
                        <AccordionTab header="Administrador">
                            <div className="flex flex-col gap-5">
                                <button>Foros</button>
                                <button>Profesores</button>
                                <button>Cursos</button>
                                <button>Carreras</button>
                                <button>Universidades</button>
                            </div>
                        </AccordionTab>
                    </Accordion>

                    <Accordion activeIndex={1}>
                        <AccordionTab header="no sepo">
                            <div className="flex flex-col gap-5">
                                <button>Foros</button>
                                <button>Profesores</button>
                                <button>Cursos</button>
                                <button>Carreras</button>
                                <button>Universidades</button>
                            </div>
                        </AccordionTab>
                    </Accordion>

                    <button className="flex gap-2">
                        <i className="pi pi-cog"></i>
                        Configuracion

                    </button>

                </main>
            </div>

        </div>
    );
}
