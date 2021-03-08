import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme';

export const Container = styled.div`
  padding: 100px 120px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${theme.color.black};
  margin-bottom: 40px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: ${theme.color.highGrey};
  width: 30%;
  margin-bottom: 60px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const InputService = styled.input`
  border: solid;
  background: ${theme.color.lowGrey};
  height: 50px;
  width: 40%;
  border-width: 1px;
  border-color: ${theme.color.mediumGrey};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 40px;

  &::placeholder {
    color: ${theme.color.highGrey};
    font-style: italic;
  }
`;

export const ButtonContainer = styled.button`
  border: none;
  background: ${theme.color.primary};
  height: 52px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 60px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.color.white};
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.color.primary};
`;

export const PlatformsContainer = styled.div`
  margin-top: 40px;
`;

export const PlatformsDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.highGrey};
  margin-bottom: 20px;
`;

export const PlatformImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;
