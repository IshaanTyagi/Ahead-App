'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const OpenVac = () => (
  <section
    className={`${styles.yPaddings} sm:pl-0 pl-0 w-screen h-[60vh] flex justify-center align-middle items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <TypingText title="| Vacancies" textStyles="text-left" />
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[1] flex justify-between flex-col"
      >
        <TitleText title={<>Open Vacancies.</>} textStyles="md:text-[50px]" />
      </motion.div>
      <div className="flex justify-between items-center flex-row relative z-10 mt-8 content-center">
        <div className="items-center relative z-10 gradient-vacancies p-8 rounded-3xl">
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="font-bold w-[20rem] text-left text-xl text-white"
          >
            Senior Full-Stack Engineer
          </motion.p>
          <motion.ul
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[18px] text-[10px] text-left text-white w-[20rem] "
          >
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share options </li>
          </motion.ul>
        </div>
        <div className="items-center relative z-10 gradient-vacancies p-8 rounded-3xl">
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="font-extrabold w-[20rem] text-left text-xl text-white"
          >
            Superstar Intern
          </motion.p>
          <motion.ul
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[18px] text-[10px] text-left text-white w-[20rem]"
          >
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$20-24k, 0.5-1.50% equity share options </li>
          </motion.ul>
        </div>
        <div className="items-center relative z-10 gradient-vacancies p-8 rounded-3xl">
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="font-extrabold w-[20rem] text-left text-xl text-white"
          >
            Senior Designer
          </motion.p>
          <motion.ul
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[18px] text-[10px] text-left text-white w-[20rem]"
          >
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$40-55k, 0.25-0.50% equity share options </li>
          </motion.ul>
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

export default OpenVac;
