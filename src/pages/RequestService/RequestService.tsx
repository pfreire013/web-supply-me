/* eslint-disable no-console */
import React from 'react';
import Header from '../../components/Header';
import RequestServiceForm from '../../components/RequestServiceForm';
import {
  Container,
  Main,
  Title,
  Description,
  TextInformationContainer,
  FormContainer,
} from './styles';

const RequestService: React.FC = () => {
  return (
    <>
      <Header minimalist />
      <Container>
        <Main>
          <TextInformationContainer>
            <Title>Needing a Day Laborer?</Title>
            <Description>
              We have thousands of professionals available for your needs, after
              a few moments they will contact you so you can choose the best
              one.
            </Description>
            <Description>
              To help our professional filtering please write a brief
              description about the service.
            </Description>
          </TextInformationContainer>

          <FormContainer>
            <RequestServiceForm />
          </FormContainer>
        </Main>
      </Container>
    </>
  );
};

export default RequestService;
