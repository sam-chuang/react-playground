import React from "react"
import { useRouteData } from "react-static"
import { Router } from "@reach/router"
import styled from "styled-components"
import Card from "../Card"

const App = () => {
  const { path, playgrounds = [] } = useRouteData()

  return (
    <Router>
      <Content path={path} playgrounds={playgrounds}></Content>
    </Router>
  )
}

const Content = ({ playgrounds = [] }) => {
  return (
    <div>
      {playgrounds.map(playground => {
        return (
          <Card
            key={playground.name}
            title={playground.name}
            path={playground.name}
          ></Card>
        )
      })}
    </div>
  )
}

/*
need?
      <Heading>React.js Developer's Journey</Heading>
*/
const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  color: rgb(18, 22, 27);
  text-align: center;
`

export default App
