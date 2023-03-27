import React, { useState } from 'react';
import axios from 'axios';

import configData from '../../config';

// material-ui
import {
    Button,
    Typography,
    Grid,
    TextField,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow

} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

//==============================|| SAMPLE PAGE ||==============================//

const useStyles = makeStyles((theme) => ({
    cardAction: {
        padding: '10px',
        paddingTop: 0,
        justifyContent: 'center'
    },
    primaryLight: {
        color: theme.palette.primary[200],
        cursor: 'pointer'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    successDark: {
        color: theme.palette.success.dark
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    }
}));

  function createData(Stock_Symbol, LTP, LPT_Date, Sell_Initiate,Sell_Target,Buy_Initiate,Buy_Target) {
    return { Stock_Symbol, LTP, LPT_Date, Sell_Initiate,Sell_Target,Buy_Initiate,Buy_Target };
  }

  const columns = [
    { id: 'Stock_Symbol', label: 'Stock_Symbol', minWidth: 120,  },
    { id: 'LTP', label: 'LTP', minWidth: 120,  },
    { id: 'LPT_Date', label: 'LPT_Date', minWidth: 120, },
    { id: 'Sell_Initiate', label: 'Sell_Initiate', minWidth: 120, },
    { id: 'Sell_Target', label: 'Sell_Target', minWidth: 120, },
    { id: 'Buy_Initiate', label: 'Buy_Initiate', minWidth: 120, },
    { id: 'Buy_Target', label: 'Buy_Target', minWidth: 120, },
  ];
  
  const rows = [
    createData('AAP', '20221223', '20221223', '22.23', '22.23', '22.23', '22.23'),
    createData('BAP', '20221223', '20221223', '22.23', '22.23', '22.23', '22.23'),
    createData('CAP', '20221223', '20221223', '22.23', '22.23', '22.23', '22.23'),
  ];

const UploadFile = () => {
    const classes = useStyles();
    const [resFlag, setResFlag] = useState(false);
    const [file, setFile] = useState(0);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleFileUpload = (event) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
        console.log(file);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('excel', file);

        try {
            const response = await axios.post(configData.API_SERVER + 'users/uploadmonthlymodel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.msg);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MainCard title="Upload File">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField type="file" onChange={handleFileUpload} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handleSubmit} variant="contained" component="label" style={{marginTop:5}}>
                        Upload
                    </Button>
                </Grid>
            </Grid>
            <Divider style={{marginTop:25}} className={classes.divider} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography style={{marginTop:5,marginLeft:5}} variant="h5">File Response :</Typography>
                    <Paper sx={{ width: '100%', overflow: 'hidden', border:1,marginTop:1 }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                            </TableCell>
                                        );
                                        })}
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UploadFile;
