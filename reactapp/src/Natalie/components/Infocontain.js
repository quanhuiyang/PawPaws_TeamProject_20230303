import React from 'react'
import styled from 'styled-components'

function Infocontain() {
  return (
    <Infocard>
      <Header>
        <h3>活動內容</h3>
      </Header>
      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          suscipit aperiam tempora, perferendis possimus nobis quis dicta in rem
          adipisci, odit temporibus culpa hic? Pariatur ullam illum commodi
          libero nisi voluptatum fugit doloribus consectetur, voluptate rem
          accusamus consequuntur sunt qui non in inventore blanditiis similique
          debitis? Explicabo maiores modi repellendus eaque, necessitatibus,
          iure consequuntur temporibus provident possimus est magni asperiores
          enim, accusantium sequi repellat? Quaerat corporis, laborum voluptatum
          eum at aspernatur veritatis alias recusandae architecto nobis
          molestiae aperiam molestias, laboriosam, odio voluptas dolore natus
          animi ad fuga sapiente rerum! Enim beatae veritatis adipisci
          dignissimos? Minus dicta nulla ducimus autem distinctio!
        </p>
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
