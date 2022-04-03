import React, { useState } from 'react';
import api from '../../../services/api';
import {
  SendEmailBox,
  SendEmailLabel,
  SendEmailForm,
  SenderName,
  SenderEmail,
  Message,
  SendEmailButton,
  SendEmailButtonLabel,
  SendEmailButtonIcon,
  SendEmailFormField,
  SendEmailFormFieldIcon,
  SendingMessageAnimation,
} from './styles';

function SendEmail(): JSX.Element {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const sendMail = async (): Promise<void> => {
    if (!email.trim() || !name.trim() || !message.trim()) {
      return;
    }

    setSendingMessage(true);

    await api
      .post('/mails', {
        email,
        name,
        message,
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSendingMessage(false);
        },
        () => {
          setSendingMessage(false);
        },
      );
  };

  return (
    <SendEmailBox>
      <SendEmailLabel>Send e-mail</SendEmailLabel>
      <SendEmailForm>
        <SendEmailFormField>
          <SendEmailFormFieldIcon className="material-icons">
            perm_identity
          </SendEmailFormFieldIcon>
          <SenderName
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </SendEmailFormField>
        <SendEmailFormField>
          <SendEmailFormFieldIcon className="material-icons-outlined">
            mail
          </SendEmailFormFieldIcon>
          <SenderEmail
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </SendEmailFormField>
        <SendEmailFormField>
          <SendEmailFormFieldIcon className="material-icons-outlined">
            message
          </SendEmailFormFieldIcon>
          <Message
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </SendEmailFormField>
        <SendEmailButton onClick={() => sendMail()}>
          {sendingMessage ? (
            <SendingMessageAnimation />
          ) : (
            <>
              <SendEmailButtonLabel>Send message</SendEmailButtonLabel>
              <SendEmailButtonIcon className="material-icons-outlined">
                send
              </SendEmailButtonIcon>
            </>
          )}
        </SendEmailButton>
      </SendEmailForm>
    </SendEmailBox>
  );
}

export default SendEmail;
