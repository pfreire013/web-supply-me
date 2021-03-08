import styled from 'styled-components';
import EuropePoints from '../../../assets/images/europe-points.png';
import World from '../../../assets/icons/world.svg';
import Languages from '../../../assets/icons/languages.svg';
import Users from '../../../assets/icons/users.svg';
import theme from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  background: #f9f9f9;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: ${theme.color.black};
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  padding-top: 90px;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 90px;
`;

export const InfoWrapper = styled.div`
  margin-left: 20px;
`;

export const WorldIcon = styled.img.attrs({
  src: World,
})`
  height: 60px;
`;

export const UsersIcon = styled.img.attrs({
  src: Users,
})`
  height: 60px;
`;

export const LanguagesIcon = styled.img.attrs({
  src: Languages,
})`
  height: 60px;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  color: ${theme.color.black};
  font-weight: 500;
  margin-bottom: 0.5em;
`;

export const InfoDescription = styled.p`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: 400;
`;

export const EuropeContainer = styled.div`
  display: flex;
  flex: 0.3;
`;

export const EuropeImage = styled.img.attrs({
  src: EuropePoints,
})`
  height: 600px;
  aspect-ratio: initial;
`;
