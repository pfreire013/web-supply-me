import React from 'react';
import { RoutesName } from '../../../routes/RoutesName';
import {
  Container,
  Title,
  Description,
  InputContainer,
  InputService,
  ButtonContainer,
  ButtonText,
  InfoText,
  ButtonLink,
  PlatformsContainer,
  PlatformsDescription,
  PlatformImage,
} from './styles';
import WhatsappLogo from '../../../assets/images/whatsapp-logo.png';
import TelegramLogo from '../../../assets/images/telegram-logo.png';
import MessengerLogo from '../../../assets/images/messenger-logo.png';

const SessionOne: React.FC = () => {
  return (
    <Container>
      <Title>The smartest way to hire a service</Title>
      <Description>
        Speak what you need, receive up to 3 quotes, choose the best one.
      </Description>
      <InputContainer>
        <InputService placeholder="Type here the service you need" />
        <ButtonLink to={RoutesName.RequestService}>
          <ButtonContainer>
            <ButtonText>Continue</ButtonText>
          </ButtonContainer>
        </ButtonLink>
      </InputContainer>
      <InfoText>Free and secure quote</InfoText>
      <PlatformsContainer>
        <PlatformsDescription>
          You can still choose which platform you want to be contacted
        </PlatformsDescription>
        <PlatformImage src={WhatsappLogo} />
        <PlatformImage src={TelegramLogo} />
        <PlatformImage src={MessengerLogo} />
      </PlatformsContainer>
    </Container>
  );
};

export default SessionOne;
