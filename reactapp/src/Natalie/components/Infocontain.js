import React from 'react'
import styled from 'styled-components'

function Infocontain(props) {
  const { activityDetail } = props
  const item = activityDetail[0]
  return (
    <Infocard>
      <Header>
        <h3>活動內容</h3>
      </Header>
      <Content>
        <p>{item.content}</p>
      </Content>
    </Infocard>
  )
}
const Infocard = styled.div`
  min-width: 65%;
  height: fit-content;
  min-height: 500px;
  border-radius: 1rem;
  background: #fff;
`
const Content = styled.div`
  padding: 2rem;
`
const Header = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  height: 10%;
  width: 100%;
  background: #8dd9ce;
  h3 {
    margin: 0;
    font-weight: 600;
    color: #fff;
    align-items: center;
  }
`
const Infomation = styled.div`
  padding: 1rem;
  text-align: center;
`

export default Infocontain
