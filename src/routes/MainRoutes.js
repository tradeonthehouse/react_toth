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
const ChangePassword = Loadable(lazy(() => import('../views/utilities/ChangePassword')));
const AlgoInfo = Loadable(lazy(() => import('../views/utilities/AlgoInfo')));
const PlaceHolder1 = Loadable(lazy(() => import('../views/utilities/PlaceHolder1')));
const PlaceHolder2 = Loadable(lazy(() => import('../views/utilities/PlaceHolder2')));
const PlaceHolder3 = Loadable(lazy(() => import('../views/utilities/PlaceHolder3')));
const Invoices = Loadable(lazy(() => import('../views/utilities/Invoices')));
const Notifications = Loadable(lazy(() => import('../views/utilities/Notifications')));
const HelpSupport = Loadable(lazy(() => import('../views/utilities/HelpSupport')));
const Subscriptions = Loadable(lazy(() => import('../views/utilities/Subscriptions')));
// const Landing = Loadable(lazy(() => import('../views/pages/authentication/Landing/index')));
// const Contact = Loadable(lazy(() => import('../views/pages/authentication/Landing/Contact')));

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
                '/utils/profile-page',
                '/utils/change-password',
                '/utils/algo-info',
                '/utils/place-holder1',
                '/utils/place-holder2',
                '/utils/place-holder3',
                '/utils/invoices',
                '/utils/notifications',
                '/utils/help-support',
                '/utils/subscriptions',
                // '/home',
                // '/contact'
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
                        <Route path="/utils/change-password" component={ChangePassword} />
                        <Route path="/utils/algo-info" component={AlgoInfo} />
                        <Route path="/utils/place-holder1" component={PlaceHolder1} />
                        <Route path="/utils/place-holder2" component={PlaceHolder2} />
                        <Route path="/utils/place-holder3" component={PlaceHolder3} />
                        <Route path="/utils/invoices" component={Invoices} />
                        <Route path="/utils/notifications" component={Notifications} />
                        <Route path="/utils/help-support" component={HelpSupport} />
                        <Route path="/utils/subscriptions" component={Subscriptions} />
                        {/* <Route path="/home" component={Landing} />
                        <Route path="/contact" component={Contact} /> */}
                    </AuthGuard>
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
