import { useState } from 'react';

function StateComp() {
  const [test, setTest] = useState('');
  const handleChange = (e) => {
    setTest(e.target.value);
  };

  return (
    <div className="text-center mt-20 font-bold text-4xl">
      <input value={test} placeholder="vrd perera" onChange={handleChange} />
    </div>
  );
}

export default StateComp;
