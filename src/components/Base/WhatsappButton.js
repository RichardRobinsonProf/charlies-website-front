import React from "react";

const WhatsappButton = () => {
  return (
    <a
      className="position-fixed bottom-0 end-0 m-2 m-sm-3"
      href={`https://wa.me/${process.env.REACT_APP_SITE_PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  );
};

export default WhatsappButton;
