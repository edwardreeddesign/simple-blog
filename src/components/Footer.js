import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebookLogo.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagramLogo.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedinLogo.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitterLogo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://faceebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook Logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin Logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram Logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a>
        </FooterSocialIcons>
        <p>© 2022 Edward Reed Designs. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
