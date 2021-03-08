import React, { useState } from 'react';
import { IconContext, IconType } from 'react-icons/lib';
import theme from '../../theme';
import { Container, ButtonPlatform } from './styles';

interface Props {
  icon: JSX.Element;
  color: string;
  handleClick: () => void;
}

const PlatfomOption: React.FC<Props> = ({ icon, color, handleClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsSelected(!isSelected);
    handleClick();
  };
  return (
    <Container>
      <IconContext.Provider
        value={{
          style: {
            height: 25,
            width: 25,
            color: isSelected ? color : theme.color.mediumGrey,
          },
        }}
      >
        <ButtonPlatform
          onClick={event => handleSelect(event)}
          color={isSelected ? color : theme.color.mediumGrey}
        >
          {icon}
        </ButtonPlatform>
      </IconContext.Provider>
    </Container>
  );
};

export default PlatfomOption;
