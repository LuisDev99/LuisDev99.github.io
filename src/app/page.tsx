"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AIPrompt from "@/components/prompt/prompt";
import Carousel from "@/components/carousel/carousel";

import Astronaut from "../assets/astronaut.gif";
import Experience from "@/components/experience/experience";
import DragableSkill from "@/components/dragable-skill/dragable-skill";
import Link from "next/link";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={4}>
        {/* Steppers */}
        {/* <ParallaxLayer
          speed={1}
          sticky={{ start: 0.5, end: 0.9 }}
          style={{ pointerEvents: "none" }}
        >
          Introduction
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          sticky={{ start: 1.5, end: 1.9 }}
          style={{ pointerEvents: "none" }}
        >
          Projects
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          sticky={{ start: 2.5, end: 2.9 }}
          style={{ pointerEvents: "none" }}
        >
          Experience
        </ParallaxLayer> */}

        {/* Backgrounds */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        {/* Floating images */}
        <ParallaxLayer
          speed={1}
          sticky={{ start: 2, end: 2.9 }}
          style={{ pointerEvents: "none" }}
        >
          <img
            alt=""
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          sticky={{ start: 0.7, end: 2.5 }}
          style={{ pointerEvents: "none" }}
        >
          <img
            alt=""
            src={Astronaut.src}
            style={{ width: "15%", marginLeft: "5%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* <img alt="" src={url("server")} style={{ width: "20%" }} /> */}
          {/* <img alt="" src={url("earth")} style={{ width: "60%" }} /> */}
        </ParallaxLayer>

        {/* Main Content  */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            marginTop: "5%",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <AIPrompt />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            height: "30%",
            margin: "0 auto",
          }}
        >
          <Carousel />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img src="/gifs/space_threeD.gif" alt="" className="" />

            <div>
              <p>
                That&apos;s it! Looks like you have reach the end of the space
                journey!{" "}
              </p>
              <br />
              <p>For further exploration, you can visit my socials: </p>

              <div className="flex mt-8 items-center justify-center">
                <Link
                  href="https://www.linkedin.com/in/luis-gerardo-ponce-rodriguez-1277a5140/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/socials/linkedin.png"
                    alt="NO HAY "
                    className="w-7 h-7"
                  />
                </Link>
                <Link
                  href="https://github.com/LuisDev99"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/socials/github.png"
                    alt="NO HAY "
                    className="w-7 h-7 ml-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
