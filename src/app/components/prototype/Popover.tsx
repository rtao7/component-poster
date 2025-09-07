'use client';

import { useState } from "react";

export default function Popover(){

    const[showHint, setshowHint] = useState(false)
    
    function showHintHandler(){
        setshowHint(prev => !prev)
    }

    return (
        <div>
            <div className="border max-w-[320px]">
                <div onMouseEnter={showHintHandler} onMouseLeave={showHintHandler} className="border">Item 1</div>
            </div>

            {showHint && 
                (<div className="absolute border max-w-[320px]">
                    <div>Hint</div>
                </div>)
            }
        </div>
    )
}
