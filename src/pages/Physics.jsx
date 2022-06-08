import React from "react";
import { ContentContainer, ViewPort } from "../components/PageElements";
import { useSpring, animated } from "react-spring";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Physics = () => {
  return (
    <>
      <ViewPort height={"100vh"} style={{ backgroundColor: "black" }}>
        <Card>
          <h1 style={{ color: "white" }}>CHEMISTRY</h1>
        </Card>
      </ViewPort>
      <ViewPort>
        <ContentContainer>
          <h1>
            RQ: What is the relationship between the mass and speed of the
            rocketship?
          </h1>
          <p>
            A tricky thing about the rocketships is that an increase in their
            mass requires more fuel to reach sufficiently enough speed for
            leaving the earth’s gravitational forces. However, more fuel itself
            means an increase in a mass, so we get this sort of situation:
          </p>
          <img
            src="/images/rocket.png"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
          <p>
            Most of the rocket is just a container with the fuel and only the
            tiny part at the very top is the rocket itself.
          </p>
          <p>Rocket’s size is mainly defined by 3 main parts:</p>
          <ul>
            <li>
              Payload ー all the stuff inside the rocket except the fuel.
              Measuring devices, satellites etc.
            </li>
            <li>Propellant load ー fuel + oxidizer</li>
            <li>The rocket engine, fuel tanks and etc.</li>
          </ul>
          <p>
            As we understood, the mass of fuel contributes the most to the
            rocket’s mass.
          </p>
          <p>
            According to our plan, we want to send an entire nuclear bomb to
            mars. Let’s find out how much fuel is needed to do this.
          </p>
          <p>
            *calculations are based on the following article
            https://www.quora.com/How-much-fuel-will-I-need-to-travel-to-Mars
          </p>
          <p>
            We can calculate the needed amount of fuel through Tsiolkovsky's
            equation:
          </p>
          <MathJaxContext style="">
            <MathJax>{"\\(\\Delta v = v_eln(\\frac{m_o}{m_f})\\)"}</MathJax>
          </MathJaxContext>
          <p>
            v 一 is the total change in velocity the ship can go through <br />
            ve 一 efficiency of the engine the rocket is using
            <br />
            mf 一 is the mass of the rocket when completely unloaded.
            <br />
            m0 一 the mass of the unloaded rocket plus the mass of the fuel
            <br />
          </p>
          <p>
            So, let’s make several assumption: If we assume that the mass of the
            rocket when completely unloaded is 26,000 kg (as in the Orion
            spacecraft), v is 300m/s and exit velocity of about 4,400 m/s, we
            can plug this data into the equation and get the final mass of the
            rocket:
            <br /> m= 717754kg
          </p>
          <p>
            Mass of the rocket: 717754 kg <br />
            Mass of the fuel: 691754 kg
            <br />
            Exit speed: 400 m/s
            <br />
          </p>
        </ContentContainer>
      </ViewPort>
    </>
  );
};

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10 + 100}px,${y / 10 + 100}px,0)`;
const trans2 = (x, y) => `translate3d(${-x / 6 + 1000}px,${y / 6 + 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 + 300}px,${-y / 8 + 50}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${-x / 4 + 500}px,${y / 4 + 200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 7 + 600}px,${-y / 7 + 100}px,0)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      style={{ width: "100%", height: "100%" }}
    >
      <animated.img
        src="/images/atom.png"
        style={{
          transform: props.xy.to(trans1),
          width: "160px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/atom.png"
        style={{
          transform: props.xy.to(trans2),
          width: "160px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/formula.png"
        style={{
          transform: props.xy.to(trans3),
          width: "150px",
          height: "150px",
        }}
      />
      <animated.h1
        style={{
          transform: props.xy.to(trans6),
          color: "white",
          fontSize: "70px",
          width: "200px",
        }}
      >
        PHYSICS
      </animated.h1>
      <animated.img
        src="/images/formula.png"
        style={{
          transform: props.xy.to(trans4),
          width: "150px",
          height: "150px",
        }}
      />{" "}
      <animated.img
        src="/images/formula.png"
        style={{
          transform: props.xy.to(trans5),
          width: "150px",
          height: "150px",
        }}
      />
    </div>
  );
}

export default Physics;
