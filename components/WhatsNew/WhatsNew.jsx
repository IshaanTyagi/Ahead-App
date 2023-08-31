'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { newFeatures } from '../../constants';
import { TitleText, TypingText } from '../common/CustomTexts';
import NewFeatures from './NewFeatures/NewFeatures';
import { staggerContainer, fadeIn } from '../../utils/motion';

const WhatsNew = () => (
  <section className="h-screen w-screen py-64 px-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="flex-[1] flex justify-between flex-col"
      >
        <TypingText title="| Wrong with self-improvement and how we're fixing it" />
        <TitleText
          title={<>Self-improvement. Ugh..</>}
          textStyles="md:text-[50px]"
        />
        <div className="mt-[48px] flex lg:flex-row flex-col max-h-[70vh] gap-5 w-[inherit] lg:flex-wrap overflow-scroll">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
