'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { TypingText, TitleText } from '../common/CustomTexts';
import { openVacancies } from '@/constants';
import VacancyCard from './VacancyCard.jsx/VacancyCard';

const OpenVac = () => (
  <section
    className={`${styles.yPaddings}  w-screen h-[60vh] flex justify-center align-middle items-center  py-64 px-16 mb-[30rem] lg:mb-0`}
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
      <div className="flex justify-around items-center flex-row relative z-10 mt-8 content-center flex-wrap">
        <div className="flex lg:flex-row flex-col max-h-[52vh] gap-5 w-[inherit] lg:flex-wrap">
          {openVacancies.map((feature) => (
            <VacancyCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default OpenVac;
