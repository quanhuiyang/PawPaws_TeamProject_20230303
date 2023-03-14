import './Hotel.scss'
import MainphotoHotel from '../Elena/components/mainphotoHotel/MainphotoHotel'
import SearchBar from '../Elena/components/searchBar/SearchBar'
import Featured from '../Elena/components/featured/Featured'
import PropertyList from '../Elena/components/propertyList/PropertyList'
import FeaturedProperties from '../Elena/components/featuredProperties/FeaturedProperties'

function Hotel() {
  return (
    <>
      <MainphotoHotel />
      <SearchBar />
      <div className="hotelConatiner">
        <h1 className="homeTitle">旅遊城市</h1>
        <Featured />
        <h1 className="homeTitle">住宿類型</h1>
        <PropertyList />
        <h1 className="homeTitle">旅客喜愛</h1>
        <FeaturedProperties />
      </div>
    </>
  )
}

export default Hotel
