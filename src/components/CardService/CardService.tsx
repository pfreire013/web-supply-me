import React from 'react';
import DomesticCleaning from '../../assets/icons/domestic-cleaning.png';
import { Container, ServiceIcon, ServiceName } from './styles';

const CardService: React.FC = () => {
  return (
    <Container>
      <ServiceIcon src={DomesticCleaning} />
      <ServiceName>Domestic cleaning</ServiceName>
    </Container>
  );
};

export default CardService;
