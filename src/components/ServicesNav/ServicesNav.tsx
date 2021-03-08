import React from 'react';
import CardService from '../CardService';
import { Container } from './styles';

const mockServices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ServicesNav: React.FC = () => {
  return (
    <Container>
      {mockServices.map(service => (
        <CardService key={service} />
      ))}
    </Container>
  );
};

export default ServicesNav;
