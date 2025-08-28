import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { motion } from "motion/react";

function Cards({data, reference}) {
  const getTagColor = (color) => {
    const colorMap = {
      green: "bg-green-600",
      blue: "bg-blue-600",
      red: "bg-red-600",
      yellow: "bg-yellow-600"
    };
    return colorMap[color] || "bg-zinc-600";
  };

  return (
    <motion.div 
      drag 
      whileDrag={{ scale: 1.1 }}
      dragConstraints={reference} 
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="cards flex-shrink-0 w-[200px] p-5 h-[230px] rounded-[20px] bg-zinc-900 relative overflow-hidden"
    >
      <span className="text-zinc-200">
        <FaFileAlt />
      </span>
      <p className="text-zinc-200 mt-4 leading-none text-sm tracking-tight">
        {data.text}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex w-full justify-between items-center px-5 text-sm">
          <h3 className="text-zinc-100 mb-4">{data.size}</h3>
          <span className="text-zinc-100 h-5 w-5 mb-4 flex justify-center items-center rounded-full bg-zinc-800">
            {data.close ? <IoCloseOutline /> : <PiDownloadSimpleLight />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`w-full ${getTagColor(data.tag.tagColor)} flex justify-center items-center py-2`}>
            <h3 className="text-zinc-100 text-sm">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
