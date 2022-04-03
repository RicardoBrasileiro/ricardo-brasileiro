import styled from 'styled-components';

export const SendEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SendEmailLabel = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const SendEmailForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SendEmailFormField = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: inset -5px -5px 20px ${({ theme }) => theme.colors.boxShadow1},
    inset 5px 5px 20px ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  padding: 0 10px;

  & > input,
  & > textarea {
    border: none;
    font-size: 15px;
    padding: 10px;
    background: none;
    height: 50px;
    width: 100%;
  }

  & > textarea {
    min-width: calc(100% - 20px);
    max-width: calc(100% - 20px);
    height: 40px;
    margin: 5px 0;
    min-height: 40px;
    max-height: 150px;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 40px);
  }
`;
export const SendEmailFormFieldIcon = styled.span`
  font-size: 25px;
`;
export const SenderName = styled.input``;
export const SenderEmail = styled.input``;
export const Message = styled.textarea`
  text-align: justify;
  transition: all 0.2s linear;

  &:focus {
    min-height: 100px;
  }
`;
export const SendEmailButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 50px;
  }
`;
export const SendEmailButtonLabel = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin-right: 15px;
  color: #e5e5e5;
`;
export const SendEmailButtonIcon = styled.span`
  font-size: 20px;
  color: #e5e5e5;
`;
export const SendingMessageAnimation = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 0px;
    height: 0px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: 2s ballAnimation infinite;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 0px;
    height: 0px;
    background: #ffffff;
    border-radius: 50%;
    animation: 2s ballAnimation infinite;
    animation-delay: 1s;
  }

  @keyframes ballAnimation {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    50% {
      width: 25px;
      height: 25px;
      opacity: 0.3;
    }
    100% {
      width: 0;
      height: 0;
      opacity: 1;
    }
  }
`;
