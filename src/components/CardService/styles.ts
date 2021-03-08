import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  height: 120px;
  background: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${theme.color.primaryOpacity};
  }
`;

export const ServiceIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 12px;
`;

export const ServiceName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.primary};
  text-align: center;
  width: 80%;
`;
