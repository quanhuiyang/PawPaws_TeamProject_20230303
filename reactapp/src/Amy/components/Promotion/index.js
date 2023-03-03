import React from 'react'
import { Box, Slide } from '@mui/material'
import { PromotionsContainer, MessageText } from '../../../styles/Promotion'
import { useState, useEffect, useRef } from 'react'

const messages = [
  '🚗　全 館 免 運！',
  '✨　加 入 會 員　✨',
  '🐱 寵 物 生 活 網 🐶',
]

export default function Promotion() {
  const containerRef = useRef()
  const [messageIndex, setMessageIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000)
    //give it an Id when outside the component can keep its memory
    const intervalId = setInterval(() => {
      //keep recycling
      setMessageIndex((i) => (i + 1) % messages.length)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        //儲存目前的狀態
        container={containerRef.current}
        direction={show ? 'down' : 'up'}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  )
}
