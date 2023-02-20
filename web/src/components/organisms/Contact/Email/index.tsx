import React, { useState } from "react";
import SendEmail from "../../../molecules/Contact/SendEmail";
import EmailField from "../../../molecules/Contact/EmailField";

import { EmailContainer, EmailFieldsContainer } from "./styles";

const Email: React.FC = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <EmailContainer>
      <EmailFieldsContainer>
        <EmailField
          icon="person"
          fieldType="text"
          value={name}
          setValue={setName}
          autoCapitalize="words"
          placeholder="Name"
        />
        <EmailField
          icon="mail"
          fieldType="email"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
        <EmailField
          icon="description"
          inputType="textarea"
          fieldType="text"
          value={content}
          setValue={setContent}
          placeholder="Tell me your fantastic idea!"
        />
      </EmailFieldsContainer>
      <SendEmail />
    </EmailContainer>
  );
};

export default Email;
