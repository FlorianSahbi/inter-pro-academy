import React from "react";
import { FaBook, FaPaintBrush, FaTools, FaRecycle, FaChartLine, FaEuroSign, FaHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiFiles, GiPublicSpeaker, GiMeditation, GiSparklingSabre } from "react-icons/gi";
import { AiOutlineComment } from "react-icons/ai";
import { MdRestaurant } from "react-icons/md";

const Icon = ({ name, size, color }) => {
  switch (name) {
    case "FaBook": return <FaBook size={size} color={color} />
    case "FaPaintBrush": return <FaPaintBrush size={size} color={color} />
    case "FaTools": return <FaTools size={size} color={color} />
    case "FaRecycle": return <FaRecycle size={size} color={color} />
    case "FaChartLine": return <FaChartLine size={size} color={color} />
    case "FaEuroSign": return <FaEuroSign size={size} color={color} />
    case "IoIosPeople": return <IoIosPeople size={size} color={color} />
    case "GiFiles": return <GiFiles size={size} color={color} />
    case "FaHandshake": return <FaHandshake size={size} color={color} />
    case "GiMeditation": return <GiMeditation size={size} color={color} />
    case "AiOutlineComment": return <AiOutlineComment size={size} color={color} />
    case "MdRestaurant": return <MdRestaurant size={size} color={color} />
    case "GiSparklingSabre": return <GiSparklingSabre size={size} color={color} />
    case "GiPublicSpeaker": return <GiPublicSpeaker size={size} color={color} />
    default: return <FaChartLine size={size} color={color} />
  }
}

export default Icon;
