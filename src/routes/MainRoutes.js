import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

const uploadFile = Loadable(lazy(() => import('../views/utilities/uploadFile')));
const BrokersExchanges = Loadable(lazy(() => import('../views/utilities/BrokersExchanges')));
const CreateBroker = Loadable(lazy(() => import('../views/utilities/CreateBroker')));
const EditBroker = Loadable(lazy(() => import('../views/utilities/EditBroker')));
const TradingAlgo = Loadable(lazy(() => import('../views/utilities/TradingAlgo')));
const ProfilePage = Loadable(lazy(() => import('../views/utilities/ProfilePage')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',
                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',
                '/utils/create-strategy',
                '/utils/brokers-and-exchanges',
                '/utils/create-broker',
                '/utils/edit-broker',
                '/utils/trading-algo',
                '/utils/profile-page'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <AuthGuard>
                        <Route path="/dashboard/default" component={DashboardDefault} />
                        <Route path="/utils/util-typography" component={UtilsTypography} />
                        <Route path="/utils/util-color" component={UtilsColor} />
                        <Route path="/utils/util-shadow" component={UtilsShadow} />
                        <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                        <Route path="/icons/material-icons" component={UtilsMaterialIcons} />
                        <Route path="/utils/create-strategy" component={uploadFile} />
                        <Route path="/utils/brokers-and-exchanges" component={BrokersExchanges} />
                        <Route path="/utils/create-broker" component={CreateBroker} />
                        <Route path="/utils/edit-broker" component={EditBroker} />
                        <Route path="/utils/trading-algo" component={TradingAlgo} />
                        <Route path="/utils/profile-page" component={ProfilePage} />
                    </AuthGuard>
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
