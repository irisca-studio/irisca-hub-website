"use client";

import { useEffect, useState } from "react";

export default function CustomCursor(){

const [pos,setPos]=useState({
x:0,
y:0
});


useEffect(()=>{

const move=(e:MouseEvent)=>{

setPos({
x:e.clientX,
y:e.clientY
});

};


window.addEventListener("mousemove",move);


return()=>window.removeEventListener("mousemove",move);


},[]);



return(

<div
style={{
left:pos.x,
top:pos.y,
}}
className="
fixed
pointer-events-none
z-[9999]
w-6
h-6
rounded-full
bg-gradient-to-r
from-purple-500
to-red-500
shadow-[0_0_25px_rgba(168,85,247,1)]
animate-pulse
-translate-x-1/2
-translate-y-1/2
"
/>

);

}