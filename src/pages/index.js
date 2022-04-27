import React from "react"

import { Container, FeatureImage, Content, ContentCard } from "../components"
const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2022-04-21"
          title="My First Post! Hello World!"
          excerpt="lorem ipsum dolor sit amet lorem ipsum dolor "
          slug="my-first-post"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
