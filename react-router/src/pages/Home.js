import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
      <>
        <h3>Home page</h3>
        <p>Home content</p>
        <nav>
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
        </nav>
      </>
    );
  };

  export default Home;