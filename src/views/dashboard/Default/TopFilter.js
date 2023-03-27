import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import TotalIncomeCard from '../../../ui-component/cards/Skeleton/TotalIncomeCard';
import { Grid, MenuItem, TextField, Typography, useTheme } from '@material-ui/core';
// assets
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: 'linear-gradient(210.04deg, ' + theme.palette.warning.dark + ' -50.94%, rgba(144, 202, 249, 0) 83.49%)',
            borderRadius: '50%',
            top: '-30px',
            right: '-180px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: 'linear-gradient(140.9deg, ' + theme.palette.warning.dark + ' -14.02%, rgba(144, 202, 249, 0) 70.50%)',
            borderRadius: '50%',
            top: '-160px',
            right: '-130px'
        }
    },
    content: {
        padding: '16px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.dark
    },
    secondary: {
        color: theme.palette.grey[500],
        marginTop: '5px'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    }
}));

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'expiry',
        label: 'Expiry'
    },
];

//-----------------------|| DASHBOARD - TOTAL INCOME LIGHT CARD ||-----------------------//

const TopFilter = ({ isLoading }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('today');
    return (
        <React.Fragment>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <MainCard className={classes.card} contentClass={classes.content}>
                    <TextField
                        id="standard-select-currency"
                        select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        style={{width:200}}>
                            {status.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                </MainCard>
            )}
        </React.Fragment>
    );
};

TopFilter.propTypes = {
    isLoading: PropTypes.bool
};

export default TopFilter;
