import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useEffect, useState } from 'react';

function App() {
  const [datas, setData] = useState([])
  const [error, setError] = useState()
  const [inputText, setInputText] = useState()

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = '/api/gifs'
      try {
        const [data, error] = await handleFetch(API_URL, { inputText })
        if (data) setData(data.data)
      } catch (error) {
        console.log(`This is your error: ${error.message}`)
        if (error) setError(error.message)
      }
    };
    doFetch();
  }, [])
  console.log(datas)
  const handleClick = async (event) => {
    event.preventDefault()
    const API_URL = '/api/searc'
    const [datas, error] = await handleFetch(API_URL)
    if (datas.data) setData(datas.data)
    if (error) setError(error)
  }

  if (error) return <p>{error.message}</p>
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setInputText={setInputText} handleClick={handleClick} />
        <br />
        <GifContainer datas={datas} />
      </div>
    </div>
  );
}

export default App;