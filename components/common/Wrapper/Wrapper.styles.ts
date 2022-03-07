import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.sm};
  width: 100%;
  max-width: 100%;

  @media ${(props) => props.theme.media.smMobileUp} {
    max-width: 540px;
  }

  @media ${(props) => props.theme.media.tabledDesktop} {
    max-width: 720px;
  }

  @media ${(props) => props.theme.media.smDesktop} {
    padding: 0 ${(props) => props.theme.spacing.xxl};
    max-width: 900px;
  }

  @media ${(props) => props.theme.media.mdDesktop} {
    max-width: 1280px;
  }
`;
