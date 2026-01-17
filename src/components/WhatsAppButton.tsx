import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const WhatsAppButton = () => {
  const navigate = useNavigate();
  const phoneNumber = "918950353673"; // Without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
    navigate('/thank-you');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Chat on WhatsApp"
    >
      <SocialIcon
        network="whatsapp"
        bgColor="transparent"
        fgColor="white"
        style={{ height: 50, width: 50 }}
        as="div"
      />
    </button>
  );
};

export default WhatsAppButton;
