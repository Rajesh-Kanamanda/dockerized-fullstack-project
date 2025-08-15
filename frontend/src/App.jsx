import React from 'react';

export default function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://192.168.199.128:8090/api')
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return (
    <div>
      <h1>Frontend App</h1>
      <p>{data || 'Loading...'}</p>
    </div>
  );
}

