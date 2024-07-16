import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import htmlIcon from '../assets/icons8-html-48.png';
import cssIcon from '../assets/icons8-css-48.png';
import jsIcon from '../assets/icons8-javascript-48.png';
import tsIcon from '../assets/icons8-typescript-48.png';
import reactICon from '../assets/icons8-react-30.png';
import reduxIcon from '../assets/icons8-redux-48.png';
import bootstrapIcon from '../assets/icons8-bootstrap-48.png';
import nextJsIcon from '../assets/icons8-next.js-48.png';
import pythonIcon from '../assets/icons8-python-48.png';
import djangoIcon from '../assets/icons8-django-48.png';
import mongodbIcon from '../assets/icons8-mongo-db-48.png';
import githubIcon from '../assets/icons8-git-48.png'
const style = {
    container: {
        height: '100vh',
        backgroundColor: "#111827",
        padding: "2rem",
    },
    textStyle: {
        color: "#edeef0"
    },
    skillHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
    },
    skillStyle: {
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
        alignItems: "center",
        padding: "0.5",
    }
}
export default function Skills() {
    return (
        <div>
            <Box sx={style.container}>
                <Box sx={style.skillHeader}>
                    <Typography variant='h3' sx={style.textStyle}>Skills</Typography>
                    <Typography variant='h5' sx={style.textStyle}>The skills, tools and technology I am really good at</Typography>
                </Box>
                <Grid container spacing={5} my={4}>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={htmlIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}} ></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>HTML</Typography>
                    </Grid>
                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={cssIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>CSS</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={jsIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Javascript</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={tsIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Typescript</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={reactICon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1.5rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>React Js</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={reduxIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Redux</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={bootstrapIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Bootstrap</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={nextJsIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Next Js</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={pythonIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Python</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={djangoIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Django</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={mongodbIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>Mongo DB</Typography>
                    </Grid>

                    <Grid item sx={style.skillStyle} xs={2}>
                        <Box>
                            <img src={githubIcon} alt='' style={{boxShadow:"1px 1px 10px",padding:"1rem",borderRadius:"50%"}}></img>
                        </Box>
                        <Typography sx={style.textStyle} fontWeight={'bold'}>GIT</Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
