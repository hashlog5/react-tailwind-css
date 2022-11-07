import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
};

export default App;
