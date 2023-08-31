'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { exploreContent } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../common/CustomTexts';
import ExploreCard from './ExploreCard/ExploreCard';

const Explore = () => {
  const [active, setActive] = useState('con-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center`}
      >
        <TypingText title="| Examples" textStyles="text-center" />
        <TitleText
          title={<>Does this sound familiar...</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col max-h-[70vh] gap-5 w-[inherit] lg:flex-wrap overflow-scroll">
          {exploreContent.map((feature) => (
            <ExploreCard key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
