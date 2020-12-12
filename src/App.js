import React, { useState } from 'react'
import Values from 'values.js'
import { SnackbarProvider } from 'notistack';

import SearchBar from './components/SearchBar';
import ColorList from './components/ColorList';

function App() {
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(Number(weight));
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  const handleOnColorChange = (e) => {
    setColor(e.target.value);
  }

  const handleOnWeightChange = (e) => {
    setWeight(e.target.value);
  }

  return (
    <div className={'color-range-container'}>
      <SearchBar handleOnSubmit={handleOnSubmit} handleOnColorChange={handleOnColorChange} handleOnWeightChange={handleOnWeightChange} error={error}/>
      <SnackbarProvider maxSnack={1} variant={'default'} className={'color-range__snackbar color-range__copy-info'}>
        <ColorList list={list}/>
      </SnackbarProvider>
    </div>
  )
}

export default App