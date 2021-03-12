import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles }  from '@material-ui/core/styles'


function MyButton(params) {

    const useStyles = makeStyles((theme) => ({
        app: {
            backgroundColor: params.backgroundColor,
            margin: theme.spacing(1),
            width: "20%",
            height: "70px",
            fontSize: "30px",
            '&:hover': {
                backgroundColor: "#00FFFF"
            }
        }
    }))
    
    const classes = useStyles();

    return (
        <Button variant="contained" className={classes.app} onClick={params.doClick} data-num={params.children}>
            {params.children}
        </Button>
    )
}

export default MyButton;