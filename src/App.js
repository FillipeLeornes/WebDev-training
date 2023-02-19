import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section>
          <h1>Welcome to My Landing Page</h1>
          <p>This is a regular landing page built with React.js.</p>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <p>&copy; My Landing Page 2023</p>
      </footer>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string,
};

export default App;

