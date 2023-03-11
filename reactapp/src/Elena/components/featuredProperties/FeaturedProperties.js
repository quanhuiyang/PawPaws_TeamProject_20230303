import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="http://localhost:3000/images/Elena_img/hotel1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">台北君悅酒店</span>
        <span className="fpCity">台北市</span>
        <span className="fpPrice"> NTD $9800 起</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>超讚</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="http://localhost:3000/images/Elena_img/hotel15.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">多野樂旅館</span>
        <span className="fpCity">高雄市</span>
        <span className="fpPrice">NTD $7000 起</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>超讚</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="http://localhost:3000/images/Elena_img/hotel3.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">新北新莊凱悅嘉軒酒店</span>
        <span className="fpCity">新北市</span>
        <span className="fpPrice">NTD $5500 起</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>超讚</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">墾丁H會館</span>
        <span className="fpCity">屏東縣</span>
        <span className="fpPrice">NTD $9700 起</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>超讚</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
