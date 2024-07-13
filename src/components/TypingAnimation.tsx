/* 
    Link to installing react-type-animation dependency and documentation
    https://www.npmjs.com/package/react-type-animation
*/ 

/*
  The TypingAnimation component is a component that will be used in the Hello component. It is a component that will have a text 
  animation introducing the different roles I fill. It will say Software Engineer, Mobile App Developer, Web Developer, Problem Solver.
*/

/*
  The classes for the TypingAnimation component are as follows:
  --- text-[2rem] to make the text size 2rem,
  --- md:text-[3rem] to make the text size 3rem when the screen size is medium,
  --- text-[#55e6a5] to make the text color a greenish color,
  --- font-bold to make the text bold,
  --- and uppercase to make the text uppercase.
*/

import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Sell Tents!',
        1500,
        'We Sell Sleeping Bags!',
        1500,
        'We Sell Flashlights & Lanterns!',
        1500,
        'We Sell Camping Cookware!',
        1500,
        'We Are The Camp Store!',
        1500
      ]}
      speed={50}
      className="typing-animation-text"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;