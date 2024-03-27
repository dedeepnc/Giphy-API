import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <div id="hero-section">
        <h1>GIPHYy 🖼</h1>
        <p>Feel the rhythm, see the GIFs, let the animations set you free ✨</p>
        <Link to="/search" className="homeBtn">Search</Link>
      </div>
    </Container>
  )
}

export default Home