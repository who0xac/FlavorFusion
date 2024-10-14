import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ImageSlider from "../../components/slider/slider"; // Corrected the case for Slider component
import "../../assets/css/home.css";

// Import images
import gordonRamsayImage from "../../assets/images/gordon-ramsay.jpg";
import juliaChildImage from "../../assets/images/julia-child.jpg";
import sanjeevKapoorImage from "../../assets/images/sanjeev-kapoor.jpg";

const chefs = [
  {
    name: "Gordon Ramsay",
    image: gordonRamsayImage, // Use imported image
    quote:
      "Cooking is about passion, so it may look slightly temperamental in a way that it's too assertive to the naked eye.",
  },
  {
    name: "Julia Child",
    image: juliaChildImage, // Use imported image
    quote:
      "The only real stumbling block is fear of failure. In cooking you've got to have a what-the-hell attitude.",
  },
  {
    name: "Sanjeev Kapoor",
    image: sanjeevKapoorImage, // Use imported image
    quote:
      "The simplicity of Indian food lies in the beauty of the spices, and how each one elevates the flavor.",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="welcome-section">
          <h1>Welcome to FlavorFusion</h1>
          <p>
            Embark on a culinary adventure and discover delicious recipes from
            around the globe, all at your fingertips.
          </p>
          <ImageSlider />
        </section>

        {/* Chef Quotes Section */}
        <section className="chef-quotes-section">
          <h2>Inspiring Quotes from Renowned Chefs</h2>
          <div className="chefs-grid">
            {chefs.map((chef, index) => (
              <div className="chef-card" key={index}>
                <img src={chef.image} alt={chef.name} className="chef-image" />
                <h3>{chef.name}</h3>
                <p className="chef-quote">"{chef.quote}"</p>
              </div>
            ))}
          </div>
        </section>
        <section className="trending-recipes">
          <div className="overlay">
            <h2>Discover latest trending recipes</h2>
            <p>Thousands of recipes are waiting to be explored.</p>
            <a href="/recipes" className="cta-button">
              View all Recipes
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
