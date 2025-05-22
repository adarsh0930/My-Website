import React from "react";
import TypeWriter from '../TypeWriter';


export default function Home() {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between py-20">
        <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-xl lg:text-6xl font-extrabold">
            Weaving Creativity into Every Component to Craft Interactive Web Experiences
            </h2>

            <h2 className="text-xl font-light">
                Hi! My Name is
            </h2>

            <h1 className="text-xl lg:text-4xl font-bold">
            Adarsh Singh
            </h1>

            <h1 className="text-6xl lg:text-7xl font-extrabold">
                <TypeWriter />
            </h1>
        </div>
        <div>
          <img src="/logo.png" alt="logo" className="w-80 rounded-full "></img>
        </div>
    </section>
    );
}