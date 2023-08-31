'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { startingFeatures } from '../../constants';
import { TitleText, TypingText } from '../common/CustomTexts';
import StartSteps from '../common/StartSteps';
import { staggerContainer, fadeIn, imgVariants } from '../../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 w-screen h-[80vh]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Built out of frustration" />
        <TitleText
          title={<>Meet the Ahead App</>}
          textStyles="md:text-[50px]"
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature) => (
            <StartSteps key={feature} text={feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={imgVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[100%] h-[100%] rounded-xl object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
