import { FaWhatsapp } from 'react-icons/fa'; 
import type { CSSProperties } from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "5511994214921"; // Substitua pelo seu número (DDI + DDD + Número)
  const message = "Olá! Gostaria de saber mais sobre seus serviços.";
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

const buttonStyle: CSSProperties = {
  position: 'fixed',
  width: '60px',
  height: '60px',
  bottom: '40px',
  right: '40px',
  backgroundColor: '#25d366',
  color: '#FFF',
  borderRadius: '50px',
  textAlign: 'center',
  fontSize: '30px',
  boxShadow: '2px 2px 3px #999',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none'
};

export default WhatsAppButton;
