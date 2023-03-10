import React, { useState } from 'react'
import Acard from './Acard'

function AcardContainer(props) {
  const [collectedItems, setCollectedItems] = useState([])

  const handleCollect = (item) => {
    if (!collectedItems.includes(item)) {
      setCollectedItems([...collectedItems, item])
      alert(`已收藏活動ID為 ${item.activity_id} 的項目`)
    } else {
      alert(`已取消收藏活動ID為 ${item.activity_id} `)
    }
  }

  return (
    <div>
      <Acard activity={props.activity} onCollect={handleCollect} />
    </div>
  )
}

export default AcardContainer
