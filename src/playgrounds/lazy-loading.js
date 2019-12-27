import React from "react"
import { useRouteData } from "react-static"
import { Link, Router } from "@reach/router"

const Content = () => {
  return <div> TODO: Lazy Loading </div>
}

export default function() {
  const { path, placeholders = {}, ...routeData } = useRouteData()

  return (
    <Router>
      <Content path={path}></Content>
    </Router>
  )
}
