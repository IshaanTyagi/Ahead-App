'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../../styles';
import { exploreContent } from '../../../constants';
import { staggerContainer } from '../../../utils/motion';
import { TitleText, TypingText } from '../../common/CustomTexts';
import ExploreCard from './ExploreCard/ExploreCard';

const Explore = () => {
  const [active, setActive] = useState('con-2');

  return (
    <section
      className="pt-0 sm:pl-16 sm:pb-16 sm:pr-16  xs:p-8 px-6 py-12 z-10"
      id="explore"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Examples" textStyles="text-center" />
        <TitleText
          title={<>Does this sound familiar...</>}
          textStyles="text-center"
        />
        <div className="mt-[15px] flex lg:flex-row flex-col max-h-[44vh] gap-5">
          {exploreContent.map((content, index) => (
            <ExploreCard
              key={content.id}
              {...content}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
