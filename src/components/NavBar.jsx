import { Box, Button, Typography } from '@mui/material'
import React from 'react'


const style = {
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0.3rem",
        backgroundColor: "#030712",
    },
    heading: {
        color: "#edeef0",
    },
    button: {
        color: "#edeef0",
        '&:hover': {
            backgroundColor: 'orange',
            color: 'white',
        },
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent:"space-between"

    },
    downloadButton:{
        backgroundColor:"orange",
        borderRadius:"0.5rem",
        '&:hover':{
            backgroundColor:"orange",
            borderRadius:"0.5rem",
            border:"3px solid white",
            boxShadow:"1px 1px  black"

        }
    }
}
export default function NavBar() {
    return (
        <div>
            <Box sx={style.nav}>
                <Box >
                    <Typography variant='h4' sx={style.heading}>{"<DS />"}</Typography>
                </Box>
                <Box sx={style.buttonContainer} width={'50%'}>
                    <Box>
                        <Button variant='text' size='small' sx={style.button}>About</Button>
                        <Button variant='text' size='small' sx={style.button}>Skills</Button>
                        <Button variant='text' size='small' sx={style.button}>Work</Button>
                        <Button variant='text' size='small' sx={style.button}>Contact</Button>
                    </Box>
                    <Box>
                        <Button variant='contained' size='small' sx={style.downloadButton}>Download CV</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
