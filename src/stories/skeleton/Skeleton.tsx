import styled, { DefaultTheme } from "styled-components";

export interface SkeletonProps {
  theme: DefaultTheme;
}

const SkeletonWrapper = styled.div(({ theme }: SkeletonProps) => {
  return `
      background-image: linear-gradient(90deg, ${theme.colors.gray100} 0px, #ffffff 40px, ${theme.colors.gray100} 80px);
      background-size: 600px;
      border-radius: 4px;
      animation: active 1.6s infinite linear;
      p {
        min-width: 100px;
      }
      @keyframes active {
       0% {background-position: -100px;}
       40% {background-position: 140px;}
       100% {background-position: 140px;}
      }
    `;
});

const Skeleton = () => (
  <SkeletonWrapper data-testid="skeleton">
    <p data-testid="skeleton-p" />
  </SkeletonWrapper>
);

export default Skeleton;
