import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  cursor: pointer;
  background: ${theme.color.primary};
  border-radius: 10px;
  padding: 12px 40px;
  width: fit-content;
`;

export const Text = styled.h5`
  font-size: 14px;
  color: ${theme.color.white};
  font-weight: 500;
  text-align: center;
`;
