import { useState } from 'react';
import { Input } from './components';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="p-10">
      <Input
        handleOnChange={setName}
        id="companyName"
        placeholder="Company Name"
        title="Company Name"
        value={name}
      />
    </div>
  );
}

export default App;
