import React from 'react'
import styled from 'styled-components'

function ActivitySignUp() {
  return (
    <div>
      <SignupCard>
        <Infoheader>
          <h5>參加活動報名表</h5>
        </Infoheader>
        <img src="../images/Natalie_img/AC06.jpg" alt="AC06" />

        <Form>
          <InputBox>
            <h6>活動名稱</h6>
            <h6>成大寵物展</h6>
          </InputBox>

          <InputBox>
            <p>姓名</p>
            <input type="text" name="name" placeholder="請輸入姓名" />
          </InputBox>

          <InputBox>
            <p>信箱</p>
            <input type="email" name="email" placeholder="請輸入email" />
          </InputBox>
          <InputBox>
            <p>手機</p>
            <input
              type="text"
              name="text"
              placeholder="請輸入手機號碼"
              minLength={10}
              maxLength={10}
            />
          </InputBox>
          <InputBox>
            <p>地址</p>
            <input type="text" placeholder="聯絡地址" />
          </InputBox>
          <Btn>
            <button>送出</button>
          </Btn>
        </Form>
      </SignupCard>
    </div>
  )
}

const Infoheader = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  background: #8dd9ce;
  text-align: center;
  h5 {
    margin: auto;
    font-weight: 600;
    color: #fff;
  }
`
const SignupCard = styled.div`
  margin: 5rem auto;
  background: #ffffff;
  border-radius: 20px;
  width: 50%;
  max-width: 600px;
  height: fit-content;
  img {
    padding: 30px;
    width: 100%;
    height: 80%;
  }
`
const Form = styled.div`
  flex-direction: column;
  padding: 10px 30px 30px 30px;
  input {
    width: 90%;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 1rem auto;
    width: 20%;
    min-width: 80px;
    padding: 1rem;
    border: 5px #8dd9ce;
    border-radius: 15px;
    background-color: #8dd9ce;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`
const InputBox = styled.div`
  display: flex;
  h6 {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`
export default ActivitySignUp
