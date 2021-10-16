import React from 'react';

import DataTable from 'components/DataTable';

function HomePage() {
  return (
    <div>
      <header>
        <h4>Todos</h4>
      </header>
      <main>
        <DataTable />
      </main>
    </div>
  );
}

export default HomePage;
