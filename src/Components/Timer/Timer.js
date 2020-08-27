import React from 'react';

import './Timer.Styles.css'

const Timer = ({match}) => {
    if(match.substr(1,5) === 'intro'){
        console.log(match.substr(1,5))
        const time = 600

        var i=time
        var sec = i%60;
        var min = (i-sec)/60;
        
        setInterval(function(){
            if(sec>0){
                sec=sec-1
            }else{
                if(min>0){
                    min=min-1
                    sec=59
                }else{
                    min=0
                    if(sec>0){
                    }else{
                        sec=0
                    }
                }
            }
            sec>9 ? document.getElementById('sec').textContent=sec : document.getElementById('sec').textContent='0'+sec
            min>9 ? document.getElementById('min').textContent=min : document.getElementById('min').textContent='0'+min
        }, 1000)

        setTimeout(function(){
            alert('Time Up')
            window.location='/round2'
        }, time*1000)

        return(
            <h3><span id='min'></span>:<span id='sec'></span></h3>
        )
    }
    else{
        return(
            null
        )
    }
}

export default Timer;