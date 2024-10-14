import React, { useState, useEffect } from "react";
import "../../assets/css/footer.css"; // Your footer styles

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.scrollHeight;

      // Show the footer when the user reaches the bottom of the page
      if (scrollPosition >= documentHeight - 100) {
        // Adjust the offset if needed
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? "visible" : ""}`}>
      <p>
        Copyright ©2024 All rights reserved | Made with <span>❤️</span> by Ayush
        Chauhan
      </p>
    </footer>
  );
};

export default Footer;
