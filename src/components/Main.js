import react from "react";
import { ReactDOM } from "react";
import "./Allcss.css";
import main1 from "../image/main1.png";
import main2 from "../image/main2.png";
import main4 from "../image/no.png";

const Main = () => {
  return (
    <>
      <div class="landing-page">
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>Flexible plans you’ve Been looking for.</h1>
              <p>Try our Cloud Kitchen now to avail the best OFFER!</p>
              <button>Create a Kitchen</button>

              <p>
                Material icons are delightful, beautifully crafted symbols for
                common actions and items. Download on desktop to use them in
                your digital products for Android, iOS, and web.
              </p>
              <span id="arrow"> Read More →</span>
            </div>

            <div class="image">
              <img src={main4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
