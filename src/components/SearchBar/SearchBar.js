import React, {useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    grow: {
        backgroundColor: '#165595',
        maxWidth: '100%',
        display: 'flex',
        zIndex: '1100',
        boxSizing: 'border-box',
        flexShrink: '0',
        flexDirection: 'column',
        position: 'static',
        marginBottom: '20px',
    },
    toolBar: {
        padding: '0px 15px',
        minHeight: '48px',
        display: 'flex',
        justifyContent:'space-between',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#165595'
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#fff'
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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


export default function SearchBar(props) {
    const classes = useStyles();
    const [enteredValue, setEnteredValue] = useState('');

    const enteredValueChangeHandler = (event)=> {
        setEnteredValue(event.target.value);
        props.InputValue(event.target.value);

    }

    const formSubmitHandler = (event)=> {
        event.preventDefault();
    }

    return (
        <div className={classes.grow} onSubmit={formSubmitHandler}>
            {/* <AppBar position="static" > */}
                <Toolbar className={classes.toolBar}> 
                    <div className={classes.search}>
                        
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            style={{color:'#fff'}}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            // inputProps={{ 'aria-label': 'search' }}
                            onChange={enteredValueChangeHandler} value={enteredValue} type="text"
                        />
                    
                    </div>
                    {/* <div className={classes.grow} /> */}
                    <div className={classes.sectionDesktop}>
                        
                        <IconButton  color="inherit">
                            <Badge  color="secondary">
                                <BookmarkIcon style={{color:'#fff'}}/>
                            </Badge>
                        </IconButton>
                        
                    </div>
                </Toolbar>
            {/* </AppBar> */}
            
        </div>
    );
}