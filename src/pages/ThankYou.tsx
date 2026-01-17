import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center animate-in fade-in duration-500">
      <div className="bg-green-50 p-6 rounded-full mb-6">
        <MessageCircle className="w-16 h-16 text-[#25D366]" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Thanks for Connecting!
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        We've opened WhatsApp in a new tab for you. feel free to start the conversation there!
      </p>
    </div>
  );
};

export default ThankYou;
