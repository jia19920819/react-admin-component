import React from 'react';
import { ExampleComponent, FilePreviewComponent, Demo } from 'react-admin-component';
import 'react-admin-component/dist/index.css';

const App = () => {
  const sampleData = {
    name: "React Admin Component",
    version: "1.0.0",
    features: ["FilePreview", "FilePreviewComponent"],
    config: {
      theme: "dark",
      responsive: true
    }
  };

  return (
    <div>
      <Demo data={JSON.stringify(sampleData)} />
    </div>
  );
};

export default App;
