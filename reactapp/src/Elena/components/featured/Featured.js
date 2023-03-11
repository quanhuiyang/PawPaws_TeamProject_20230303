import './featured.css'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=台北,台中,高雄'
  )

  return (
    <div className="featured">
      {loading ? (
        'Loading plaease wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="http://localhost:3001/images/Elena_img/city/Taipei.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>台北</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="http://localhost:3001/images/Elena_img/city/Taichung.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>台中</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="http://localhost:3001/images/Elena_img/city/Kaohsiung.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>高雄</h1>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Featured
