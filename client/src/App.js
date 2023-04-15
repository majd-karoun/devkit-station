import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from "./components/header/Header";
import LinksList from "./components/links-list/LinksList";


function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getResources() {
      const response = await axios.get('http://localhost:5000/resources');
      setLinks(response.data);
    }

    getResources();
  }, []);

  return (
    <div className="App">
      <Header links={links} setLinks={setLinks}/>
      <LinksList links={links}/>
    </div>
  );
}

export default App;
