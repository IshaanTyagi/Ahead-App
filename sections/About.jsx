'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import Explore from './Explore';

const About = () => (
  <section className={`${styles.yPaddings} sm:pl-0 pl-0 w-screen h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex justify-center flex-col`}
    >
      <TypingText title="| About Ahead" textStyles="text-center" />
      <div className="flex justify-between items-center flex-row relative z-10">
        <div className="items-center relative z-10">
          <motion.h1
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-4xl font-extrabold w-[22rem] text-center"
          >
            EQ beats IQ
          </motion.h1>
        </div>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-center text-primary-black w-[22rem]"
        >
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </motion.p>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-center text-primary-black w-[22rem]"
        >
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </motion.p>
      </div>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain m-auto mt-[28px]"
      />
      <Explore />
    </motion.div>
  </section>
);

export default About;
