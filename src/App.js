import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Banner from './components/Banner';
import RecentPosts from './components/RecentPosts';
import Paginate from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <Header />
        <Banner />
        <RecentPosts />
        <Paginate />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
