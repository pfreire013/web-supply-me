import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import theme from '../../theme';

export const TextText = styled(TextField)``;

export const Container = styled.div`
  padding-top: 100px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 120px;
`;

export const TextInformationContainer = styled.div`
  flex: 0.4;
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
  margin-bottom: 40px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;

export const FormLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const FormSecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MandatoryLanguageContainer = styled.div`
  display: flex;
  flex: 0.1;
  flex-direction: column;
`;

export const InputTitle = styled.h3`
  font-size: 12px;
  color: ${theme.color.highGrey};
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ServiceDescription = styled.div`
  width: 100%;
`;

export const InputServiceDescription = styled.textarea`
  width: 100%;
  border: solid;
  border-width: 2px;
  border-color: ${theme.color.mediumGrey};
  background: ${theme.color.lowGrey};
  border-radius: 10px;
  height: 100px;
  padding: 16px;

  &::placeholder {
    color: ${theme.color.mediumGrey};
    font-size: 14px;
  }
`;

export const UrgentServiceContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const LabelTitle = styled.h2`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: 500;
  margin-right: 20px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-between;
`;

export const RequestButton = styled.button`
  height: 50px;
  background: ${theme.color.primary};
  padding: 0 50px;
  border: none;
  border-radius: 10px;
  width: 50%;
  margin-top: 40px;
`;

export const ButtonText = styled.h2`
  font-size: 18px;
  color: ${theme.color.white};
  font-weight: 700;
  text-transform: uppercase;
`;
