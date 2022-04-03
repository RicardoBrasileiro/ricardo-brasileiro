import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PersonalInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ProfilePicture = styled.img`
  width: 300px;
  border-radius: 50%;

  &:first-of-type {
    display: none;
  }

  @media (max-width: 900px) {
    margin: 20px;
    margin-bottom: 30px;
    width: 40vw;

    &:first-of-type {
      display: unset;
    }

    &:last-of-type {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin: 20px;
    margin-bottom: 30px;
    width: 50vw;

    &:first-of-type {
      display: unset;
    }

    &:last-of-type {
      display: none;
    }
  }
`;
export const ContactInfo = styled.div`
  font-weight: bold;
`;
export const PersonalName = styled.p`
  font-size: 2.5rem;
  color: var(--secondary-color);

  @media (max-width: 1150px) {
  }

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;
export const PersonalSkill = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;

  @media (max-width: 1150px) {
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const ContactMeButton = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 13px 30px;
  border-radius: 10px;
  border: none;
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: max-content;

  @media (max-width: 600px) {
    padding: 10px 20px;
    margin-top: 30px;
  }
`;
export const ContactMeButtonLabel = styled.p`
  font-size: 1.2rem;
  margin-right: 20px;
  font-weight: bold;
  color: #e5e5e5;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-right: 10px;
  }
`;
export const ContactMeButtonIcon = styled.span`
  font-size: 25px;
  color: #e5e5e5;

  @media (max-width: 1150px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
