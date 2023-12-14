import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { filterMovies } from '@/utils/slices/AllMoviesSlice';

const Dropdown = () => {

  const [genres, setGenres] = React.useState('');

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setGenres(event.target.value);
  };

  const dispatchAction = ()=>{
    dispatch(filterMovies(genres))
  }

  return (
    <div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Genres</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={genres}
          onChange={handleChange}
          // autoWidth
          label="Genres"
        >
          <MenuItem onClick={()=>dispatchAction()} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'All'}>All</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Action'}>Action</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Sci-Fi'}>Sci-Fi</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Adventure'}>Adventure</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Drama'}>Drama</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Animation'}>Animation</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Comedy'}>Comedy</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Family'}>Family</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Fantasy'}>Fantasy</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Thriller'}>Thriller</MenuItem>
          <MenuItem onClick={()=>dispatchAction()} value={'Mystery'}>Mystery</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  )
}

export default Dropdown
