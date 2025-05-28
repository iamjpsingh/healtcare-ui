// WhatsAppChatBubble.tsx
"use client";

import React from "react";

const WhatsAppChatBubble = () => {
  const phoneNumber = "1234567890"; // Replace with your number
  const message = "Hi! I'm interested in your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0a11.94 11.94 0 0 0-8.52 3.48A11.94 11.94 0 0 0 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.13-1.6A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-3.48A11.94 11.94 0 0 0 24 12a11.94 11.94 0 0 0-3.48-8.52zM12 22c-1.94 0-3.83-.5-5.5-1.44l-.4-.23-3.63.95.97-3.55-.26-.41A10.05 10.05 0 0 1 2 12C2 6.49 6.49 2 12 2c2.68 0 5.19 1.05 7.07 2.93A9.97 9.97 0 0 1 22 12c0 5.51-4.49 10-10 10zm5.28-7.72c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13s-.69.84-.85 1.01c-.16.17-.31.19-.57.06-.26-.13-1.11-.41-2.1-1.3-.78-.7-1.3-1.57-1.45-1.83-.15-.26-.02-.4.11-.53.11-.11.26-.28.39-.42.13-.14.17-.24.26-.4.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.98-.22-.54-.44-.46-.6-.47h-.51c-.17 0-.44.06-.67.32s-.88.86-.88 2.1c0 1.23.9 2.42 1.03 2.58.13.17 1.76 2.69 4.27 3.77.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.54-.63 1.76-1.25.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" />
      </svg>
    </button>
  );
};

export default WhatsAppChatBubble;
