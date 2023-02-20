import React, { useEffect, useState } from "react";
import Email from "../../components/organisms/Contact/Email";
import SectionPresentation from "../../components/organisms/Global/SectionOverview";

import { ContactContainer } from "./styles";

import EmailIcon from "../../assets/icons/sections/Email.png";
import { AlignmentOptions } from "../../components/molecules/Global/SectionPresentationContent/types";

const Contact: React.FC = (): JSX.Element => {
  const [sectionPresentationAligment, setSectionPresentationAligment] =
    useState<AlignmentOptions>("left");

  const getSectionPresentationAligment = (): AlignmentOptions => {
    if (window.innerWidth <= 1000) {
      return "center";
    } else {
      return "left";
    }
  };

  useEffect(() => {
    setSectionPresentationAligment(getSectionPresentationAligment());

    window.addEventListener("resize", () => {
      setSectionPresentationAligment(getSectionPresentationAligment());
    });
  }, []);

  return (
    <ContactContainer>
      <SectionPresentation
        icon={EmailIcon}
        name="Get in touch"
        description="Contact me and let's tell about your expectations"
        alignment={sectionPresentationAligment}
      />
      <Email />
    </ContactContainer>
  );
};

export default Contact;
