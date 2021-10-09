import { AppBar, TextField, Toolbar } from '@material-ui/core';
import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';



const Search = () => {
    const [filter, setFilter] = useState('');

    const handlerSearchChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <div>
                        <SearchIcon />
                        <TextField onChange={handlerSearchChange} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Search;