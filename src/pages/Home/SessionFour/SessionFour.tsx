import React from 'react';

import {
  Container,
  Title,
  Wrapper,
  InfoContainer,
  WorldIcon,
  UsersIcon,
  LanguagesIcon,
  InfoDescription,
  InfoTitle,
  EuropeContainer,
  EuropeImage,
  InfoWrapper,
  InfoCard,
} from './styles';

const SessionFour: React.FC = () => {
  return (
    <Container>
      <Title>Where is toSupply at?</Title>
      <Wrapper>
        <InfoContainer>
          <InfoCard>
            <WorldIcon />
            <InfoWrapper>
              <InfoTitle>10 countries in Europe</InfoTitle>
              <InfoDescription>
                Our services are available in Portugal, Spain, France, Austria,
                Italy, Germany and England.
              </InfoDescription>
            </InfoWrapper>
          </InfoCard>
          <InfoCard>
            <UsersIcon />
            <InfoWrapper>
              <InfoTitle>More than 10.000 </InfoTitle>
              <InfoDescription>
                happy users with services from toSupply
              </InfoDescription>
            </InfoWrapper>
          </InfoCard>
          <InfoCard>
            <LanguagesIcon />
            <InfoWrapper>
              <InfoTitle>5 languages</InfoTitle>
              <InfoDescription>
                available for use in top Supply applications
              </InfoDescription>
            </InfoWrapper>
          </InfoCard>
        </InfoContainer>
        <EuropeContainer>
          <EuropeImage />
        </EuropeContainer>
      </Wrapper>
    </Container>
  );
};

export default SessionFour;
