import { PageTitleProps } from "./_types";
import styled from "styled-components";
import { Title, Text, TitleProps } from "../typography/Typography";
import { ArrowLeftCircle } from "react-bootstrap-icons";

const NavigationAnchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
  let subtitleSize: TitleProps["size"] = "ms";
  let headingElement = null;
  let subtitleElement = null;
  let backElement = null;
  if (size == "regular") {
    titleSize = "l";
    subtitleSize = "s";
  }
  if (subtitle) {
    subtitleElement = (
      <Title
        as={typeof subtitle == "string" ? undefined : subtitle.as}
        className="aq-mt-2"
        size={subtitleSize}
      >
        {typeof subtitle == "string" ? subtitle : subtitle.content}
      </Title>
    );
  }
  if (heading) {
    headingElement = (
      <Text
        as={typeof heading == "string" ? undefined : heading.as}
        className="aq-mb-2"
      >
        {typeof heading == "string" ? heading : heading.content}
      </Text>
    );
  }
  if (back) {
    backElement = (
      <div className="aq-mt-2">
        <NavigationAnchor href={back.navigation}>
          <ArrowLeftCircle className="aq-float-left" size={"1.3125rem"} />
          <Text as="span" className="aq-ml-2">
            {back.text}
          </Text>
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
