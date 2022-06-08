import React, { Suspense, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ContentContainer, Line, ViewPort } from "../components/PageElements";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Html,
} from "@react-three/drei";

const Bomb = () => {
  const model = useLoader(GLTFLoader, "/models/bomb.gltf");
  const obj = useRef();
  useFrame(() => {
    obj.current.rotateX(0.01);
    obj.current.rotateY(0.01);
    obj.current.rotateZ(0.005);
  });
  return (
    <group position={[0, 1, -2]} rotation={[10, 10, 10]}>
      <primitive object={model.scene} ref={obj}></primitive>;
    </group>
  );
};

const Home = () => {
  return (
    <>
      <ViewPort height={"100vh"}>
        <img
          src="https://wallpaperaccess.com/full/1608.jpg"
          width="100%"
          height="100%"
        />
        <Text>Survive on Mars</Text>
      </ViewPort>
      <ViewPort
        // height="150vh"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <ContentContainer>
          <h1 style={{ textAlign: "center" }}>Situation</h1>
          <p>
            Mr. Almas landed unsuccessfully on the surface of Mars, near the
            planet's equator. The cause of the fall was a sandstorm, which is a
            characteristic feature of the atmosphere of Mars. Low gravity allows
            even rarefied air flows to raise huge clouds of dust to a height of
            up to 50 km. Mr. Almas's rocket suffered a couple of malfunctions,
            leaving him with limited water and a malfunction in parts. The
            science that studies the forces acting on rockets or other
            spacecraft is called astrodynamics. The main forces acting on a
            rocket in flight are:
            <ul>
              <li>1. Engine thrust.</li>
              <li>2. When moving in the atmosphere - drag.</li>
              <li>
                3. Lifting force. Usually small, but significant for rocket
                planes.
              </li>
              <li>4. Gravity.</li>
              <li>
                5. Atmospheric pressure In our case, the malfunction occurred
                due to low atmospheric pressure, which will increase due to the
                explosion. We need to make the solution to save him by using
                four science subjects.
              </li>
            </ul>
          </p>
          <br />
          <br />
          <br />
          <br />
          <img
            src="/images/location.png"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          ></img>
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ textAlign: "center" }}>Mars Characteristics</h1>
          <ul>
            <li>
              It moves around the Sun in an elliptical orbit at an average
              distance of 1.524 astronomical units (228 million km).
            </li>
            <li>
              The inclination of the orbit of Mars to the plane of the ecliptic
              is 1.8°.
            </li>
            <li>The average speed of Mars in orbit is 24.2 km / s.</li>
            <li>
              The linear diameter of Mars (average) is 6800 km, that is, only
              slightly more than half (0.53) of the diameter of the Earth.
            </li>
            <li>The volume of Mars is 0.15 that of the Earth.</li>
            <li>The mass of Mars is 6.423 × 1023 kg (0.107 Earth masses)</li>
            <li>The average density is 3.97 g/cm3.</li>
            <li>
              The acceleration of gravity on the surface is 3.72 m / s; or 0.38
              earth value.
            </li>
          </ul>
          <h2>Mars back then</h2>
          <p>
            When life started to exist on Earth 3.5 to 4 billion years ago, the
            Red planet was also home to liquid water, lakes and flowing rivers.
            Mars had a thick layer of atmosphere and a magnetic field to shield
            radiation, and a variety of organic molecules, and also had suitable
            conditions to form and develop living things
          </p>
          <h2>Mars is cold</h2>
          <p>
            Mars has a very low temperature in which living things can not live,
            it is like 217 Kelvin cold, around minus 81 degrees Fahrenheit.
            Heating up the planet, essentially fueling climate change through
            the Greenhouse Effect on Mars, could make it slightly more
            hospitable.
          </p>
          <h2>Mars has almost no atmosphere</h2>
          <p>
            Mars’ atmosphere is very thin and therefore can’t absorb sunlight
            energy making it cold to support water on its surface because it
            will evaporate and freeze any liquid due to small atmospheric
            pressure of 0.6%
          </p>
          <h2>How to breathe on Mars</h2>
          <p>
            Considering this atmosphere on Mars it is impossible to breathe
            here. If we will be able to convert co2 on mars into o2, then future
            human explorers could use this to generate oxygen for their habitats
          </p>
          <h1 style={{ textAlign: "center" }}>OUR IDEA</h1>
          <p>
            Our goal is to bring back the life-compatible conditions on Mars to
            help the teacher survive on Mars. This will be done by nuking Mars!
          </p>
          <p>
            The idea would be focused on heating up the stores of frozen carbon
            dioxide in the planet’s poles, meaning humans could potentially move
            around Mars with just a breathing apparatus.
          </p>
          <p>
            We can terraform Mars by exploding nuclear bombs over its polar
            caps. The radiation wouldn’t be an issue since the explosion would
            be in space over the poles, but the heat release would vaporize the
            frozen carbon dioxide to greenhouse warming the planet and melting
            the water ice. Through the Greenhouse effect, the atmosphere will
            form and the temperature on Mars will increase.
          </p>
        </ContentContainer>
      </ViewPort>
      <ViewPort height={"100vh"} style={{ backgroundColor: "black" }}>
        <Canvas>
          <Suspense>
            {/* <mesh>
              <Html position={[-7, 3, 0]}>
                <h1 style={{ color: "white", width: "200px" }}>NUKE MARS!</h1>
              </Html>{" "}
              <Html position={[5, 2, 0]}>
                <h1 style={{ color: "white", width: "200px" }}>NUKE MARS!</h1>
              </Html>
            </mesh> */}
            <Stars></Stars>
            <ambientLight />
            <pointLight />
            <Bomb />
          </Suspense>
        </Canvas>
      </ViewPort>
    </>
  );
};

const Typing = keyframes`
  from { width: 0 }
  to { width: 50% }
  `;
const BlinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;

const Text = styled.h1`
  color: white;
  position: absolute;
  font-size: 100px;
  bottom: 40px;
  left: 100px;
  width: 50%;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  /* text-align: center; */
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
  animation: ${Typing} 1s steps(44) 1s 1 normal both,
    ${BlinkCaret} 0.75s step-end infinite; ;
`;
export default Home;
