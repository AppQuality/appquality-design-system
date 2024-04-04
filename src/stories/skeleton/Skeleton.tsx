import styled from "styled-components";

type SkeletonItemProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
};
const SkeletonItem = styled.div<SkeletonItemProps>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.gray100};
`;

const Skeleton = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <StyledSkeleton {...props} />;
};

const StyledSkeleton = styled.div`
  ${SkeletonItem} {
    background-image: linear-gradient(
      90deg,
      transparent 0px,
      #fbfbfb 40px,
      transparent 80px
    );
    background-size: 600px;
    background-repeat: no-repeat;
    border-radius: 4px;
    animation: active 1.5s infinite linear;
    animation-delay: 1s;
  }

  @keyframes active {
    0% {
      background-position: -600px 0;
    }
    100% {
      background-position: 600px 0;
    }
  }
`;

Skeleton.Item = SkeletonItem;
export { Skeleton };
