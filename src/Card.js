import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "@reach/router"

//TODO: need the following?
/*
height: 72px;
text-overflow: ellipsis;
overflow-wrap: break-word;
overflow: hidden;
 */
const TitleLink = styled(RouterLink)`
  color: rgb(18, 22, 27);
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 2rem;
`

/*TODO: need the following?

height: 63px;
text-overflow: ellipsis;
overflow-wrap: break-word;
overflow: hidden;
*/
const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  ncolor: #192038;
`

const Detail = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
//TODO: from props?
const ImageLink = styled(RouterLink)`
  background-image: url("");
  background-size: cover;
  display: block;
  height: 400px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-basis: 50%;
  background-position: center center;
`

const Box = styled.div`
  margin-bottom: 1.875rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 235);
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
`

export const Card = props => {
  const { title, path, description, imgUrl } = props
  return (
    <Box>
      {imgUrl && <ImageLink url={imgUrl}></ImageLink>}
      <Detail>
        <TitleLink to={path}>{title}</TitleLink>
        {description && <Paragraph description={description} />}
      </Detail>
    </Box>
  )
}

export default Card
