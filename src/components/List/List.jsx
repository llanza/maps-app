import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places])

    return(
        <div className={classes.container}>
            <Typography variant="h4" className={classes.title}>Restaurants around you: </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                        <Grid container spacing={3} className={classes.list}>
                            {places?.map((place, i) => (
                                <Grid item key={i} xs={12}>
                                    <PlaceDetails 
                                        place={place}
                                        selected={Number(childClicked) === i}
                                        refProp={elRefs[i]} 
                                    />
                                </Grid>
                            ))}
                        </Grid>              
                )}
         </div>
    );
}

export default List;