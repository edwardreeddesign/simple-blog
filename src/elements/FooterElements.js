import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    padding: 0 1rem;
    transition: filter 300ms ease;
    height: 22px;

    &:hover,
    &:focus {
      filter: brightness(50%);
    }
  }
`
