import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import userPhoto from '../assets/photo_2024-07-16_05-09-17.jpg'
const style = {
    container: {
        height: "100vh",
        backgroundColor: "#030712",
        display: "flex",
        flexDirection: "row",

    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "3rem"
    },
    heading: {
        color: "#edeef0",
    },
    paragraph: {
        color: "#edeef0",
        textAlign: "justify",
    },
    locationContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center"
    },
    activeDot: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "green",
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
    },
    photoStyle:{
        boxShadow:"1px 1px 10px white"
    }

}
export default function About() {
    return (
        <div>
            <Box sx={style.container}>
                <Box width={'60%'} sx={style.textContainer} my={6}>
                    <Typography variant='h2' sx={style.heading}>Hi, I'm Divyanshu</Typography>
                    <Box width={'90%'}>
                        <Typography variant='p' sx={style.paragraph}>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</Typography>
                    </Box>
                    <Box>

                    </Box>
                    <Box sx={style.locationContainer}>
                        <LocationOnOutlinedIcon style={{ color: "white" }} />
                        <Typography sx={style.heading}>Noida, India</Typography>
                    </Box>
                    <Box sx={style.locationContainer} mx={1}>
                        <Box sx={style.activeDot} ></Box>
                        <Typography sx={style.heading}>Available for new project</Typography>
                    </Box>
                    <Box sx={style.iconContainer}>
                        <IconButton>
                            <GitHubIcon style={{ color: "white" }} />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon style={{ color: "white" }} />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon style={{ color: "white" }} />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon style={{ color: "white" }} />
                        </IconButton>
                    </Box>
                </Box>
                <Box width={'40%'}>
                <Box  my={10}>
                    <img src={userPhoto} alt='user' width={300} height={300} style={{boxShadow:"1px 1px 10px white",borderRadius:"1rem"}}></img>
                </Box>
                </Box>
            </Box>
        </div>
    )
}
