import PostContainer from './containers/PostContainer';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <CategoryContainer />
      <Footer />
    </div>
  );
}

export default App;
