'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText } from '../components';

const Insights = () => (
  <section
    className={`${styles.yPaddings} sm:pl-0 pl-0 w-screen h-screen flex justify-center align-middle items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <div className="flex justify-between items-center flex-row relative z-10 mt-16 content-center">
        <div className="items-center relative z-10">
          <motion.h1
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-4xl font-extrabold w-[24rem] text-left"
          >
            Be the best you <br />
            with EQ
          </motion.h1>
        </div>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[25px] text-[20px] text-left text-primary-black w-[24rem]"
        >
          Not having your own emotions under control might be holding you back.
        </motion.p>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[25px] text-[20px] text-left text-primary-black w-[24rem]"
        >
          Additionally, not understanding those of others stops vou from being
          parent, friend you can be.
        </motion.p>
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

export default Insights;
