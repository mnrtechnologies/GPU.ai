import React from "react";
import Footer from "../../components/common/Footer";
import ContactUs from "../../components/Contact/ContactUs";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const Contact = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <ContactUs />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default Contact;
