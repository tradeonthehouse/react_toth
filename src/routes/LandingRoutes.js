import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import GuestGuard from './../utils/route-guard/GuestGuard';
import MinimalLayout from './../layout/MinimalLayout';
import NavMotion from './../layout/NavMotion';
import Loadable from '../ui-component/Loadable';

// Landing routing
const Landing = Loadable(lazy(() => import('../views/pages/authentication/Landing')));
const Strategies = Loadable(lazy(() => import('../views/pages/authentication/Landing/Strategies')));
const Contact = Loadable(lazy(() => import('../views/pages/authentication/Landing/Contact')));
const StrategyInfo = Loadable(lazy(() => import('../views/pages/authentication/Landing/StrategyInfo')));

//-----------------------|| AUTH ROUTING ||-----------------------//

const LandingRoutes = () => {
    const location = useLocation();

    return (
        <Route path={['/home', '/strategies', '/contact', '/strategy-info']}>
            <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                    <NavMotion>
                        <GuestGuard>
                            <Route path="/strategies" component={Strategies} />
                            <Route path="/home" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/strategy-info" component={StrategyInfo} />
                        </GuestGuard>
                    </NavMotion>
                </Switch>
            </MinimalLayout>
        </Route>
    );
};

export default LandingRoutes;
