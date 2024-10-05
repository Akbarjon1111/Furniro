import "./Home.css"
import BrowseTheRange from "../../pages/browseTheRange/BrowseTheRange" 
import HomeProducts from "../homeProducts/HomeProducts"
import HomeFurniture from "../homeFurniture/HomeFurniture"

const Home = () => {
  return (
    <div className="homee">
      <div className="home">
      <div className="home-cart">
        <h3>New Arrival</h3>
        <h1>Discover Our New Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div className="home-btn">
            <button>BUY NOW</button>
        </div>
      </div>

    </div>
      <BrowseTheRange />
      <HomeProducts />
      <HomeFurniture />
    </div>
  )
}

export default Home
