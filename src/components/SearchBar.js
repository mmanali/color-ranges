import React from 'react'
import { AppBar, Toolbar, Typography, TextField, Button} from '@material-ui/core';

function SearchBar({handleOnSubmit, handleOnColorChange, handleOnWeightChange, error}) {
  return (
    <AppBar className={'search-bar'} position="static">
      <Toolbar className={'search-bar__toolbar search-color__toolbar'}>
        <Typography className={'search-bar__title'} variant="h4" noWrap>
          Color Range
        </Typography>
        <form className={'search-form'} onSubmit={handleOnSubmit}>
          <div className={'search-form-inputs'}>
            <TextField
              className={'search-form__input search-form__color-input'}
              placeholder="Enter a base color"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleOnColorChange}
              error={error ? true : false}
              helperText={error && 'Errorororo'}
              type="search"
              fullWidth={true}
            />

            <TextField
              className={'search-form__input search-form__weight-input'}
              placeholder="Enter an offset number"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleOnWeightChange}
              error={error ? true : false}
              type="search"
              fullWidth={true}
            />
          </div>

          <Button className={'search-form__button search-form__submit-input'} type="submit" variant="outlined">
            Search
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  )
}

export default SearchBar;