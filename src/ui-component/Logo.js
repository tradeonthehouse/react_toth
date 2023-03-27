import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import logo from './../assets/images/Logo-TOTH.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from './../../assets/images/logo-dark.svg';
 * import logo from './../../assets/images/logo.svg';
 *
 */

//-----------------------|| LOGO SVG ||-----------------------//

const Logo = () => {
    return (
        <img src={logo} alt="toth" width="100" />
    );
};

export default Logo;
