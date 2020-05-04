import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({data}) => {

    if (!data) {
        return "loading"
    }
    return(
        <div align="center">
            <Grid container spacing={3} justify="center" className={cx(styles.container)}>
                <Grid item xs={5} md={2} component={Card} justify="center" className={cx(styles.confirmed, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h3" component="h1">
                            <CountUp
                                start={0}
                                end={data.confirmed}
                                duration={2.5}
                                separator=","
                            />
                            </Typography>
                        <Typography variant="body2" component="p">
                            Number of Confirmed cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={5} md={2} component={Card} className={cx(styles.active, styles.card)} >
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h3" component="h2">
                            <CountUp
                                start={0}
                                end={data.active}
                                duration={2.5}
                                separator=","
                            /></Typography>
                        <Typography variant="body2" component="p">
                            Number of Active cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={5} md={2} component={Card} className={cx(styles.recovered, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h3" component="h2">
                            <CountUp
                                start={0}
                                end={data.recovered}
                                duration={2.5}
                                separator=","
                            />
                            </Typography>
                        <Typography variant="body2" component="p">
                            Number of Recovered Cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={5} md={2} component={Card} className={cx(styles.deaths, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h3" component="h2">
                            <CountUp
                                start={0}
                                end={data.deceased}
                                duration={2.5}
                                separator=","
                            /></Typography>
                        <Typography variant="body2" component="p">
                            Number of Death cases
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;