'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TypingText } from '../common/CustomTexts';

const About = () => (
  // <div className="border-black">
  //         <motion.p variants={textVariant(1.2)} className="w-48">
  //           People with high emotional intelligence (EQ) live more fulfilled
  //           lives. They tend to be happier and have healthier relationships.
  //         </motion.p>
  //       </div>
  //       <div className="border-black">
  //         <motion.p variants={textVariant(1.2)} className="w-48">
  //           People with high emotional intelligence (EQ) live more fulfilled
  //           lives. They tend to be happier and have healthier relationships.
  //         </motion.p>
  //       </div>
  <section
    className={`${styles.yPaddings} sm:pl-0 pl-0 w-screen h-[50vh] flex justify-center items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex justify-around flex-col flex-wrap`}
    >
      <TypingText title="| About Ahead" textStyles="text-center" />
      <div className="mt-4 flex justify-center items-center flex-row relative z-10 flex-wrap">
        <div className="items-center relative z-10">
          <motion.h1
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-4xl font-extrabold w-[22rem] text-left"
          >
            EQ beats IQ
          </motion.h1>
        </div>
        <div className="items-center relative z-10 flex flex-col md:flex-row">
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-left text-primary-black w-[22rem]"
          >
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-left text-primary-black w-[22rem]"
          >
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </motion.p>
        </div>
      </div>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain m-auto mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
