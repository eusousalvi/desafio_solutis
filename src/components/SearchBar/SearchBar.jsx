import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Bar, Form, Button } from './styles';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const mobile = useSelector((state) => state.mobile);
  const [value, setValue] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/results/${value}`);
    setValue('');
  }

  return (
    <Form onSubmit={handleSubmit} mobile={mobile}>
      <Bar
        required
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <Button>
        <MdSearch size={25} color="#985FF3" />
      </Button>
    </Form>
  );
};

export default SearchBar;
