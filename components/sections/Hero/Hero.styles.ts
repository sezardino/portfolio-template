import styled from "styled-components";

export const StyledSection = styled.div`
  padding: 40px 20px;
  display: grid;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const ImageWrapper = styled.div`
  padding: 25px 25px 0 25px;
  border-radius: 375px 375px 15px 15px;
  margin: 0 auto;
  display: inline-flex;
  text-align: center;
  background: rgb(180, 183, 190);
  background: linear-gradient(
    0deg,
    rgba(180, 183, 190, 0.1) 0%,
    rgba(180, 183, 190, 1) 35%,
    rgba(180, 183, 190, 1) 100%
  );
`;

export const ScrollCta = styled.a`
  display: inline-flex;
  position: absolute;
  bottom: 25%;
  right: 0;
  transform: rotate(90deg);
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.media.smMobileOnly} {
    display: none;
  }

  @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.colors.accent};
      }
    }
`;

export const ContactLinks = styled.div`
  position: absolute;
  bottom: 20%;
  left: 20px;
  display: inline-grid;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xs};

  svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    width: 2px;
    height: 24px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.primary};
  }

  a {
    @media (hover: hover) {
      &:hover svg {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }

  @media ${(props) => props.theme.media.smMobileOnly} {
    display: none;
  }
`;
