import React, { useState } from 'react';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState('cotizacion');
  const [otherSubject, setOtherSubject] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (subject === 'otro' && !otherSubject.length) {
      setErrorMessage('Ingrese un tipo de asunto');
      return;
    }

    if (!email) {
      setErrorMessage('Ingrese un correo electronico');
      return;
    }

    if (email !== confirmEmail) {
      setErrorMessage('Los correos electrónicos no coinciden');
      return;
    }

    // Resto de la lógica para enviar el formulario

    // Limpiar los campos del formulario después del envío exitoso
    setSubject('cotizacion');
    setOtherSubject('');
    setEmail('');
    setConfirmEmail('');
    setMessage('');
    setErrorMessage('');

    // Mostrar el modal de alerta
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded p-6 max-w-sm shadow-md">
            <p className="text-xl font-bold mb-4">¡Enviado exitosamente!</p>
            <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-white-700 text-sm font-bold mb-2">
            Asunto:
          </label>
          <select
            id="subject"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="cotizacion">Cotización</option>
            <option value="otro">Otro</option>
          </select>
          {subject === 'otro' && (
            <input
              type="text"
              className="mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Especifique el asunto"
              value={otherSubject}
              onChange={(e) => setOtherSubject(e.target.value)}
            />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmEmail" className="block text-white-700 text-sm font-bold mb-2">
            Confirmar correo electrónico:
          </label>
          <input
            type="email"
            id="confirmEmail"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirme su correo electrónico"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white-700 text-sm font-bold mb-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="¿Como podemos ayudarte?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
