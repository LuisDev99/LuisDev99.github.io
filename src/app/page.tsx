"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AIPrompt from "@/components/prompt/prompt";
import Carousel from "@/components/carousel/carousel";

import Astronaut from "../assets/astronaut.gif";

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
      <Parallax ref={parallax} pages={3}>
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

        {/* Floating images */}
        <ParallaxLayer
          speed={1}
          sticky={{ start: 2, end: 3 }}
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
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img alt="" src={url("server")} style={{ width: "20%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img alt="" src={url("earth")} style={{ width: "60%" }} />
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
          <img alt="" src={url("clients-main")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
