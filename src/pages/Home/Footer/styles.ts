import styled from 'styled-components';
import theme from '../../../theme';
import AppStore from '../../../assets/images/app-store.png';
import GooglePlay from '../../../assets/images/google-play.png';

export const Container = styled.div`
  background: ${theme.color.primary};
  display: flex;
  justify-content: center;
  padding: 90px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1300px;
  justify-content: space-between;
`;

export const ServiceContainer = styled.div``;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: ${theme.color.white};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const FooterItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ItemText = styled.a`
  color: ${theme.color.white};
`;

export const InstitutionalContainer = styled.div``;

export const SocialContainer = styled.div``;

export const DownloadsContainer = styled.div``;

export const LineContainer = styled.div`
  height: 1px;
  background: ${theme.color.white};
`;

export const SocialWrapper = styled.div``;

export const DownloadsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialIcon = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-right: 12px;
`;

export const AppStoreIcon = styled.img.attrs({
  src: AppStore,
})`
  width: 150px;
`;

export const GooglePlayIcon = styled.img.attrs({
  src: GooglePlay,
})`
  margin-left: -10px;
  width: 170px;
`;

export const FooterBottom = styled.div`
  background: ${theme.color.primary};
  height: 100px;
  align-items: center;
  padding: 0 100px;
`;
