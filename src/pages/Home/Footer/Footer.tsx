import React from 'react';

import {
  Container,
  ServiceContainer,
  Title,
  FooterItem,
  InstitutionalContainer,
  SocialContainer,
  DownloadsContainer,
  LineContainer,
  ItemText,
  Wrapper,
  ServiceWrapper,
  SocialIcon,
  SocialWrapper,
  AppStoreIcon,
  GooglePlayIcon,
  DownloadsWrapper,
  FooterBottom,
} from './styles';
import Facebook from '../../../assets/icons/facebook.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';

const TypeServices = [
  'Assistencia Técnica',
  'Aulas',
  'Autos',
  'Consultoria',
  'Design e Tecnologia',
  'Eventos',
  'Moda e Beleza',
  'Reformas',
  'Saúde',
  'Serviços Domésticos',
];

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ServiceContainer>
            <Title>Services</Title>
            <ServiceWrapper>
              {TypeServices.map(service => (
                <FooterItem>
                  <ItemText>{service}</ItemText>
                </FooterItem>
              ))}
            </ServiceWrapper>
          </ServiceContainer>
          <InstitutionalContainer>
            <Title>Institutional</Title>
            <FooterItem>
              <ItemText>How to find your professional toSupply</ItemText>
            </FooterItem>
            <FooterItem>
              <ItemText>Where is toSupply at?</ItemText>
            </FooterItem>
            <FooterItem>
              <ItemText>Are you a professional ?</ItemText>
            </FooterItem>
          </InstitutionalContainer>
          <SocialContainer>
            <Title>Social Networks</Title>
            <SocialWrapper>
              <SocialIcon src={Facebook} />
              <SocialIcon src={Instagram} />
              <SocialIcon src={Twitter} />
              <SocialIcon src={Linkedin} />
            </SocialWrapper>
          </SocialContainer>
          <DownloadsContainer>
            <Title>Downloads</Title>
            <DownloadsWrapper>
              <AppStoreIcon />
              <GooglePlayIcon />
            </DownloadsWrapper>
          </DownloadsContainer>
        </Wrapper>
      </Container>
      <FooterBottom>
        <LineContainer />
      </FooterBottom>
    </>
  );
};

export default Footer;
