import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Bar, Form, Button } from './styles';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/results/${value}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Bar value={value} onChange={({ target }) => setValue(target.value)} />
      <Button>
        <MdSearch size={25} color="#985FF3" />
      </Button>
    </Form>
  );
};

export default SearchBar;
