import { useState, useEffect } from "react";
import {Typography} from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'




const Timer = () =>{
  const [timerActive, setTimerActive] = useState(false)
  const [time, setTime] = useState(1500)


  useEffect(() => {
    const interval = setInterval(() => {
      if (timerActive) {
        setTime(time => time-1)
      }
    }, 1000)


    return () => clearInterval(interval)
  }, [timerActive])


  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');


  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "50vh",
        height:"25vh",
        borderRadius: 5,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }}>
      <Typography fontWeight="600" align="center" color="black" display="flex" justifyContent="center" marginBottom="20px" fontSize="50px">
        {minutes} : {seconds}
      </Typography>
      <div
        sx={{
          display: "flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection: "row",
        }}
      >
        <Button
          sx={{
            backgroundColor: "pink",
            color: "black",
            marginRight: "5px"
          }}
          onClick={() => {
            setTimerActive(true);
        }}>
          Start Timer
        </Button>
        <Button
          sx={{
              backgroundColor: "pink",
              color: "black",
            }}
          onClick={() => {
            setTimerActive(false);
            setTime(1500);
          }
        }>
          Reset Timer
      </Button>


      </div>
    </Box>
   
  )
}
export default Timer