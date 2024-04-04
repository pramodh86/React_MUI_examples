import {  Button, IconButton, Stack, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';




function MuiTypography() {
  return (
    <>
    <Typography variant="h1" sx={{color:"#FFEBB2"}} >h1 Heading</Typography>
    <Typography variant="h2">h2 Heading</Typography>
    <Typography variant="h3">h3 Heading</Typography>
    <Typography variant="h4" gutterBottom>h4 Heading</Typography>
    <Typography variant="h5">h5 Heading</Typography>
    <Typography variant="h6">h6 Heading</Typography>

    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="subtitle2">subtitle2</Typography>

    <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore assumenda atque esse modi corporis fugit dicta, distinctio inventore cupiditate, eveniet, quo vitae nesciunt quidem. A eum excepturi aspernatur ipsa quis.</Typography>
    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni facere impedit aperiam autem alias, amet vel nam dicta obcaecati officia sit provident, sint nesciunt quia. Modi nulla vel officia.</Typography>
    <Stack spacing={2} direction="row">
    <Button variant="text" href="https://www.google.com">Text</Button>
    <Button variant="contained" sx={{backgroundColor:"red",'&:hover': {
          bgcolor: "black",
        }}}>Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>

    <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small" >Small</Button>
        <Button variant="contained" size="medium" >Medium</Button>
        <Button variant="contained" size="large" >Large</Button>

    </Stack>

    <Stack  spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon></SendIcon>} onClick={()=>{alert("Hello")}} >Send </Button>
        <Button variant="contained" endIcon={<SendIcon></SendIcon>} >Send </Button>
        <IconButton color="success" size="small">
            <SendIcon></SendIcon>
        </IconButton>

    </Stack>


   
    </>
  )
}

export default MuiTypography