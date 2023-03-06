import { useState } from 'react'
import myCity from './data/cities'
import districts from './data/districts'

const useMyZipCode = () => {
  const [city, setCity] = useState(myCity[0])
  const [district, setDistrict] = useState(districts[city][0])

  const handleCityChange = async (value) => {
    await setCity(value)
    await setDistrict(districts[value][0])
  }

  const handleDistrictChange = async (value) => {
    await setDistrict(value)
  }

  return {
    city,
    district,
    handleCityChange,
    handleDistrictChange,
  }
}

export { myCity, districts, useMyZipCode }
