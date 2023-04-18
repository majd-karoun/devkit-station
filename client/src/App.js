import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from "./components/header/Header";
import LinksList from "./components/links-list/LinksList";


function App() {
  const [links, setLinks] = useState([]);
  const [updateKey, setUpdateKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getResources() {
      setIsLoading(true);
      try {
        const response = await axios.get('https://devkitstation.onrender.com/resources');
        setLinks(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    getResources();
  }, []);

  return (
    <div className="App">
      <Header links={links} setLinks={setLinks}  setUpdateKey={setUpdateKey}/>
      <LinksList links={links} updateKey={updateKey} isLoading={isLoading}/>
      
    </div>
  );
}

export default App;
