import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Cursos from '../components/Cursos';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Cursos />
      <FAQ />
    </div>
  );
};

export default Home;