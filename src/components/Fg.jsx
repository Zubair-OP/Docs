import React, { useRef } from 'react'
import Cards from './Cards'

function Fg() {


    const data = [{
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          pariatur!`,
    size: ".9mb",
    tag :{ isOpen: true , tagtitle: "Download" , tagColor : "green"},
    close:true 
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          pariatur!`,
    size: "1mb",
    tag :{ isOpen: true , tagtitle: "Upload" , tagColor : "blue"},
    close:true 
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          pariatur!`,
    size: "2mb",
    tag :{ isOpen: false , tagtitle: "Download" , tagColor : "green"},
    close:true 
  }
]
 const ref = useRef(null);

  return (
    <div>
      <div ref={ref} className='w-full h-full fixed top-0 left-0 z-[3] flex gap-5 p-5'>
        {data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default Fg
