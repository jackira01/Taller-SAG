import React from 'react';

const ContactSidebar = () => {
    return (
        <div className="text-white md:fixed md:left-0">
            <div className="p-2">
                <h2 className=" text-xl font-bold mb-1 text-black dark:text-white">Información</h2>
                <div className="border-b border-gray-700 dark:border-gray-600 mb-2"></div>
                <div className="mb-1">
                    <h3 className="text-base font-semibold text-black dark:text-white">Ubicación</h3>
                    <p className='text-black dark:text-white'>Ibagué, Tolima</p>
                </div>
                <div className="border-b border-gray-700 dark:border-gray-600 mb-2"></div>
                <div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Contacto</h3>
                    <p className="mb-1 text-black dark:text-white">Teléfono: 1232112312</p>
                    <p className="mb-1 text-black dark:text-white">Correo: correo@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactSidebar;