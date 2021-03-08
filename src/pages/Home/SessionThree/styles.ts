import styled from 'styled-components';
import PhoneApp from '../../../assets/images/phone-app.png';
import theme from '../../../theme';
import AppStore from '../../../assets/images/app-store.png';
import GooglePlay from '../../../assets/images/google-play.png';

export const Container = styled.div`
  padding: 90px 0 200px 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${theme.color.lowGrey};
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 0.3;
`;

export const PhoneAppImage = styled.img.attrs({
  src: PhoneApp,
})`
  height: 700px;
  aspect-ratio: initial;
  position: absolute;
  top: -120px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
`;

export const InfoContainer = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: ${theme.color.black};
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
  font-size: 28px;
  color: ${theme.color.highGrey};
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: 400;
`;

export const StoresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin-top: 60px;
`;

export const AppStoreIcon = styled.img.attrs({
  src: AppStore,
})`
  height: 40px;
`;

export const GooglePlayIcon = styled.img.attrs({
  src: GooglePlay,
})`
  height: 57px;
`;
