'use client';

import { motion } from 'framer-motion';
import { textVariant2, textContainer } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = () => (
  <h2>
    They are more successful in their pursuits and make for inspiring leaders.
    According to science, they earn $29k a year.
  </h2>
);
