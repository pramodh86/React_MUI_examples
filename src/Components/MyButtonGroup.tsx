import { Box, Button, ButtonGroup, InputAdornment, MenuItem, Stack, TextField } from "@mui/material"
import React, { useState } from "react"


function MyButtonGroup() {


  const  [selectState,setSelectState]  = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setSelectState(event.target.value as string)
  }

  return (
    <>
    <Stack direction="row">
      <ButtonGroup 
      variant="contained" 
      orientation="vertical" 
      size="medium"
      color="success"
      arial-label="alained-button-group" >
        <Button onClick={()=>{alert("Hello")}}>Left</Button>
        <Button onClick={()=>{alert("Hello")}}>Center</Button>
        <Button onClick={()=>{alert("Hello")}}>Right</Button>
        </ButtonGroup>
        
        
    </Stack>

      <Stack spacing={2}>
        <TextField label="Name" size="small" sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'green', // Change this to the desired outlined color
          },
          '&:hover fieldset': {
            borderColor: 'blue', // Change this to the desired hover outlined color
          },
          '&.Mui-focused fieldset': {
            borderColor: 'red', // Change this to the desired focused outlined color
          },
        },
        '& .MuiInputLabel-root': {
          color: 'orange', // Change this to the desired label color
        },
        '&.Mui-focused .MuiInputLabel-root': {
          color: 'purple', // Change this to the desired focused label color
        },
      }} variant="outlined"></TextField>
        <TextField label="Name" size="small" sx={{width:500}} variant="standard"></TextField>
        <TextField label="Name" size="small" sx={{width:500}} variant="filled"></TextField>
        <TextField label="Small Secondary" size="small" sx={{width:500}} color="secondary" required
        helperText="Do not share password with anyone"
        type="password"></TextField>
        <TextField label="Small Secondary" size="small" sx={{width:500}} color="secondary" 
        InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}
        ></TextField>
         <TextField label="Small new Secondary" size="small" sx={{width:500}} color="secondary" 
        InputProps={{startAdornment:<InputAdornment position="end">kg</InputAdornment>}}
        ></TextField>

        <Box width="250px">
          <TextField label="Select Country" select value={selectState} onChange={handleChange} fullWidth>
            <MenuItem value="IN">Indian</MenuItem>
            <MenuItem value="PA">Pakistan</MenuItem>
            <MenuItem value="SR">Sri Lanka</MenuItem>
          </TextField>
        </Box>


      </Stack>
    </>
  )
}

export default MyButtonGroup