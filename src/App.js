import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import Header from './components/Header';
import ReactLoading from 'react-loading';
import Movie from './components/Movie';
import Title from './components/Title';
import './style/App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=movie&apikey=1451a2e8')
      .then((response) => response.json())
      .then((res) => {
        setMovies(res.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    if (searchValue === '') {
      setErrorMessage('Input field cannot be empty');
      setLoading(false);
    } else {
      setLoading(true);
      setErrorMessage(null);

      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=1451a2e8`)
        .then((response) => response.json())
        .then((res) => {
          if (res.Response === 'True') {
            setMovies(res.Search);
            setLoading(false);
          } else {
            setErrorMessage(res.Error);
            setLoading(false);
          }
        });
    }
  };

  return (
    <>
      <Header text="The Coconut Movie" />
      <div className="container px-4 py-5" id="custom-cards">
        <Row className="mb-2">
          <Col sm={6}>
            <Title text="Find your favorite movie" />
          </Col>
          <Col sm={6}>
            <Search search={search} />
          </Col>
        </Row>
        <div className="border-bottom mt-2"></div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {loading && !errorMessage ? (
            <ReactLoading
              type={'spin'}
              color={'#5c9dfe'}
              height={200}
              width={200}
              className="loadingIndicator"
            />
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, imdbID) => (
              <Movie key={`${imdbID}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
