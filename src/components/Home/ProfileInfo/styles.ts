import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileInfoBox = styled.div`
  height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 60rem) {
    height: unset;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 60rem) {
    align-items: center;
  }
`;
export const NameLabel = styled.h1`
  font-size: 35px;

  @media (max-width: 60rem) {
    font-size: 30px;
  }
`;
export const OfficeLabel = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.lightRed};
  margin-top: 0.5rem;
`;
export const Description = styled.p`
  width: 400px;
  text-align: justify;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 2rem 0rem;

  @media (max-width: 60rem) {
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
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.lightRed};
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ContactMeIcon = styled.i`
  margin-left: 2rem;
`;
