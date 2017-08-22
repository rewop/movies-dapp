import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #ecf0f1;
  color: #666;
`;

const AppInnerContainer = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// http://rawgit.com/start-react/ani-theme/master/build/index.html#/dashboard/overview

const AppLayout = ({ children }: { children: any }) =>
  (<AppContainer>
    <AppInnerContainer>
      {children}
    </AppInnerContainer>
  </AppContainer>);

export default AppLayout;
