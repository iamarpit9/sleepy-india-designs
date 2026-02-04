
import { SocialIcon } from "react-social-icons";

// Declare global gtag_report_conversion function
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const WhatsAppButton = () => {
  const phoneNumber = "918950353673"; // Without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 1. Open WhatsApp immediately (to avoid popup blockers)
    window.open(whatsappUrl, '_blank');

    // 2. Trigger Google Ads conversion tracking & Redirect to Thank You Page
    try {
      if (typeof window.gtag_report_conversion === 'function') {
        const trackingResult = window.gtag_report_conversion('/thank-you');
        // If trackingResult is NOT false, it means the function didn't execute as expected (or local override didn't return false)
        // In that case, we manually redirect.
        if (trackingResult !== false) {
             window.location.href = '/thank-you';
        }
      } else {
        // Fallback if GTM script didn't load
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error("Tracking error:", error);
      // Fallback on error
      window.location.href = '/thank-you';
    }
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
