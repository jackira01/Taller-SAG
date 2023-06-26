import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';

const ChatbotComponent = () => {
  const location = useLocation();
  const steps = [
    {
      id: 'intro',
      message: 'Hola! ¿En qué puedo ayudarte?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        {
          value: 'calendar',
          label: '¿Cual es el horario de atencion?',
          trigger: 'calendar',
        },
        {
          value: 'advice',
          label:
            '¿Dónde me puedo comunicar para tener una asesoría personalizada?',
          trigger: 'advice',
        },
      ],
    },
    {
      id: 'calendar',
      message:
        'estamos disponibles para atender sus inquietudes de 7 Am a 6 Pm de lunes a viernes y sábados de 7 Am a 12 Pm.',
      trigger: 'end',
    },
    {
      id: 'advice',
      message:
        'Usted puede comunicarse con nosotros por medio de Whatsapp al +57 311 8426746, donde con gusto atenderemos sus requerimientos.',
      trigger: 'end',
    },
    {
      id: 'end',
      message: '¿Puedo ayudarte con algo más?',
      trigger: 'options',
    },
  ];

  return (
    <>
      {location.pathname != '/login' && (
        <ChatBot
          headerTitle='Preguntas Frecuentes'
          steps={steps}
          botAvatar='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
          userAvatar='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
          floating
          chatbotResetTimeout={300} // 5 minutos
        />
      )}
    </>
  );
};

export default ChatbotComponent;
