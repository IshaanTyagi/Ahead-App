'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import { TypingText } from '../common/CustomTexts';
import { workContent } from '../../constants';
import WorkCards from './WorkCards/WorkCards';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mb-8`}
    >
      <TypingText title="| Work with us" />
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="work-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-black">
            About
          </h4>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-black">
          At ahead our goal is to make self- improvement fun and lasting. We
          know there's a way how to make it work. And that's what aHead is all
          about!
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <div className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] border-[1px] border-[#6A6A6A] overflow-scroll ">
          <div className=" flex flex-wrap justify-center gap-[20px] h-[inherit] items-center">
            {workContent.map((feature) => (
              <WorkCards key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
