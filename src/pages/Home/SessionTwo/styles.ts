import styled from 'styled-components';
import theme from '../../../theme';
import Logo from '../../../assets/images/browser.png';
import Arrow from '../../../assets/icons/right-arrow.svg';

export const Container = styled.div`
  background: ${theme.color.white};
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 90px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${theme.color.black};
  font-weight: bold;
  margin-bottom: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 0.25;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

export const CardIcon = styled.img.attrs({
  src: Logo,
})`
  height: 90px;
  width: 90px;
  margin-bottom: 28px;
`;

export const ArrowIcon = styled.img.attrs({
  src: Arrow,
})`
  height: 20px;
  width: 20px;
  padding-top: 40px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: ${theme.color.black};
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: 400;
  text-align: center;
`;
