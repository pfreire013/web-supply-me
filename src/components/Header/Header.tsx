import React from 'react';
import {
  Container,
  Logo,
  NavContainer,
  NavLink,
  NavItemText,
  NavLogInText,
  NavSignUp,
  NavSignUpText,
  NavMenu,
} from './styles';

interface Props {
  minimalist?: boolean;
}

const Header: React.FC<Props> = ({ minimalist = false }) => {
  return (
    <Container>
      <NavContainer>
        <NavLink to="/">
          <Logo>Supply Me</Logo>
        </NavLink>
        <NavMenu>
          {!minimalist && (
            <>
              <NavLink to="">
                <NavItemText>How it works?</NavItemText>
              </NavLink>
              <NavLink to="">
                <NavLogInText>Log In</NavLogInText>
              </NavLink>
            </>
          )}
          <NavLink to="">
            <NavSignUp minimalist={minimalist}>
              <NavSignUpText minimalist={minimalist}>
                Become a Partner
              </NavSignUpText>
            </NavSignUp>
          </NavLink>
        </NavMenu>
      </NavContainer>
    </Container>
  );
};

export default Header;
