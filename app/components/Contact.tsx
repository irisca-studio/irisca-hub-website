"use client";

import { useState } from "react";

export default function Contact() {

  const [signature, setSignature] = useState("");

  return (

<section
id="contact"
className="
min-h-screen
bg-black
text-white
px-6
py-24
flex
items-center
justify-center
relative
overflow-hidden
"
>


{/* Background Glow */}

<div className="
absolute
w-[500px]
h-[500px]
bg-purple-700/30
blur-[150px]
rounded-full
top-0
left-0
"/>


<div className="
absolute
w-[500px]
h-[500px]
bg-red-600/20
blur-[150px]
rounded-full
bottom-0
right-0
"/>



{/* Frame */}

<div
className="
relative
w-full
max-w-5xl
p-[2px]
rounded-3xl
bg-gradient-to-r
from-red-500
via-purple-500
to-red-500
shadow-[0_0_50px_rgba(168,85,247,0.5)]
"
>


<div
className="
bg-black/90
backdrop-blur-xl
rounded-3xl
p-8
md:p-14
"
>


<h1
className="
text-center
text-4xl
md:text-6xl
font-bold
bg-gradient-to-r
from-red-400
via-purple-400
to-red-400
text-transparent
bg-clip-text
"
>
CLIENT COMMISSION
</h1>


<p className="
text-center
text-gray-400
mt-5
text-lg
">
Fill out the form below to start your artwork project.
</p>



<form className="mt-10 space-y-6">


<div className="grid md:grid-cols-2 gap-5">


<input
placeholder="Full Name"
className="
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
outline-none
focus:border-red-500
"
/>


<input
placeholder="Email Address"
className="
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
outline-none
focus:border-red-500
"
/>


</div>



<input
placeholder="Discord Username"
className="
w-full
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
outline-none
focus:border-red-500
"
/>



<select
className="
w-full
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
"
>

<option>Select Art Type</option>
<option>Character Illustration</option>
<option>Character Design</option>
<option>VTuber Model</option>
<option>Live2D</option>
<option>Chibi Art</option>
<option>Anime Portrait</option>
<option>Reference Sheet</option>
<option>Twitch Assets</option>
<option>Wallpaper</option>
<option>Concept Art</option>

</select>



<select
className="
w-full
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
"
>

<option>Select Budget</option>
<option>$50 - $100</option>
<option>$100 - $250</option>
<option>$250 - $500</option>
<option>$500+</option>

</select>



<textarea

rows={6}

placeholder="Describe your project..."

className="
w-full
p-4
rounded-xl
bg-zinc-900
border
border-purple-500/40
outline-none
focus:border-red-500
"

/>




{/* Signature */}

<div>

<label className="text-purple-300">
Client Signature
</label>


<input

value={signature}

onChange={(e)=>setSignature(e.target.value)}

placeholder="Type your signature"

className="
w-full
mt-2
p-5
rounded-xl
bg-zinc-900
border
border-purple-500/40
text-2xl
italic
font-serif
outline-none
focus:border-red-500
"

/>

</div>




<div className="
text-center
text-gray-500
text-sm
">

By submitting this form, you agree to the commission terms.

</div>



<button

className="
w-full
py-4
rounded-xl
bg-gradient-to-r
from-red-600
to-purple-600
font-bold
text-lg
hover:scale-105
transition
"

>

SEND COMMISSION REQUEST

</button>



</form>


</div>

</div>


</section>

  );
}