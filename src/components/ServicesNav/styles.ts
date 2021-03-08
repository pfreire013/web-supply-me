import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 120px;
  padding-top: 70px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;
