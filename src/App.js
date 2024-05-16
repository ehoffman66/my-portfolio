import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer'; // Uncomment when Footer is created
// Import additional sections as you create them
// import About from './sections/About';
// import Portfolio from './sections/Portfolio';
// import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Add a placeholder for the About section */}
        <section id="about" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                About Me
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Information about you will go here. You can include your background, skills, interests, and what you're passionate about.
              </p>
            </div>
          </div>
        </section>

        {/* Add a placeholder for the Portfolio section */}
        <section id="portfolio" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                My Portfolio
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                A selection of my projects will be showcased here. Click on any project to see more details about it.
              </p>
            </div>
          </div>
        </section>

        {/* Add a placeholder for the Contact section */}
        <section id="contact" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Interested in working together? Feel free to reach out to me.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Uncomment when Footer is created */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
