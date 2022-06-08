import React from "react";
import { ContentContainer, ViewPort } from "../components/PageElements";
import { useSpring, animated } from "react-spring";

const Chemistry = () => {
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
            RQ: How do the explosions that vaporize enough water vapour and
            carbon dioxide, which are both potent greenhouse gasses, affect the
            temperature increase?
          </h1>
          <ul>
            <li>Temperature: (-81 °F − 32) × 5/9 = -62,78 °C</li>
            <li>
              The existing atmosphere is so thin that it cannot retain energy
              from the Sun.
            </li>
            <li>1% of Earth's atmospheric density</li>
          </ul>
          <p>
            The major component of the Planet's atmosphere is CO2. It has a
            volumetric ratio of 94.9 percent on average. Surface temperatures in
            the winter polar areas can fall below the freezing point of CO2. CO2
            gas in the atmosphere can condense on the surface to produce 1–2 m
            thick solid dry ice. In the summer, the dry ice arctic cap can
            sublimate and release carbon dioxide back into the atmosphere. As a
            result, considerable yearly variations in atmospheric pressure (25
            percent) and atmospheric composition may be detected on Mars.
          </p>
          <p>
            Despite the high CO2 content in the Martian atmosphere, the
            greenhouse effect on Mars is relatively weak (approximately 5 °C)
            due to the low water vapor concentration and low atmospheric
            pressure. Although water vapor in the Earth's atmosphere contributes
            the most to the greenhouse effect on contemporary Earth, it is found
            in extremely low amounts in the Martian atmosphere. Furthermore,
            because the pressure expansion effect is minimal at low atmospheric
            pressure, greenhouse gasses cannot absorb infrared light
            effectively. As a result, an explosion would be the solution to this
            dilemma, releasing enough carbon dioxide and exploding water from
            Mars' interior to generate the necessary vapor to cause a greenhouse
            effect.
          </p>
          <p>
            In the presence of solar UV radiation (hν, photons with a wavelength
            shorter than 225 nm), CO2 in the Martian atmosphere can undergo
            photolysis by the following reaction:
          </p>
          <p>{"CO2 + hν (λ < 255 nm) ⟶ CO + O."}</p>
          <p>
            If there were no chemical production of CO2, all the CO2 in the
            current Martian atmosphere would have been removed by photolysis in
            about 3500 years. Hydroxyl radicals (OH) produced by photolysis of
            water vapor, together with other odd hydrogen species (eg H, HO2)
            can convert carbon monoxide (CO) back to CO2. The reaction cycle can
            be described as:
          </p>
          <p>
            CO + OH ⟶ CO2 + H <br />
            H + O2 + M ⟶ HO2 + M<br />
            HO2 + O ⟶ OH + O2
            <br />
            CO + O ⟶ CO2
            <br />
          </p>
          <p>
            Mixing also plays a role in CO2 recovery by moving O, CO and O2 from
            the upper atmosphere down. The balance between photolysis and redox
            production maintains a constant average concentration of CO2 in the
            modern Martian atmosphere.
          </p>
          <p>
            Ice clouds of CO2 can form in winter polar regions and at very high
            altitudes (&gt; 50 km) in tropical regions where the air temperature
            is below the CO2 freezing point.
          </p>
          <p>
            The average volumetric ratio of molecular oxygen (O2) in the Martian
            atmosphere has been determined to be 0.174 percent. It is a
            photolysis byproduct of CO2, water vapor, and ozone (O3). It may
            generate ozone when it reacts with atomic oxygen (O) (O3). The
            Herschel Space Observatory discovered molecular oxygen in the
            Martian atmosphere in 2010. Atomic oxygen is created in the high
            atmosphere by photolysis of CO2 and can exit the atmosphere via
            dissociative recombination or ion capture.
          </p>
          <p>
            NASA scientists discovered in 2019 that the amount of oxygen in the
            Martian atmosphere increases by 30% over the spring and summer.{" "}
          </p>
          <p>
            Like stratospheric ozone in the Earth's atmosphere, the ozone
            present in the Martian atmosphere can be destroyed by catalytic
            cycles involving strange hydrogen species:
          </p>
          <p>
            H + O3 ⟶ OH + O2 <br />
            O + OH ⟶ H + O2
            <br />
            O + O3 ⟶  2O2
            <br />
          </p>
          <p>
            Mars doesn’t have any greenhouse effect because even though it does
            have some atmospheric carbon dioxide, it has almost no atmosphere
            that can not retain energy from the Sun and therefore has a very low
            temperature.When an explosion happens, greenhouse gasses like carbon
            dioxide increase because polar ice caps will melt which contain a
            lot of carbon dioxide. Therefore it will create the atmosphere of
            co2 and the will temperature which increases evaporation from water
            areas. Because warmer air holds more moisture, its concentration of
            water vapor increases. Water vapor is also an effective greenhouse
            gas because it absorbs long wave radiation and radiates it back to
            the land, therefore increasing the temperature. Since there's more
            CO2 in the atmosphere, it makes the atmosphere warmer by increasing
            temperature because co2 molecules in the air absorb infrared
            radiation and deliver the sun's energy to the earth
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
        src="/images/molecule.png"
        style={{
          transform: props.xy.to(trans1),
          width: "150px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/molecule.png"
        style={{
          transform: props.xy.to(trans2),
          width: "150px",
          height: "150px",
        }}
      />
      <animated.img
        src="/images/flask.png"
        style={{
          transform: props.xy.to(trans3),
          width: "120px",
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
        CHEMISTRY
      </animated.h1>
      <animated.img
        src="/images/flask.png"
        style={{
          transform: props.xy.to(trans4),
          width: "120px",
          height: "150px",
        }}
      />{" "}
      <animated.img
        src="/images/flask.png"
        style={{
          transform: props.xy.to(trans5),
          width: "120px",
          height: "150px",
        }}
      />
    </div>
  );
}

export default Chemistry;
