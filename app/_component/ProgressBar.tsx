import { match } from 'assert'
import React, { useEffect, useState } from 'react'

type Props = {
    value: number;
    onComplete: () => boolean
}

function ProgressBar({value,onComplete}: Props) {
const [percent ,setPercent] = useState(value)

useEffect(() => {
    
    setPercent(Math.min(100,Math.max(value ,0)))

    // suppose value me 50 aya ha to yha check hoga kinmax value kya ha 50 ya 0  to 50 is max  fir ye comprekrega ki what minimum 100 ya 50 to 50 minimum  to hm 50 lenge

if(value >= 100){
    onComplete() 
}

},[value])

  return (
    <div className='w-[500px] h-6 bg-zinc-200 overflow-hidden rounded-lg border relative'>
        {/* tofixed remove decimals after the number */}
        <span className={`font-semibold absolute flex w-full justify-center z-[2] items-center ${percent >= 50 && "text-white"}`}>{percent.toFixed()}%</span>

        <div role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} className={`h-full bg-lime-500 `} style={{transform : `scaleX(${percent / 100})` , transformOrigin:`left`}} ></div>

        {/* style={{width:`${percent}%`}} */}
        {/* its kind of bad */}


    </div>
  )
}

export default ProgressBar