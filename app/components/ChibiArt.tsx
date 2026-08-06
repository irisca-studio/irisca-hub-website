"use client";

import { useRef } from "react";

const items = [
  {
    type:"video",
    src:"/KD-4-32483 Pfp - Copy.mp4"
  },
  {
    type:"image",
    src:"/KD-4-32996 2 - Copy.jpg"
  },
  {
    type:"image",
    src:"/KD-4-31485.jpg"
  },
  {
    type:"image",
    src:"/animation_PFP.gif"
  },
  {
    type:"image",
    src:"/25.webp"
  }
];


export default function ChibiShowcase(){

const slider = useRef<HTMLDivElement>(null);


const move=(amount:number)=>{

slider.current?.scrollBy({
left:amount,
behavior:"smooth"
});

};



return (

<section
className="
bg-black
py-24
px-6
overflow-hidden
"
>


<div className="
max-w-7xl
mx-auto
"
>


<h2
className="
text-center
text-6xl
font-black
mb-14
bg-gradient-to-r
from-red-500
via-purple-500
to-red-500
bg-clip-text
text-transparent
"
>
CHIBI SHOWCASE
</h2>



<div className="
relative
"
>


<button
onClick={()=>move(-430)}
className="
absolute
left-2
top-1/2
-translate-y-1/2
z-20
w-14
h-14
rounded-full
bg-purple-600
text-white
text-4xl
shadow-[0_0_30px_rgba(168,85,247,.8)]
"
>
‹
</button>




<div
ref={slider}
className="
flex
gap-10
overflow-x-auto
scroll-smooth
snap-x
snap-mandatory
px-[35%]
cursor-grab
active:cursor-grabbing
no-scrollbar
"
>


{
items.map((item,index)=>(


<div
key={index}
className="
snap-center
min-w-[430px]
h-[560px]
rounded-[40px]
overflow-hidden
border
border-purple-500/40
bg-white/5
backdrop-blur-xl
shadow-[0_0_80px_rgba(168,85,247,.3)]
hover:scale-105
transition
"
>


{
item.type==="video"

?

<video
src={item.src}
autoPlay
loop
muted
playsInline
className="
w-full
h-full
object-contain
"
/>


:

<img
src={item.src}
className="
w-full
h-full
object-contain
"
/>

}


</div>


))
}


</div>




<button
onClick={()=>move(430)}
className="
absolute
right-2
top-1/2
-translate-y-1/2
z-20
w-14
h-14
rounded-full
bg-red-600
text-white
text-4xl
shadow-[0_0_30px_rgba(239,68,68,.8)]
"
>
›
</button>



</div>


</div>


</section>

);

}