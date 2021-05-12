import React from 'react'
import {SearchIconControl,SearchControl} from './SearchElements'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
const Search = (props) => {
    return (
                <SearchControl>
                    <SearchIconControl>
                        <SearchIcon />
                    </SearchIconControl>
                    <InputBase
                        placeholder="Search…"
                        onChange={props.onChange}
                        value={props.value}
                        classes={{
                        input: {
                            
                            padding:"100px",

                        },
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchControl>
    )
}

export default Search
