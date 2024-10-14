import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../assets/css/about.css"; 
const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="about-main">
        <section className="about-banner">
          <div className="about-overlay">
            <h1>About Us</h1>
          </div>
        </section>

        {/* About Us Content */}
        <section className="about-content-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              At FlavorFusion, our mission is to celebrate the art of cooking by
              making it accessible to food lovers from all corners of the world.
              We believe in the joy of creating delicious meals at home and the
              power of food to bring people together. Whether you're a novice
              cook or a seasoned chef, FlavorFusion provides a platform to
              discover and experiment with an extensive collection of recipes.
            </p>

            <h2>Why FlavorFusion?</h2>
            <p>
              What makes us stand out? We carefully curate recipes that are not
              just delicious but also achievable for the home cook. We test
              every recipe, ensuring that anyone can follow along with clear
              instructions and accessible ingredients. From traditional recipes
              that have been passed down through generations to modern culinary
              innovations, FlavorFusion celebrates food in all its diversity.
            </p>

            <h2>Our Story</h2>
            <p>
              FlavorFusion was born out of a love for food and a desire to build
              a community where culinary exploration is encouraged. What started
              as a humble recipe blog has grown into a vibrant platform that
              welcomes thousands of home cooks and food enthusiasts. We are
              passionate about what we do, and we are constantly working to
              provide our community with new recipes, cooking tips, and insights
              into global cuisine.
            </p>

            <h2>Our Values</h2>
            <p>
              We are driven by three core values: creativity, quality, and
              inclusivity. We believe that food is an expression of culture,
              art, and identity. That’s why we strive to offer recipes from all
              around the world, encouraging our community to experience the
              flavors of different cultures. We are committed to creating a
              space where everyone can find something that resonates with their
              culinary style and preferences.
            </p>

            <h2>Our Vision</h2>
            <p>
              We envision FlavorFusion as more than just a recipe website; it's
              a destination where food enthusiasts can share their experiences,
              connect with others, and continue to learn and grow in the
              kitchen. As we look to the future, we aim to expand our platform
              with more interactive features, videos, and community-driven
              content, ensuring that FlavorFusion remains a trusted source of
              inspiration and learning for cooks of all levels.
            </p>

            <h2>Join Our Community</h2>
            <p>
              We invite you to embark on a culinary journey with us. Whether
              you're searching for your next favorite recipe or looking to
              explore a new cuisine, FlavorFusion is here to guide you. Join our
              community, share your cooking experiences, and be part of a
              movement that celebrates the beauty of food.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
