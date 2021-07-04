import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './Grid.css'

interface IProps{
    content: {
        title: string
        sub: string
        companies: number
        templates: number
        queries: number
        url: string
    }[]
}
  

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      maxWidth: '80vw',
      maxHeight: '100vh',
      backgroundColor: '#1A1836',
      color:'white',
      borderRadius:'10px',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin:'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius:'10px'
    },
  }),
);

const ComplexGrid: React.FC<IProps>=({content})=>{
  const classes = useStyles();

  return (
      <ul>
          {content.map(one =>{
              return (
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                    <Grid container >
                        <Grid item sm container direction="row-reverse">
                        <Grid item xs={12} md ={6}>
                        <img className={classes.img} alt="complex" src={one.url} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" >
                            <Grid item xs>
                                <div className='head'>
                                Get <a style={{color:'purple'}}>insights</a> that help your business grow.
                                </div>
                                <div className='body'>
                                    {one.sub}
                                </div>
                            </Grid>
                            <Grid item>
                                <Grid item xs={12} sm container>
                            <Grid item sm container direction="row" >
                            <Grid item xs={12} sm={4}>
                                <div className='space'>
                                    <div className='number'>{one.companies}K+</div>
                                    <div className='tag'>COMPANIES</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className='space'>
                                    <div className='number'>{one.templates}</div>
                                    <div className='tag'>TEMPLATES</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className='space'>
                                    <div className='number'>{one.queries}M+</div>
                                    <div className='tag'>QUERIES</div>
                                </div>
                            </Grid>
                            </Grid> 
                        </Grid>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </div>
              )
          })}
      </ul>
  );
}
export default ComplexGrid