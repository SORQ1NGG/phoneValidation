import React from 'react';
import Form from './components/Form/Form'
import VisibleTelephoneList from './containers/Table'

function App() {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '100px' }}>
        <Form />
        <VisibleTelephoneList />
      </div>
  );
}

export default App;
