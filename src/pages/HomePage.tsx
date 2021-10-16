import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DataTable from 'components/DataTable';
import Input from 'components/Input';
import Select from 'components/Select';
import { COMPLETED_OPTIONS } from 'constant';

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function HomePage() {
  const [searchedText, setSearchedText] = useState('');
  const [completed, setCompleted] = useState('');

  useEffect(() => {
    console.log(`searchedText`, searchedText);
  }, [searchedText]);
  useEffect(() => {
    console.log(`completed`, completed);
  }, [completed]);

  return (
    <div>
      <header>
        <h4>Todos</h4>
      </header>
      <main>
        <Features>
          <Input
            name="search"
            label="Search"
            type="text"
            placeholder="keyword..."
            value={searchedText}
            onChange={setSearchedText}
          />
          <Select
            name="completed"
            label="Completed"
            options={COMPLETED_OPTIONS}
            value={completed}
            onChange={setCompleted}
          />
        </Features>
        <DataTable />
      </main>
    </div>
  );
}

export default HomePage;
