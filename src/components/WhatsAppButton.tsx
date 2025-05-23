import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const defaultMessage = "¡Hola! Vi tu perfil y estoy interesado en conocer más sobre tus servicios 🙌";
  const phoneNumber = "543834997640";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba57] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppButton;