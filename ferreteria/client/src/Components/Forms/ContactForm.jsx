import React, { useState } from 'react';
import { MdEmail, MdAccessTime, MdSend } from 'react-icons/md';
import { FaWhatsapp, FaCheckCircle, FaTools, FaBoxOpen, FaWrench, FaCommentDots, FaExclamationCircle, FaStar } from 'react-icons/fa';

const WHATSAPP_NUMBER = '573118426746';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    if (!subject.trim()) {
      setErrorMessage('Por favor ingresa un asunto.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Por favor ingresa un mensaje.');
      return;
    }

    const text = `Hola, soy ${name}.\nAsunto: ${subject}.\n${message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`,
      '_blank'
    );

    setFormData({ name: '', subject: '', message: '' });
    setErrorMessage('');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const services = [
    { icon: <FaTools />, label: 'Consulta de productos' },
    { icon: <FaWrench />, label: 'Solicitud de reparación' },
    { icon: <FaBoxOpen />, label: 'Disponibilidad de stock' },
    { icon: <FaCommentDots />, label: 'Cotizaciones' },
    { icon: <FaExclamationCircle />, label: 'Reportar un problema' },
    { icon: <FaStar />, label: 'Sugerencias y mejoras' },
  ];

  return (
    <div className='min-h-screen py-16 px-4'>
      {/* Header */}
      <div className='text-center mb-12 max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-textLigth dark:text-text mb-4'>Contáctanos</h1>
        <p className='text-secundaryLigth dark:text-secundary text-lg leading-relaxed'>
          ¿Tienes alguna pregunta, sugerencia o necesitas ayuda? Estamos aquí para ayudarte.
          Envíanos un mensaje y te responderemos lo antes posible.
        </p>
      </div>

      {/* Main grid */}
      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>

        {/* Left column */}
        <div className='flex flex-col gap-6'>

          {/* Información de contacto */}
          <div className='bg-cardLigth dark:bg-card rounded-xl p-6 shadow-lg'>
            <h2 className='text-xl font-bold text-textLigth dark:text-text mb-6 flex items-center gap-2'>
              <MdEmail className='text-accentColor' />
              Información de Contacto
            </h2>

            <div className='flex flex-col gap-5'>
              <div className='flex items-start gap-3'>
                <MdEmail className='text-accentColor text-xl mt-0.5 shrink-0' />
                <div>
                  <p className='text-textLigth dark:text-text font-semibold text-sm'>Email</p>
                  <p className='text-secundaryLigth dark:text-secundary text-sm'>contacto@ferreteriasag.cl</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <FaWhatsapp className='text-green-400 text-xl mt-0.5 shrink-0' />
                <div>
                  <p className='text-textLigth dark:text-text font-semibold text-sm'>WhatsApp</p>
                  <p className='text-secundaryLigth dark:text-secundary text-sm mb-2'>+57 311 842 6746</p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors'
                  >
                    <FaWhatsapp />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <MdAccessTime className='text-accentColor text-xl mt-0.5 shrink-0' />
                <div>
                  <p className='text-textLigth dark:text-text font-semibold text-sm'>Horario de Atención</p>
                  <p className='text-secundaryLigth dark:text-secundary text-sm'>Lunes a Viernes</p>
                  <p className='text-secundaryLigth dark:text-secundary text-sm'>9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <FaCheckCircle className='text-accentColor text-xl mt-0.5 shrink-0' />
                <div>
                  <p className='text-textLigth dark:text-text font-semibold text-sm'>Tiempo de Respuesta</p>
                  <p className='text-secundaryLigth dark:text-secundary text-sm'>Respondemos en menos de 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* ¿En qué podemos ayudarte? */}
          <div className='bg-cardLigth dark:bg-card rounded-xl p-6 shadow-lg'>
            <h2 className='text-xl font-bold text-textLigth dark:text-text mb-4'>¿En qué podemos ayudarte?</h2>
            <ul className='flex flex-col gap-3'>
              {services.map(({ icon, label }) => (
                <li key={label} className='flex items-center gap-3 text-textLigth dark:text-text text-sm'>
                  <span className='text-green-400 text-base'>{icon}</span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column – Formulario */}
        <div className='bg-cardLigth dark:bg-card rounded-xl p-6 shadow-lg'>
          <h2 className='text-xl font-bold text-textLigth dark:text-text mb-6 flex items-center gap-2'>
            <MdSend className='text-accentColor' />
            Envíanos un Mensaje
          </h2>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
              <label className='block text-sm font-semibold text-textLigth dark:text-text mb-1'>
                Nombre completo <span className='text-red-400'>*</span>
              </label>
              <input
                type='text'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                placeholder='Tu nombre completo'
                className='w-full bg-blancoAhumado dark:bg-navBar border border-secundaryLigth dark:border-secundary text-textLigth dark:text-text placeholder-secundaryLigth dark:placeholder-secundary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-colors'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-textLigth dark:text-text mb-1'>
                Asunto <span className='text-red-400'>*</span>
              </label>
              <input
                type='text'
                name='subject'
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder='¿De qué se trata tu mensaje?'
                className='w-full bg-blancoAhumado dark:bg-navBar border border-secundaryLigth dark:border-secundary text-textLigth dark:text-text placeholder-secundaryLigth dark:placeholder-secundary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-colors'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-textLigth dark:text-text mb-1'>
                Mensaje <span className='text-red-400'>*</span>
              </label>
              <textarea
                name='message'
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder='Describe tu consulta, problema o sugerencia con el mayor detalle posible...'
                className='w-full bg-blancoAhumado dark:bg-navBar border border-secundaryLigth dark:border-secundary text-textLigth dark:text-text placeholder-secundaryLigth dark:placeholder-secundary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accentColor focus:ring-1 focus:ring-accentColor transition-colors resize-none'
              />
            </div>

            {errorMessage && (
              <div className='flex items-center gap-2 bg-red-900/40 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-sm'>
                <FaExclamationCircle />
                {errorMessage}
              </div>
            )}

            <div className='flex items-center justify-between mt-2'>
              <p className='text-secundaryLigth dark:text-secundary text-xs'>* Campos obligatorios</p>
              <button
                type='submit'
                className='inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-lg transition-colors'
              >
                <MdSend />
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de éxito */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/60 p-4'>
          <div className='bg-card rounded-xl p-8 max-w-sm w-full shadow-2xl text-center'>
            <FaCheckCircle className='text-green-400 text-5xl mx-auto mb-4' />
            <p className='text-xl text-textLigth dark:text-text font-bold mb-2'>¡Mensaje Enviado!</p>
            <p className='text-secundaryLigth dark:text-secundary text-sm mb-6'>
              Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
            </p>
            <button
              className='bg-secundary hover:bg-accentColor text-white font-bold py-2 px-6 rounded-lg transition-colors'
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
