import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
      fontFamily:'BubblegumSans'
    },
    paper: {
      maxWidth: '60vw',
      maxHeight: '100vh',
      backgroundColor: '#1A1836',
      color:'white',
      borderRadius:'10px'
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
                        <Grid item xs={12} sm ={6}>
                        <img className={classes.img} alt="complex" src={one.url} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" >
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">
                                    {one.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                               {one.sub}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid item xs={12} sm container>
                            <Grid item sm container direction="row" >
                            <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1">
                                <Typography variant="h5" color="textPrimary" component="p">
                                <b>{one.companies}K+</b>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                COMAPNIES
                                </Typography>
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1">
                                <Typography variant="h5" color="textPrimary" component="p">
                                <b>{one.templates}</b>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                TEMPLATES
                                </Typography>
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1">
                                <Typography variant="h5" color="textPrimary" component="p">
                                <b>{one.queries}M+</b>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                QUERIES
                                </Typography>
                            </Typography>
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