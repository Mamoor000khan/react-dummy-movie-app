import React from 'react';
import { CircularProgress, Container, makeStyles } from '@material-ui/core';
// import { CircleLoader } from 'react-spinners';

// const Props = {
//     fullHeight: St;
// };

const useStyles = makeStyles({
    loaderContainer: (Props) => ({
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height:  '100vh  38vh',
    }),
    loader: {
        color: '#fff',

    }
});

 function CircleLoader (props)  {
    const { loader, loaderContainer } = useStyles(props);
    return (
        <Container className={loaderContainer}>
            <CircularProgress className={loader}
              size={25}
            />
        </Container>
    );
};

// CircularLoader.defaultProps = {
//     fullHeight: false,
// };

export default CircleLoader;