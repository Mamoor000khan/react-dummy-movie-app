import React, { useState, useEffect } from 'react';
import { Search as SearchIcon  } from '@material-ui/icons';
// import { connect } from 'react-redux';
// import { User } from 'store/types';
// import { AppState } from 'store/reducers';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Bookmark as BookmarkIcon } from '@material-ui/icons';
import { AppBar, Toolbar, makeStyles, fade, InputBase, Badge, ButtonBase } from '@material-ui/core';

// type OwnProps = {
//   placeholder: string;
//   searchShows: (value: string) => void;
// }

// type Props = OwnProps & StoreStateProps & RouteComponentProps

const useStyles = makeStyles((theme) => ({
  search:{
    position: 'relative',
    borderRadius: 3,
    backgroundColor: fade(theme.palette.common.white, 0.2),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10
  },
  searchInput: {
    padding: '2px 4px 2px 40px',
    maxWidth:300,
    color:'inherit',
    '& input': {
      paddingTop: 5,
    }
  },
  inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
}));

export default function SearchBar  (props)  {
    const { search, searchIcon, searchInput, inputInput, inputRoot } = useStyles();
    const [searchedText, setSearchedText] = useState('');
    const [enteredValue, setEnteredValue] = useState('');

    const enteredValueChangeHandler = (event)=> {
        setEnteredValue(event.target.value);
        props.InputValue(event.target.value);

    }

    const formSubmitHandler = (event)=> {
        event.preventDefault();
    }
    
    // Sending the searched text to parent when its state gets updated
    // useEffect(() => {
    //   props.searchShows(searchedText);
    // }, [searchedText]);

    const wishlistItemsLength =  () => {
      if(props.user){
        const length = props.user?.wishlist.movie.length + props.user?.wishlist.tv.length;
        return length;
      }
    };

    const onChangeHandler = (e) => {
      setSearchedText(e.target.value);
    };

    return (
        <AppBar
          position="static"
          style={{ marginBottom: 20 }}
        >
            <Toolbar style={{ padding: '0 15px' }}
              variant="dense"
              
            >
                <div className={search} onSubmit={formSubmitHandler}>
                    <div className={searchIcon}>
                        <SearchIcon fontSize="small" />
                    </div>
                    <InputBase
                    //   onChange={onChangeHandler}
                    onChange={enteredValueChangeHandler} value={enteredValue} type="text"
                      margin="dense"
                      
                      placeholder={props.placeholder} // Need to be prop
                      className={searchInput}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                   
                   {/* <InputBase
                            style={{color:'#fff'}}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                             inputProps={{ 'aria-label': 'search' }}
                            onChange={enteredValueChangeHandler} value={enteredValue} type="text"
                        /> */}

                </div>
                <Badge 
                  style={{ marginLeft:'auto', marginRight: 10, cursor:'pointer' }}
                  badgeContent={wishlistItemsLength()}
                  showZero
                  color="secondary"
                >
                    <BookmarkIcon fontSize="small"/>
                </Badge>
        
            </Toolbar>
        </AppBar>
    );
};





