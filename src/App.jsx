import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
};

export default App;
