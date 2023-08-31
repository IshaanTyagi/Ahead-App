'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TypingText } from '../common/CustomTexts';

const Insights = () => (
  <section
    className={`${styles.yPaddings} sm:pl-0 pl-0 w-screen h-screen flex justify-center align-middle items-center z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex justify-around flex-col flex-wrap`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <div className="mt-4 flex justify-center items-center flex-row relative z-10 flex-wrap">
        <div className="items-center relative z-10">
          <motion.h1
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-4xl font-extrabold w-[22rem] text-left"
          >
            Be the best you <br />
            with EQ
          </motion.h1>
        </div>
        <div className="items-center relative z-10 flex flex-col md:flex-row">
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-left text-primary-black w-[20rem]"
          >
            Not having your own emotions under control might be holding you
            back.
          </motion.p>
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-left text-primary-black w-[20rem]"
          >
            Additionally, not understanding those of others stops vou from being
            parent, friend you can be.
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

export default Insights;
