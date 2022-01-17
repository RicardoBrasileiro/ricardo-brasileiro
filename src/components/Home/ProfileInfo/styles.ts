import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileInfoBox = styled.div`
  height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    height: unset;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;
export const NameLabel = styled.h1`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.name};

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
export const OfficeLabel = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.similarColors.primaryColor};
  margin-top: 0.5rem;
`;
export const Description = styled.p`
  width: 50vw;
  text-align: justify;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 2rem 0rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContactMeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.contact_me};
  background: ${({ theme }) => theme.similarColors.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ContactMeIcon = styled.i`
  margin-left: 2rem;
`;
