import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { gridSpacing } from './../../store/constant';
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
    TableRow,
    MenuItem

} from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

//==============================|| SAMPLE PAGE ||==============================//


let tvScriptLoadingPromise;

let Symbols = ["NASDAQ:TSLA","NASDAQ:META","NYSE:C"];

const PlaceHolder1 = () => {
    const onLoadScriptRef = useRef();
    const [Symbol, setSymbol] = useState('NASDAQ:TSLA')

    useEffect(
      () => {
        onLoadScriptRef.current = createWidget;
  
        if (!tvScriptLoadingPromise) {
          tvScriptLoadingPromise = new Promise((resolve) => {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.type = 'text/javascript';
            script.onload = resolve;
  
            document.head.appendChild(script);
          });
        }
  
        tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());
  
        return () => onLoadScriptRef.current = null;
  
        function createWidget() {
          if (document.getElementById('tradingview_9f948') && 'TradingView' in window) {
            new window.TradingView.widget({
              container_id: "tradingview_9f948",
              autosize: true,
              symbol: Symbol,
              interval: "D",
              timezone: "Etc/UTC",
              theme: "dark",
              style: "1",
              locale: "en",
              toolbar_bg: "#f1f3f6",
              enable_publishing: false,
              allow_symbol_change: true,
              watchlist: Symbols,
            });
          }
        }
      },
      []
    );

    return (
        <MainCard title="Chart Widget">
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <MainCard>
                            <div className='tradingview-widget-container' >
                                <div id='tradingview_9f948' style={{width: '100%', height: '70vh'}} />
                                    {/* <div className="tradingview-widget-copyright">
                                        <a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span className="blue-text">AAPL stock chart</span></a> by TradingView
                                    </div> */}
                            </div>
                        </MainCard>
                   </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default PlaceHolder1;