import { Container, Grid, Typography, IconButton, Stack, Button } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import Link from '@mui/material/Link';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
    input: {
        color: 'white',
        background: '#f2f2f236',
        borderRadius: '5px',
        padding: '5px',
        fontWeight: 500,
        width: '100%'
    }
});
const Links = [
    { name: "Explore", path: "#" },
    { name: "How it works", path: "#" },
    { name: "Support", path: "#" },
    { name: "Become a partner", path: "#" }
];
const Community = [
    { name: "RARI Token", path: "#" },
    { name: "Discussion", path: "#" },
    { name: "Voting", path: "#" },
    { name: "Suggest feature", path: "#" }
];
const Docs = [
    { name: "Help Center", path: "#" },
    { name: "Terms & Conditions", path: "#" },
    { name: "Privacy Policy", path: "#" }
];
const heading = {
    fontSize: "15px",
    fontWeight: "600",
    textTransform: 'uppercase',
    letterSpacing: '2px'
}
const Footer = () => {

    const classes = useStyles();
    return (
        <div style={{ background: '#1976d2', color: 'white', padding: '40px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography sx={heading}>Follow Us</Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="facebook" sx={{ color: 'white' }}><FacebookIcon /></IconButton>
                            <IconButton aria-label="linkedin" sx={{ color: 'white' }}><LinkedInIcon /></IconButton>
                            <IconButton aria-label="Twitter" sx={{ color: 'white' }}><TwitterIcon /></IconButton>
                            <IconButton aria-label="Tag" sx={{ color: 'white' }}><TagIcon /></IconButton>
                        </Stack>
                        <Grid container spacing={2} sx={{ py: 3 }}>
                            <Grid item xs={4}>
                                <Typography sx={heading}>Quick Links</Typography>
                                {Links.map((value) => {
                                    return (
                                        <Typography sx={{ py: 1 }}><Link href="#" underline="none" sx={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>{value.name}</Link></Typography>
                                    )
                                })}
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: "15px", fontWeight: "600", textTransform: 'uppercase', letterSpacing: '2px' }}>Community</Typography>
                                {Community.map((value) => {
                                    return (
                                        <Typography sx={{ py: 1 }}><Link href="#" underline="none" sx={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>{value.name}</Link></Typography>
                                    )
                                })}
                            </Grid>
                            <Grid item xs={4} sx={{ mt: 3 }}>
                                {Docs.map((value) => {
                                    return (
                                        <Typography sx={{ py: 1 }}><Link href="#" underline="none" sx={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>{value.name}</Link></Typography>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: "15px", fontWeight: "600", textTransform: 'uppercase', letterSpacing: '2px' }}>Stay in the loop</Typography>
                        <Typography sx={{ fontSize: "13px" }}>Join our mailing list to stay in the loop with our newest feature releases, nft drops and tips and trics for navigating fungy</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField fullWidth InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 15, color:'white', margin:'5px'  } }} label="Your email address" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" sx={{ background: 'white', mt: 2, width: '120px', height: '42px' }} >
                                    <Typography sx={{ fontWeight: "600", fontSize: '14px', }}>Sign Up</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: "15px", fontWeight: "600", textTransform: 'uppercase', letterSpacing: '2px', mt: 3 }}>Keep in Touch</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField fullWidth InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 15, color:'white', margin:'5px'  } }} sx={{ width: '100%' }} label="Your Name" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 15, color:'white', margin:'5px'  } }} label="Email" variant="standard" />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField fullWidth multiline rows={2} InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 15, color:'white', margin:'5px'  } }} label="Leave your message" variant="standard" />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" sx={{ background: 'white', mt: 2, width: '100%', height: '47px' }} >
                                    <Typography sx={{ fontWeight: "600", fontSize: '14px', }}>Send</Typography>
                                    <ArrowForwardIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Footer