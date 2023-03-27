import React, { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import DeployedStrategies from './DeployedStrategies';
import DashboardPanels from './DashboardPanels';
import PLValue from './PLValue';
import CapitalValue from './CapitalValue';
import PosValue from './PosValue';
import TopFilter from './TopFilter';
import { gridSpacing } from './../../../store/constant';

//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    <TopFilter isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={2} md={6} sm={6} xs={12}>
                    <PLValue isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={2} md={6} sm={6} xs={12}>
                    <CapitalValue isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={2} md={6} sm={6} xs={12}>
                    <PosValue isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <DeployedStrategies isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <DashboardPanels isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
