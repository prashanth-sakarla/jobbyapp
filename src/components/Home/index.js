import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-text-content">
      <h1 className="home-heading">Find The Jobs That Fits Your Life</h1>
      <p className="home-text">
        Millions of people searching for jobs,salary information,company
        reviews.Find the job that fits your ability and potential
      </p>
      <button type="button" className="find-button">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
