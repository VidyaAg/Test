import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Link from '@mui/material/Link';
import { TextField } from "@material-ui/core";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyles = makeStyles({
    field: {
        paddingTop: "25px",
        fontWeight: 700
    },
    input: {
        borderBottom: '1px solid gray'
    },
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
const ButtonStyle = {
    display: 'block',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "20px",
    border: '1px solid gray',
    borderRadius: '15px',
    width: "120px"
}

const MyItems = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [show, setShow] = useState(false)
    return (
        <Container sx={{ mb: 5 }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: "600", py: 3 }}>
                Create your collection
            </Typography>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <Typography className={classes.field} sx={{ fontWeight: 600, paddingBottom: "20px", }}>Upload File</Typography>
                    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px", border: '1px dashed gray', borderRadius: '15px', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, height: 150, borderRadius: "20px" }}
                            image="https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                            alt="Live from space album cover"
                        />
                    </Card>

                    <Typography className={classes.field} sx={{ paddingBottom: "20px", fontWeight: 600 }}>Upload Cover</Typography>
                    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px", border: '1px dashed gray', borderRadius: '15px', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 550, height: 160, borderRadius: "20px" }}
                            image="https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                            alt="Live from space album cover"
                        />
                    </Card>
                    <Typography className={classes.field} sx={{ paddingBottom: "20px", fontWeight: 600 }}>set a period of time for which buyers can</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Button variant="outlined" sx={ButtonStyle} >
                                <LocalOfferIcon />
                                <Typography sx={{ fontWeight: "600", fontSize: '14px', color: 'black', textTransform: 'none', pt: 1 }}>Fixed Price</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" sx={ButtonStyle}>
                                <TimelapseIcon />
                                <Typography sx={{ fontWeight: "600", fontSize: '14px', color: 'black', textTransform: 'none', pt: 1 }}>Fixed Price</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Typography className={classes.field} sx={{ fontWeight: 600, mb: 0, pb: 0 }}>Minimum bid</Typography>
                    <Box component="form" sx={{ '& > :not(style)': { width: '100%', }, }}>
                        <TextField InputProps={{ className: classes.input }} label="0.054" variant="standard" />
                        <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600, pt: 1, paddingBottom: "20px", }}>Bids below this amount will not be allowed</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography sx={{ fontWeight: 600, fontSize: "15px", }}>Starting Date</Typography>
                            <FormControl fullWidth sx={{ borderBottom: '1px solid gray', my: 1 }}>
                                <NativeSelect sx={{ fontSize: "13px", fontWeight: 600 }}>
                                    <option value="Right After Listening">Right After Listening</option>
                                    <option value="Right After Listening">Right After Listening</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontWeight: 600, fontSize: "15px", }}>Expiration Date</Typography>
                            <FormControl fullWidth sx={{ borderBottom: '1px solid gray', my: 1 }}>
                                <NativeSelect sx={{ fontSize: "13px", fontWeight: 600 }}>
                                    <option value={1} >1 Day</option>
                                    <option value={2}>2 Days</option>
                                    <option value={3}>3 Days</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600 }}>Any bid placed in the last 10 minutes extends the auction by 10 minutes.</Typography>
                    <Link href="#" underline="none" sx={{ fontSize: '13px', fontWeight: 600 }}>
                        {'Learn more how timed auctions work'}
                    </Link>
                    <Typography className={classes.field} sx={{ fontWeight: 600, color: "#1976d2", mb: 0, pb: 0 }}>Unblock once purchased</Typography>
                    <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600 }}>Content will be unblocked after successful transaction.</Typography>
                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                        <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="Digital key, Code to redeem or a link to a file.." variant="standard" />
                    </Box>
                    <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600, mt: 2 }}>Markdown is supported</Typography>
                    <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600 }}>Unicode symbols are not supported</Typography>

                    <Typography className={classes.field} sx={{ paddingBottom: "20px", fontWeight: 600 }}>Choose Collection</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Button onClick={handleOpen} variant="outlined" sx={ButtonStyle}>
                                <AddCircleIcon />
                                <Typography sx={{ fontWeight: "600", fontSize: '14px', color: 'black', textTransform: 'none', pt: 1 }}>Create</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" sx={ButtonStyle}>
                                <BarChartIcon />
                                <Typography sx={{ fontWeight: "600", fontSize: '14px', color: 'black', textTransform: 'none', pt: 1 }}>Fungy</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography className={classes.field} sx={{ fontWeight: 600, pb: 0, mb: 0 }}>Title</Typography>
                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                        <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. Redeemable T-shirt with logo" variant="standard" />
                    </Box>

                    <Typography className={classes.field} sx={{ fontWeight: 600, pb: 0, mb: 0 }}>Description</Typography>
                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                        <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. After purchasing you will be able to get real T-shirt" variant="standard" />
                        <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600, pt: 1 }}>With preserved line-breaks</Typography>
                    </Box>

                    <Typography className={classes.field} sx={{ fontWeight: 600, pb: 0, mb: 0 }}>Royalties</Typography>
                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                        <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. 10%" variant="standard" />
                        <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600, pt: 1 }}>Suggested: 0%, 10%, 20%, 30%</Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        {show ?
                            <Button variant="outlined" onClick={() => { setShow(false) }} sx={{ my: 4, borderRadius: '20px', border: '2px solid', fontWeight: 600 }} >Hide Advanced Settings</Button>
                            :
                            <Button variant="outlined" onClick={() => { setShow(true) }} sx={{ my: 4, borderRadius: '20px', border: '2px solid', fontWeight: 600 }} >Show Advanced Settings</Button>
                        }
                    </Box>
                    {/* Advanced Settings */}
                    <div style={{ display: show ? 'block' : 'none' }}>
                        <Typography className={classes.field} sx={{ fontWeight: 600, pb: 0, mb: 0 }}>Properties</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                                    <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. Size" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                                    <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. M" variant="standard" />
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography className={classes.field} sx={{ fontWeight: 600, pb: 0, mb: 0 }}>Alternative text for NFT</Typography>
                        <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }}>
                            <TextField InputProps={{ className: classes.input }} InputLabelProps={{ style: { fontSize: 14, fontWeight: 500 } }} label="e. g. Image description in details (Do not start with word image)" variant="standard" />
                            <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600, pt: 1 }}>Text that will be used in voiceover for people with disablities.</Typography>
                        </Box>
                        <Button variant="contained" component="span" sx={{ borderRadius: '20px', background: "linear-gradient(135deg,#7fcedc,#095273)", my: 4 }}>
                            Create Item
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.field} sx={{ paddingBottom: "20px", fontWeight: 600 }}>Preview</Typography>
                    <Card sx={{ padding: "20px 40px", border: '1px solid gray', borderRadius: '15px', boxShadow: 'none' }}>

                        <CardMedia
                            component="img"
                            sx={{ width: 160, height: 150, borderRadius: "20px" }}
                            image="https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                            alt="Live from space album cover"
                        />
                        <Button variant="outlined" sx={{ fontSize: '12spx', fontWeight: '600', border: '2px solid #1976d2', borderRadius: '20px', color: '#545454', my: 1, textTransform: 'none', px: 3 }}>4h 31m 10s left</Button>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600', color: "#545454" }}>Your Item Title Goes Here</Typography>
                        <Typography sx={{ fontSize: '14px', color: "#545454" }}>Dummy Title Text</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#1976d2' }}>Dummy Text</Typography>
                    </Card>
                </Grid>
            </Grid>

            {/* Create Collection Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Button sx={{ position: 'absolute', top: '-35px', right: '-20px', color: 'white' }} onClick={handleClose}><HighlightOffIcon /></Button>
                    <Typography sx={{ fontWeight: 600, color: '#1976d2' }} id="modal-modal-title" variant="h6" component="h2">
                        Collection
                    </Typography>
                    <Grid container spacing={1} sx={{ py: 1 }}>
                        <Grid item xs={4}>
                            <Button sx={{ background: '#8080805e', height: '90px', width: '80%', borderRadius: '50%' }}></Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{ fontSize: '13px', color: 'gray', fontWeight: '500' }}>We recommend and image of atleast 400X400, Gifs works too.</Typography>
                            <Button variant="contained" component="span" sx={{ borderRadius: '20px', background: "linear-gradient(135deg,#7fcedc,#095273)", my: 1 }}>
                                Choose File
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Typography sx={{ fontWeight: 600, fontSize: '13px', pt: 2 }}>Display Name</Typography><Typography sx={{ color: 'gray', fontWeight: 600, fontSize: '10px', pt: 2 }}>&nbsp;(required)</Typography></Box>
                    <Box component="form" sx={{ borderBottom: '1px solid gray' }}>
                        <TextField margin="0px" padding='0px' fullWidth
                            InputLabelProps={{ style: { fontSize: 14, fontWeight: 600 } }}
                            label="Enter token Name" variant="standard" />
                    </Box>
                    <Typography sx={{ fontSize: "13px", color: 'gray', fontWeight: 600 }}>Token name can not be changed in future</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Typography sx={{ fontWeight: 600, fontSize: '13px', pt: 2 }}>Symbol</Typography><Typography sx={{ color: 'gray', fontWeight: 600, fontSize: '10px', pt: 2 }}>&nbsp;(required)</Typography></Box>
                    <Box component="form" sx={{ borderBottom: '1px solid gray' }}>
                        <TextField margin="0px" padding='0px' fullWidth
                            InputLabelProps={{ style: { fontSize: 14, fontWeight: 600 } }}
                            label="Enter token symbol" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}><Typography sx={{ fontWeight: 600, fontSize: '13px', pt: 2 }}>Description</Typography><Typography sx={{ color: 'gray', fontWeight: 600, fontSize: '10px', pt: 2 }}>&nbsp;(optional)</Typography></Box>
                    <Box component="form" sx={{ borderBottom: '1px solid gray' }}>
                        <TextField margin="0px" padding='0px' fullWidth
                            InputLabelProps={{ style: { fontSize: 14, fontWeight: 600 } }}
                            label="Spread some words about your token collection" variant="standard" />
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '13px', pt: 2 }}>Short URL</Typography>
                    <Box sx={{ borderBottom: '1px solid gray' }}>
                        <TextField margin="0px" padding='0px' fullWidth
                            InputLabelProps={{ style: { fontSize: 14, fontWeight: 600 } }}
                            label="Enter short url" variant="standard" />
                    </Box>
                    <Typography sx={{ fontSize: '13px', color: 'gray', fontWeight: 600 }}>Will be used as public URL</Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button variant="contained" component="span" sx={{ borderRadius: '20px', background: "linear-gradient(135deg,#7fcedc,#095273)" }}>
                            Create Collection
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    )
}
export default MyItems