import React from 'react';
import BioGenerator from './components/BioGenerator';
import React from 'react';
import { root } from '.';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <BioGenerator />
      </div>
    </div>
  );
}

export default App;
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
