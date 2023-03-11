import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

function ActivitySignUp() {
  const [activitySign, setActivitySign] = useState([])
  const { activity_id } = useParams()

  useEffect(() => {
    getActivitySign()
  }, [activity_id])
  const getActivitySign = () => {
    const url = `http://localhost:3000/activity/detail/${activity_id}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setActivitySign(rData)
      })
  }
  //送到後端
  const [auser, setAuser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleUserChange = (e) => {
    setAuser({ ...auser, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/activity/participants', auser)
      .then((res) => {
        if (res.data) {
          console.log(res.data)
          setAuser({
            // 清空表單數據
            name: '',
            email: '',
            phone: '',
            address: '',
          })
          handleClick() // 提交成功後顯示提示框
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //彈出
  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: '報名成功!',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <div>
      {activitySign &&
        activitySign.length > 0 &&
        activitySign.map((item) => (
          <SignupCard>
            <Infoheader>
              <h5>參加活動報名表</h5>
            </Infoheader>
            <img
              src={'http://localhost:3001/images/Natalie_img/' + item.picture}
              alt={item.picture}
            />

            <Form>
              <form onSubmit={handleSubmit}>
                <InputBox>
                  <h6>活動名稱</h6>
                  <h6>{item.title}</h6>
                </InputBox>
                <input
                  type="hidden"
                  name="activity_id"
                  value={item.activity_id}
                  onChange={handleUserChange}
                />

                <InputBox>
                  <p>姓名</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="請輸入姓名"
                    defaultValue={auser.name}
                    onChange={handleUserChange}
                  />
                </InputBox>

                <InputBox>
                  <p>信箱</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="請輸入email"
                    defaultValue={auser.email}
                    onChange={handleUserChange}
                  />
                </InputBox>
                <InputBox>
                  <p>手機</p>
                  <input
                    type="text"
                    name="phone"
                    placeholder="請輸入手機號碼"
                    minLength={10}
                    maxLength={10}
                    defaultValue={auser.phone}
                    onChange={handleUserChange}
                  />
                </InputBox>
                <InputBox>
                  <p>地址</p>
                  <input
                    type="text"
                    name="address"
                    placeholder="聯絡地址"
                    defaultValue={auser.address}
                    onChange={handleUserChange}
                  />
                </InputBox>
                <Btn>
                  {/* <Link to={`/activity/detail/${activity_id}`}> */}
                  <button type="submit">送出</button>
                  {/* </Link> */}
                </Btn>
              </form>
            </Form>
          </SignupCard>
        ))}
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
  min-width: 300px;
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
    margin: 0 0 16px 16px;
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
