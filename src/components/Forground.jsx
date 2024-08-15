import React, { useState } from 'react'
import { useRef } from 'react';
import Card from './Card'

function Forground() {
  const ref=useRef(null);
  const data=[
{desc:"This is my first React project",filesize:".9mb",
close:false,tag:{isOpen:false,tagTitle:"upload Now",tagColor:"green"},
},
{desc:"This is my first React project",filesize:".9mb",
close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"},
},
{desc:"This is my first React project",filesize:".9mb",
close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
},

];
  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
      </div>

  );
}

export default Forground
