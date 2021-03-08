import React from 'react';
import CommunButton from '../../../components/CommunButton';

import {
  Container,
  ImageContainer,
  PhoneAppImage,
  Wrapper,
  InfoContainer,
  Title,
  Subtitle,
  Description,
  StoresContainer,
  AppStoreIcon,
  GooglePlayIcon,
} from './styles';

const SessionThree = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <PhoneAppImage />
      </ImageContainer>
      <Wrapper>
        <InfoContainer>
          <Title>Are you a professional ?</Title>
          <Subtitle>Do you need extra income?</Subtitle>
          <Description>
            toSupply receives more than 50 thousand orders every month from
            customers looking for professionals like you.
          </Description>
          <br />
          <Description>
            Register your services and receive requests directly from your cell
            phone
          </Description>
        </InfoContainer>
        <CommunButton
          title="Register my services"
          onClick={() => console.log('register')}
        />
        <StoresContainer>
          <AppStoreIcon />
          <GooglePlayIcon />
        </StoresContainer>
      </Wrapper>
    </Container>
  );
};

export default SessionThree;
