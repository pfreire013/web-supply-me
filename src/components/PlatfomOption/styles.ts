import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div``;

export const ButtonPlatform = styled.button<{ color: string }>`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: solid;
  border-width: 2px;
  border-color: ${props => props.color};
  background: ${theme.color.lowGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
`;

export const IconPlatform = styled.img``;
