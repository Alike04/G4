import React from "react";
import { ContentContainer, Line, ViewPort } from "../components/PageElements";
import { useSpring, animated } from "react-spring";

const Biology = () => {
  return (
    <>
      <ViewPort height={"100vh"} style={{ backgroundColor: "black" }}>
        <Card></Card>
      </ViewPort>
      <Line />
      <ViewPort>
        <ContentContainer>
          <br />
          <br />
          <br />
          <br />
          <h1>
            RQ: How does increasing temperature affect on atmosphere and
            existing of living things?
          </h1>
          <p>
            Mars has some CO2 but it has almost no atmosphere that can not
            retain energy from the Sun and therefore has a very low temperature
            that leads to the inability of plants to grow and living things to
            exist. Carbon dioxide is a greenhouse gas which traps heat and warms
            the inside of the atmosphere. When the explosion happens, it will
            melt polar ice caps which contain a lot of co2. However, the
            atmosphere is very sensitive to changing levels of CO2 and affects
            its temperature . When the sun's energy goes to the top of the
            atmosphere which becomes thicker because of high concentration of
            co2, most of it passes through to the planet's surface, where it is
            absorbed and retained. It interacts with molecules of CO2 in a way
            that prevents some of it from escaping the planet's atmosphere. The
            trapped heat energy leads to increased average surface air
            temperatures which increases evaporation from water areas. Because
            warmer air holds more moisture, its concentration of water vapor
            increases. By increasing the concentration of greenhouse gasses, we
            are making Mars' atmosphere a more efficient greenhouse because it
            makes plants grow on Mars because photosynthesis happens because of
            using the sunlight energy to synthesize sugar out of carbon dioxide
            and water from evaporation. Plants use sugar because of two
            functions: energy and building blocks for growth. Since it will make
            plants grow there it will contribute Mr Alma’s with food such as
            potatoes and other vegetables. Also, an increased amount of plants
            will increase oxygen which will help him to breathe without a
            spacesuit.
          </p>
          <img
            src="/images/photos.png"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
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
        src="/images/dna.png"
        style={{
          transform: props.xy.to(trans1),
          width: "160px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/dna.png"
        style={{
          transform: props.xy.to(trans2),
          width: "160px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/plant.png"
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
        BIOLOGY
      </animated.h1>
      <animated.img
        src="/images/plant.png"
        style={{
          transform: props.xy.to(trans4),
          width: "150px",
          height: "150px",
        }}
      />{" "}
      <animated.img
        src="/images/plant.png"
        style={{
          transform: props.xy.to(trans5),
          width: "150px",
          height: "150px",
        }}
      />
    </div>
  );
}

export default Biology;
