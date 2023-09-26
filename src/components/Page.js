import React from "react";
import "./Allcss.css";
import img1 from "../image/one.png";
import img2 from "../image/menu.png";
import img3 from "../image/2.png";
import img4 from "../image/ice cream.png";
import img5 from "../image/3.png";
import img6 from "../image/coo.png";
import img7 from "../image/4.png";
import img8 from "../image/mcoo.png";
import img9 from "../image/v.png";
import img10 from "../image/man.png";
import img11 from "../image/woman.png";
import img12 from "../image/knife.png";
import img13 from "../image/map.png";

const Page = () => {
  return (
    <>
      <div className="conatainer">
        <span>
          <img src={img1} className="imagee" />
          <span className="menu">Menu Recommedation</span>
        </span>
      </div>
      <section>
        <p className="para">
          • You might have had an interest in opening a cloud kitchen in a
          particular city-state or locality, but you might be unaware of the
          menu or the favorite or popular dishes, do not worry, we are here for
          you.
        </p>
        <p className="para">
          {" "}
          • We provide you with the popular dishes categories along with the
          links of the dishes so that it becomes easy for the cloud kitchen
          owner to occupy and getting to know the popular food categories in
          that particular locality
        </p>
        <p className="para">
          {" "}
          • We also provide the ratings of the prices of the same dishes in
          various restaurants which makes the user fix their own pricing and the
          category of the food.{" "}
        </p>

        <p className="para">
          {" "}
          • We also provide the list of combos and thali recommendations and the
          single dishes categories to the user.
        </p>
        <p className="para">
          {" "}
          • For example, if you’re opening a cloud kitchen in South India on the
          state of Tamil Nadu, then we will recommend you with all the popular
          dishes along with the links of the dishes
        </p>
      </section>
      <div div className="hero">
        <ul
          class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
          id="pillNav2"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active rounded-5"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Menu1
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Menu2
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Menu3
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Menu4
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Menu5
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Menu6
            </button>
          </li>
        </ul>
      </div>
      <div className="hero2">
        <div id="sequence" class="seq">
          <ul class="seq-canvas">
            <li class="step1 valign seq-in">
              <div class="vcenter">
                <div class="image-container">
                  <img
                    data-seq
                    class="feature"
                    src={img2}
                    alt="error"
                    width="400"
                    height="350"
                  />
                </div>
                <div class="text-container">
                  <h5 data-seq class="title">
                    MENU 1
                  </h5>
                  <p data-seq class="sub">
                    When a you want to open a restaurant in a particular place
                    and not know the popular dishes of those particular state/
                    city/locality, our program fetches the data that will tell
                    us all the popular food categories along with the link for
                    the dishes. We also provide the ratings and the prices of
                    the same dishes in various restaurants that makes the user
                    to fix their own pricing and the categories of the food. We
                    also provide you with the comprising of Combo’s and thali
                    recommendation, and the single dishes categories.When a you
                    want to open a restaurant in a particular place and not know
                    the popular dishes of those particular state/ city/locality,
                    our program fetches the data that will tell us all the
                    popular food categories along with the link for the dishes.
                    We also provide the ratings and the prices of the same
                    dishes in various restaurants that makes the user to fix
                    their own pricing and the categories of the food. We also
                    provide you with the comprising of Combo’s and thali
                    recommendation, and the single dishes categories.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="conatainer">
        <span>
          <img src={img3} className="imagee" />
          <span className="menu">Where to Setup your Kitchen</span>
        </span>
      </div>
      <section>
        <p className="para">
          • If you want to open a cloud kitchen but are unaware of where to open
          the cloud kitchen then do not worry, Naaniz is there for you!!!
        </p>
        <p className="para">
          {" "}
          • We would recommend you the most famous places where the cloud
          kitchen actually works.
        </p>
        <p className="para">
          {" "}
          • We will also give you a list of locations (i:e) the popular
          locations in the country so that the cloud kitchen works successfully
          at its best..{" "}
        </p>

        <p className="para">
          {" "}
          • Along with these we also recommend you even the areas and cities
          along with the accurate locations for opening up your cloud kitchen,
          so that you can select your best choice and run your kitchen in that
          popular city with great income and popularity.
        </p>
        <p className="para">
          {" "}
          • For example, if you’re opening a cloud kitchen in South India on the
          state of Tamil Nadu, then we will recommend you with all the popular
          dishes along with the links of the dishes
        </p>
        <span>
          <img src={img4} className="ima" />
        </span>
      </section>

      <div className="conatainer">
        <span>
          <img src={img5} className="imagee" />
          <span className="menu">Your Competitors</span>
        </span>
      </div>
      <section>
        <p className="para">
          • Without a good chef, no kitchen can make success.
        </p>
        <p className="para">
          {" "}
          • A great chef is a stepping stone for the cloud kitchen.
        </p>
        <p className="para">
          {" "}
          • Hence if you are opening a cloud kitchen and you are not able to
          hire a chef, then do not worry, we are here.{" "}
        </p>

        <p className="para">
          {" "}
          • We at Naaniz provide you with the chefs who are well versed in the
          dishes of that state /city for you.
        </p>
        <p className="para">
          {" "}
          • You need not search and waste your time in it, we provide services
          of searching the best chefs for your cloud kitchen.
        </p>
        <p className="para">
          {" "}
          • For an example, if you are opening a cloud kitchen in Indore, then
          we will recommend you with the best chefs who are experienced with all
          the dishes in that city as well as in the state.
        </p>
        <span>
          <img src={img6} className="imaa" />
        </span>
      </section>
      <div className="conatainer">
        <span>
          <img src={img7} className="imagee" />
          <span className="menu">Your Competitors</span>
        </span>
      </div>
      <section>
        <p className="para">
          • Without a good chef, no kitchen can make success.
        </p>
        <p className="para">
          {" "}
          • A great chef is a stepping stone for the cloud kitchen.
        </p>
        <p className="para">
          {" "}
          • Hence if you are opening a cloud kitchen and you are not able to
          hire a chef, then do not worry, we are here.{" "}
        </p>

        <p className="para">
          {" "}
          • We at Naaniz provide you with the chefs who are well versed in the
          dishes of that state /city for you.
        </p>
        <p className="para">
          {" "}
          • You need not search and waste your time in it, we provide services
          of searching the best chefs for your cloud kitchen.
        </p>
        <p className="para">
          {" "}
          • For an example, if you are opening a cloud kitchen in Indore, then
          we will recommend you with the best chefs who are experienced with all
          the dishes in that city as well as in the state.
        </p>
        <span>
          <img src={img8} className="imaa" />
        </span>
      </section>
      <div className="conatainer-fluid">
        <div class="d-grid  col-6 mx-auto">
          <button  id="button" class="btn btn-primary" type="button">
            “ Ready to Eat “
          </button>
          <div className="lav">
            <img src={img9} className="im" />
            <h2 className="chef">(No chef, We are here for you!)</h2>
            <img src={img10} className="imd" />
            <span>
              <h4 className="ready">Ready to eat, Solution is here!</h4>
            </span>
            <span className="saving">
              Time saving stuff, with Bigger versatile menu with
            </span>
            <br></br>
            <div className="list">
              <span>⚙There is no need of Chef.</span>
              <br></br>
              <span> ⚙ Don’t want to buy online , use Ready to Eat Kitchen.</span>
              <br></br>
              <span> ⚙low cost, good margin</span>
            </div>

            <img src={img11} className="imdd" />
            <img src={img12} className="ig" />
          </div>
        </div>
      </div>
      <div className="container">
      <div class="d-grid  col-6 mx-auto">
          <button  id ="button"class="btn btn-primary" type="button">
          “ Our Gallery “
          </button>
</div>

        <div className="map"></div>
        <img src={img13} className="imdd" />
        <div className="list2">
        <span>⚙ We are currently serving 15 k Users</span>
        <br />
        <span>⚙ We have total of 20k Userbase</span>
        <br />
        <span>⚙ We have 25 centers in India</span>
        <br />
        <span>⚙ With team of 65 member</span>
        </div>
      </div>
    </>
  );
};

export default Page;
