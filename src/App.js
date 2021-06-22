import PostContainer from './containers/PostContainer';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import Footer from './components/Footer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

function App() {
  return (
    <div className="app">
      {/* <CategoryContainer />
      <Footer /> */}
      <RegisterContainer />
    </div>
  );
}

export default App;
