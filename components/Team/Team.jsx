'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { teamContent } from '../../constants';
import { TitleText, TypingText } from '../common/CustomTexts';
import StartSteps from '../common/StartSteps';
import { staggerContainer, fadeIn } from '../../utils/motion';

const Team = () => (
  <section className={`${styles.paddings} relative z-10 w-screen h-[80vh]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| We take privacy seriously" />
        <TitleText
          title={<>Before you get started</>}
          textStyles="md:text-[50px]"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {teamContent.map((feature) => (
            <StartSteps key={feature} text={feature} />
          ))}
        </div>
        <div className="mt-[31px] flex flex-row max-w-[370px] gap-[24px]">
          <span>with love, </span>
          <img src="/sign.png" alt="signature" className="h-12" />
        </div>
        <button
          className="cursor-pointer bg-black w-32 h-12 text-white rounded-3xl"
          type="button"
        >
          Take a test
        </button>
      </motion.div>
    </motion.div>
  </section>
);

export default Team;
