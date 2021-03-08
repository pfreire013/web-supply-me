import React from 'react';

import { Container, Text } from './styles';

interface Props {
  title: string;
  onClick: () => void;
}

const CommunButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <Container onClick={() => onClick()}>
      <Text>{title}</Text>
    </Container>
  );
};

export default CommunButton;
