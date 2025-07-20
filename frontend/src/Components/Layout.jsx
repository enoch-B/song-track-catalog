/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const Background = styled.div`
  min-height: 100vh;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0,102,255,0.05) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(255,107,107,0.05) 0%, transparent 30%),
    linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%) 60% 60%,
      radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%) 40% 30%,
      radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%) 80% 10%;
    animation: ${pulse} 8s ease infinite alternate;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
}