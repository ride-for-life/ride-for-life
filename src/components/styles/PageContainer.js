import styled from 'styled-components';

export const PageContainer = styled.section`
  background: #2A2E43;
  color: white;
`;

export const PageContainerGrey = styled.section`
  background: #F7F7FA;
  color: #454F63;
  height: 812px;
  width: 375px;
`
export const OverlayDiv = styled.div`
    width: 800px;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 60px 20px;
    position: relative;
    pointer-events:none;        
    z-index: 100;
    min-height: 100vh;
`
