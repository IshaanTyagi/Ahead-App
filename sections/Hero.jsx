'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6 w-screen h-screen sm:py-64`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row space-x-20`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            CURIOSITY
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>RUSH</h1>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-row justify-center items-center space-x-4"
          variants={textVariant(1.3)}
        >
          <img
            src="/app-store.svg"
            alt="app-store-download"
            className="h-32 w-32"
          />
          <img
            src="/play-store.svg"
            alt="play-store-download"
            className="h-32 w-32"
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
