import styled from "styled-components";

export interface LanguageItem {
  lang: string;
  onClick?(lang: string, route?: string): void;
}

export const LanguageIconWrapper = styled.div`
  display: flex;
  button {
    cursor: pointer;
  }
  button,
  div {
    border: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    background: #fff;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 50%;
    text-transform: uppercase;
  }
`;
export const LanguageIcons = ({
  langs,
  route,
}: {
  langs: Array<LanguageItem>;
  route?: string;
}) => {
  return (
    <LanguageIconWrapper>
      {langs.map((l, idx) => {
        if (l.onClick) {
          return (
            <button
              key={idx}
              onClick={() => {
                if (l.onClick) {
                  l.onClick(l.lang, route);
                }
              }}
            >
              {l.lang}
            </button>
          );
        }
        return <div key={idx}>{l.lang}</div>;
      })}
    </LanguageIconWrapper>
  );
};
