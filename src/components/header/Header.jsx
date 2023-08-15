// import React from 'react';
import { logo } from "../../assets/index"
import { FaLocationDot } from 'react-icons/fa6';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";



const Header = () => {
    const [showAll, setShowAll] = useState(false);


    return (
        <div className="w-full sticky top-0 z-50">
            <div className="w-full bg-amazon_blue text-white px-4 py-3 flex">

                {/* ________________ logo Start */}
                <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                    <img className="w-24 mt-2" src={logo} alt="logo image" />
                </div>
                {/* ________________ logo End */}
                {/* ________________ Delivery Start */}
                <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
                    <LocationOnOutlinedIcon />
                    <p className="text-sm text-lightText font-light flex flex-col">Deliver to{" "} <span className="text-sm font-semibold -mt-1 text-whiteText">Bangladesh</span></p>
                </div>
                {/* ________________ Delivery End */}
                {/* ________________ Search Start */}
                <div className="h-10 rounded-md flex flex-grow relative border-none">
                    <span
                        onClick={() => setShowAll(!showAll)}
                        className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">All <span></span><ArrowDropDownIcon />
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                                    {allItems.map((item) => (
                                        <li
                                            className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                                            key={item._id}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    <input type="text" className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" />
                    <span className="w-14 h-full bg-amazon_yellow hover:bg-[#f3a847] border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tr-md rounded-br-md"><SearchIcon /></span>
                </div>
                {/* ________________ Search End */}
                {/* ________________ Sign in Start */}
                <div className="flex flex-col justify-center px-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">
                    <p className="text-xs text-lightText font-light">Hello, sign in</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">
                        Accounts & Lists{" "}
                        <span>
                            <ArrowDropDownIcon />
                        </span>
                    </p>
                </div>
                {/* ________________ Sign in End */}
                {/* ________________ Returns Start */}
                <div className="flex flex-col justify-center px-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">
                    <p className="text-xs text-lightText font-light">Returns</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
                </div>
                {/* ________________ Returns End */}
                {/* ________________ Cart Start */}
                <div className="flex  justify-center px-2 h-[80%]  items-center border border-transparent hover:border-white cursor-pointer duration-100 relative">
                    <ShoppingCartIcon />
                    <p className="text-xs font-semibold mt-3 text-whiteText">
                        Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span>
                    </p>
                </div>
                {/* ________________ Cart End */}
            </div>
            <HeaderBottom />
        </div>
    );
};

export default Header;