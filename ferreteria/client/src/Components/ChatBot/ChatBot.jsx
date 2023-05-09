import ChatBot from "react-simple-chatbot";

const ChatbotComponent = () => {
  const steps = [
    {
      id: "intro",
      message: "Hola! ¿En qué puedo ayudarte?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        {
          value: "calendar",
          label: "¿Cual es el horario de atencion?",
          trigger: "calendar",
        },
        {
          value: "advice",
          label:
            "¿Dónde me puedo comunicar para tener una asesoría personalizada?",
          trigger: "advice",
        },
        {
          value: "other",
          label: "Otra cosa",
          trigger: "other",
        },
      ],
    },
    {
      id: "calendar",
      message:
        "El PBX +57 601 875 9100 está disponible para atender sus inquietudes de 7 am a 5 pm de lunes a viernes y sábados de 7 am a 12 m.",
      trigger: "end",
    },
    {
      id: "advice",
      message:
        "Usted puede comunicarse con nuestros asesores especializados al PBX  +57 601 875 9100 o  por medio de Whatsapp al 313 455 6542, donde con gusto atenderemos su requerimientos.",
      trigger: "end",
    },
    {
      id: "other",
      message: "Lo siento, no puedo ayudarte con eso.",
      trigger: "options",
    },
    {
      id: "end",
      message: "¿Puedo ayudarte con algo más?",
      trigger: "options",
    },
  ];

  return (
    <ChatBot
      headerTitle="Ferreteria"
      steps={steps}
      botAvatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      userAvatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      floating
      chatbotResetTimeout={300} // 5 minutos
    />
  );
};

export default ChatbotComponent;
