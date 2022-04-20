// import React, {useState} from 'react';
// import { alpha, makeStyles } from '@material-ui/core/styles';

// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//     grow: {
//         backgroundColor: '#165595',
//         maxWidth: '100%',
//         display: 'flex',
//         zIndex: '1100',
//         boxSizing: 'border-box',
//         flexShrink: '0',
//         flexDirection: 'column',
//         position: 'static',
//         marginBottom: '20px',
//     },
//     toolBar: {
//         maxWidth:'100%',
//         padding: '0px 15px',
//         minHeight: '48px',
//         display: 'flex',
//         justifyContent:'space-between',
//         position: 'relative',
//         alignItems: 'center',
//         backgroundColor: '#165595'
//     },

//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             // marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color:'#fff'
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
//     sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',
//         },
//     },
//     sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
// }));


// export default function SearchBar(props) {
//     const classes = useStyles();
//     const [enteredValue, setEnteredValue] = useState('');

//     const enteredValueChangeHandler = (event)=> {
//         setEnteredValue(event.target.value);
//         props.InputValue(event.target.value);

//     }

//     const formSubmitHandler = (event)=> {
//         event.preventDefault();
//     }

//     return (
//         <div className={classes.grow} onSubmit={formSubmitHandler}>
//             {/* <AppBar position="static" > */}
//                 <Toolbar className={classes.toolBar}> 
//                     <div className={classes.search}>
                        
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             style={{color:'#fff'}}
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             // inputProps={{ 'aria-label': 'search' }}
//                             onChange={enteredValueChangeHandler} value={enteredValue} type="text"
//                         />
                    
//                     </div>
//                     {/* <div className={classes.grow} /> */}
//                     <div className={classes.sectionDesktop}>
                        
//                         <IconButton  color="inherit">
//                             <Badge  color="secondary">
//                                 <BookmarkIcon style={{color:'#fff'}}/>
//                             </Badge>
//                         </IconButton>
                        
//                     </div>
//                 </Toolbar>
//             {/* </AppBar> */}
            
//         </div>
//     );
// }


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
  }
}));

export default function SearchBar  (props)  {
    const { search, searchIcon, searchInput } = useStyles();

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
                <div className={search}>
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





