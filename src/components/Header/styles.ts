import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background: ${theme.color.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.color.highGrey};
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0px 30px;
`;

export const NavItemText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.color.highGrey};
`;

export const NavLogInText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.color.primary};
`;

export const NavSignUp = styled.div<{ minimalist: boolean }>`
  height: 40px;
  background: ${props =>
    props.minimalist ? theme.color.white : theme.color.primary};
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: solid;
  border-width: ${props => (props.minimalist ? 2 : 0)}px;
  border-color: ${theme.color.primary};
`;

export const NavSignUpText = styled.span<{ minimalist: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${props =>
    props.minimalist ? theme.color.primary : theme.color.white};
`;
