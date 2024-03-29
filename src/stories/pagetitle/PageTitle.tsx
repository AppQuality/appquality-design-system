import { ArrowLeftCircle } from "react-bootstrap-icons";
import styled from "styled-components";
import { Title, TitleProps } from "../typography/Typography";
import { PageTitleProps } from "./_types";

const NavigationAnchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const HeadingElement = styled.div`
  font-size: 14px;
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
`;
const PageTitle = ({
  size,
  heading,
  subtitle,
  back,
  children,
  as,
}: PageTitleProps) => {
  let titleSize: TitleProps["size"] = "xl";
  let subtitleSize: TitleProps["size"] = "mt";
  let headingElement = null;
  let subtitleElement = null;
  let backElement = null;
  if (size === "regular") {
    titleSize = "l";
    subtitleSize = "s";
  } else if (size === "small") {
    titleSize = "ms";
    subtitleSize = "xs";
  }
  if (subtitle) {
    subtitleElement = (
      <Title
        as={typeof subtitle == "string" ? undefined : subtitle.as}
        className="aq-mt-2"
        size={subtitleSize}
        color="primary"
        variant
      >
        {typeof subtitle == "string" ? subtitle : subtitle.content}
      </Title>
    );
  }
  if (heading) {
    headingElement = (
      <HeadingElement
        as={typeof heading == "string" ? undefined : heading.as}
        className="aq-mb-2"
      >
        {typeof heading == "string" ? heading : heading.content}
      </HeadingElement>
    );
  }
  if (back) {
    backElement = (
      <div className="aq-mt-2">
        <NavigationAnchor
          className="aq-text-secondary"
          href={back.navigation}
          target={back.target}
        >
          <ArrowLeftCircle className="aq-float-left" size={"1.3125rem"} />
          <span className="aq-text-secondary aq-ml-2">{back.text}</span>
        </NavigationAnchor>
      </div>
    );
  }

  return (
    <div className="aq-my-3">
      {headingElement}
      <Title as={as} size={titleSize}>
        {children}
      </Title>
      {subtitleElement}
      {backElement}
    </div>
  );
};

export { PageTitle };
