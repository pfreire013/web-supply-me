import React from 'react';

import {
  Container,
  Title,
  Wrapper,
  CardContainer,
  CardIcon,
  CardTitle,
  CardDescription,
  ArrowIcon,
} from './styles';

const SessionTwo = (): JSX.Element => {
  return (
    <Container>
      <Title>How to find your professional toSupply</Title>
      <Wrapper>
        <CardContainer>
          <CardIcon />
          <CardTitle>Make your wish</CardTitle>
          <CardDescription>
            {`Speak what you need. It's fast and grace! Use our search bar or
            select the category in our header services`}
          </CardDescription>
        </CardContainer>
        <ArrowIcon />
        <CardContainer>
          <CardIcon />
          <CardTitle>Make your wish</CardTitle>
          <CardDescription>
            {`Speak what you need. It's fast and grace! Use our search bar or
            select the category in our header services.`}
          </CardDescription>
        </CardContainer>
        <ArrowIcon />
        <CardContainer>
          <CardIcon />
          <CardTitle>Make your wish</CardTitle>
          <CardDescription>
            {`Speak what you need. It's fast and grace! Use our search bar or
            select the category in our header services`}
          </CardDescription>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default SessionTwo;
