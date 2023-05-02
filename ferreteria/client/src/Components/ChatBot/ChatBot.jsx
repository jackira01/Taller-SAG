import React, { useState } from "react";
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
          value: "about",
          label: "Acerca de",
          trigger: "about",
        },
        {
          value: "contact",
          label: "Contacto",
          trigger: "contact",
        },
        {
          value: "other",
          label: "Otra cosa",
          trigger: "other",
        },
      ],
    },
    {
      id: "about",
      message:
        "Somos una empresa que se dedica a la venta de productos de belleza.",
      trigger: "end",
    },
    {
      id: "contact",
      message:
        "Puedes encontrarnos en nuestra página web o en nuestras redes sociales.",
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
      headerTitle="ChatBot de ejemplo"
      steps={steps}
      botAvatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      userAvatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
      floating
    />
  );
};

export default ChatbotComponent;
