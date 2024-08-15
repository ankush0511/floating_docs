import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
function Card ({data,reference}) {
  return (
    <motion.div drag whileDrag={{scale:1.2}} dragConstraints={reference}
      dragElastic={0.1} dragTransition={{bounceStiffness:100,bounceDamping:10}}
    className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'>
        <FaFileAlt/>
        <p className='text-x5 mt-5 font-semibold leading-tight' >{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose/>: <FiDownload size="1em" color='#fff'/> }
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold  '>{data.tag.tagTitle}</h3>
            </div>) }   
        </div>
    
    </motion.div>

  );
}

export default Card;
