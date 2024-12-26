import { useState } from "react";
import {Typography} from '@mui/material'

const Timer = () =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <Typography fontWeight="600" align="center">{ctime}</Typography>
}
export default Timer
