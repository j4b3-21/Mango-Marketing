import React from 'react';
import computerSVG from "../assets/svg/computer-and-house-svgrepo-com.svg";
import materialSVG from "../assets/svg/fabric-material-svgrepo-com.svg";
import shapesSVG from "../assets/svg/shapes-svgrepo-com.svg";
import Marquee from "react-fast-marquee";
import CompanyCards from "../components/CompanyCards.jsx";
import Footer from "../components/Footer.jsx";

const Dashboard = () => {
    return (
        <div className="px-4 md:px-10 flex flex-col gap-16 justify-center items-center overflow-x-hidden">

            {/* Hero Section */}
            <div className="w-full h-[25vh] md:h-[39vh] bg-black flex items-center justify-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold">IMAGES</h1>
            </div>

            {/* Intro Text */}
            <div className="text-center max-w-4xl px-4">
                <h1 className="text-2xl md:text-3xl font-black">Lorem ipsum dolor sit amet, consectetur.</h1>
                <p className="text-gray-600 text-sm md:text-base mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio mollitia officiis?
                    At consequatur, consequuntur eligendi ipsum itaque natus necessitatibus nobis nostrum porro quis voluptates!
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col md:flex-row gap-10 px-4 md:px-0">
                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={computerSVG} alt="Computer" className="w-28 md:w-40" />
                    <h2 className="text-lg md:text-xl font-bold mt-4">Lorem ipsum dolor.</h2>
                    <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolores ipsum reiciendis veritatis voluptatibus voluptatum?</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={materialSVG} alt="Material" className="w-28 md:w-36" />
                    <h2 className="text-lg md:text-xl font-bold mt-4">Lorem ipsum dolor.</h2>
                    <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolores ipsum reiciendis veritatis voluptatibus voluptatum?</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-xs">
                    <img src={shapesSVG} alt="Shapes" className="w-28 md:w-36" />
                    <h2 className="text-lg md:text-xl font-bold mt-4">Lorem ipsum dolor.</h2>
                    <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolores ipsum reiciendis veritatis voluptatibus voluptatum?</p>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full py-10">
                <Marquee autoFill={true} gradient={true} className="overflow-x-hidden">
                    {[...Array(5)].map((_, idx) => (
                        <CompanyCards
                            key={idx}
                            logoUrl="https://www.gstatic.com/marketing-cms/assets/images/aa/d2/356851cc4224bc17a230a98e6000/chrome.webp=s96-fcrop64=1,00000000ffffffff-rw"
                            altText="hi"
                        />
                    ))}
                </Marquee>
            </div>

            {/* Image Grid Section */}
            <div className="w-screen 2xl:h-screen grid grid-cols-1 md:grid-cols-2  overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <img
                        key={i}
                        className="w-full h-auto object-cover"
                        src="https://media.gettyimages.com/id/1198613163/photo/everyone-loves-pizza.jpg?s=2048x2048&w=gi&k=20&c=Rg3Fv7IIBqD4-cuk_7wDB1n7yGUcO4Hn0ZBVZ4xI0NY="
                        alt="Pizza"
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
