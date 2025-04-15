// pages/index.tsx
import Head from 'next/head';
import AppBar from '../components/appbar';
import Hero from '../components/hero';
import AboutMe from '../components/aboutme';
import Works from '../components/myworks';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Manish Poudel - Software Facilitator</title>
      </Head>

      {/* AppBar */}
      <AppBar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Works Section */}
      <section id="works">
        <Works />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
