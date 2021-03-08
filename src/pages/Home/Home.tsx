import React from 'react';
import Header from '../../components/Header';
import ServicesNav from '../../components/ServicesNav';
import Footer from './Footer';
import SessionFour from './SessionFour';
import SessionOne from './SessionOne';
import SessionThree from './SessionThree';
import SessionTwo from './SessionTwo';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ServicesNav />
      <SessionOne />
      <SessionTwo />
      <SessionFour />
      <SessionThree />
      <Footer />
    </Container>
  );
};

export default Home;
