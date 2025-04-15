import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <div className="footer-map">
      {/* try */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.3605396089606!2d85.8856142759075!3d20.450379807391183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190db9d833ffe5%3A0xb8f3dba8fa084b07!2sMAA%20TARINI%20ELECTRICAL!5e0!3m2!1sen!2sin!4v1711180629693!5m2!1sen!2sin"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
