import { MessageCircle } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const WhatsAppButton = () => {
  const phoneNumber = "918950353673"; // Without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <button
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Chat on WhatsApp"
    >
      {/* <MessageCircle className="h-6 w-6" fill="currentColor" /> */}
      <SocialIcon
        url="https://whatsapp.com"
        href={whatsappUrl}
        target="_blank"
      />
    </button>
  );
};

export default WhatsAppButton;
