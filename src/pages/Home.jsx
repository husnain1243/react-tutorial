import { Advisory } from "../component/Advisory/Advisory";

export const Home = () => {
  return (

    <div className="Home-wrapper">

      <div className="home-banner d-flex flex-column justify-content-center text-center" style={{height:"200px"}}>
          <div className="container">
              <div className="banner-container">
                  <h1>Home</h1>
              </div>
          </div>
      </div>

      <Advisory/>

    </div>

  );
};
