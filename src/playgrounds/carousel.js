import React from "react"
import { useRouteData } from "react-static"

import { Link, Router } from "@reach/router"
import { Pane, Heading, Text } from "evergreen-ui"

export const Carousel = ({ images = [], ...props }) => {
  //TODO
  return (
    <>
      {images.map(url => (
        <img key={url} src={url}></img>
      ))}
    </>
  )
}

const Content = ({ images = [] } = {}) => {
  return (
    <>
      <Link to="../">{"<"} Back</Link>
      <Carousel images={images}></Carousel>
    </>
  )
}

export default function() {
  const { path, placeholders = {}, ...routeData } = useRouteData()

  return (
    <Router>
      <Content path={path} images={placeholders.images}></Content>
    </Router>
  )
}
