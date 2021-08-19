import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="Search Movie..."
          aria-label="Search Movie..."
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
        <Button variant="primary" onClick={callSearchFunction}>
          Search
        </Button>
      </InputGroup>
    </>
  );
};

export default Search;
