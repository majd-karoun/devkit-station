import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from "./components/header/Header";
import LinksList from "./components/links-list/LinksList";


function App() {
  const [links, setLinks] = useState([]);
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    async function getResources() {
      const response = await axios.get('https://devkitstation.onrender.com/resources');
      setLinks(response.data);
    }

    getResources();
  }, []);

  return (
    <div className="App">
      <Header links={links} setLinks={setLinks}  setUpdateKey={setUpdateKey}/>
      <LinksList links={links} updateKey={updateKey}/>
    </div>
  );
}

export default App;
