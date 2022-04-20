import React from 'react';
import Typography from '@material-ui/core/Typography';
import classes from './HeaderTop.module.css';

export default function Header(props) {
    // const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.box}> 
                    <Typography variant="h6"  className={classes.title}>
                      {props.text}
                    </Typography>
                </div>
            </div>
        </header>
    );
}