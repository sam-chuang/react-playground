import React from "react"
import { Root, Routes } from "react-static"
import { Link, Router } from "@reach/router"
import styled from "styled-components"
import "./app.css"

const App = () => {
  return (
    <FullHeightRoot>
      <Header>
        <Link to="/">
          <Home></Home>
        </Link>
        <SearchInput></SearchInput>
      </Header>
      <Banner />
      <Content>
        <ContentBox>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </ContentBox>
      </Content>
    </FullHeightRoot>
  )
}

const ContentBox = styled.div`
  max-width: 1110px;
  margin: 0px auto;
`

const FullHeightRoot = styled(Root)`
  min-height: 100vh;
  display: flex;
`

//TODO: height from context
const Header = styled.div`
  top: 0;
  left: 0;
  height: 65px;
  z-index: 1;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-bottom: 1px solid rgb(228, 231, 235);
`

//TODO: redesign, not to height
const Banner = () => (
  <Box>
    <img
      width="100%"
      height="auto"
      src="/images/sand-playground_1920.jpg"
    ></img>
    <RightBlurBar>
      <SandPlaygroundRightCover
        width="auto"
        height="100%"
        src="/images/sand-playground_1920.jpg"
      />
    </RightBlurBar>
    <RightBar>
      <Slogan>Let's Start Building React.js</Slogan>
    </RightBar>
  </Box>
)

//TODO: max-height: 100vh; ?
const Box = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const RightBar = styled.div`
  width: 55%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  align-content: center;
`

const RightBlurBar = styled(RightBar)`
  filter: blur(1rem);
`

const SandPlaygroundRightCover = styled.img`
  object-fit: cover;
  object-position: right bottom;
  display: block;
  mask-image: radial-gradient(rgba(0, 0, 0, 1), transparent);
`

const Slogan = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  padding: 20px;
`

//TODO: header height from context
const Content = styled.div`
  background-color: rgb(249, 250, 251);
  height: calc(100vh - 65px);
  flex-grow: 1;
  background-color: rgb(249, 250, 251);
  padding-bottom: 4rem;
  padding-top: 4rem;
`

const Home = (props = {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

//TODO
const SearchInput = () => {
  return (
    <SearchBox>
      <Input placeholder="Search" />
    </SearchBox>
  )
}

const SearchBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: 1rem;
  position: relative;
  display: flex;
  height: 38px;
`

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 0 12px;
  background-color: white;
  box-shadow: rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset,
    rgba(67, 90, 111, 0.14) 0px 1px 2px inset;
  border-style: none;
`

export default App
