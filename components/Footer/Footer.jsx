'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { footerVariants } from '../../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative h-[40vh]`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="mb-[10px] h-[2px] bg-black opacity-10" />
      <div className="flex items-center justify-between flex-wrap gap-5 flex-col">
        <img
          src="/ghost.png"
          alt="ghost"
          className="w-[100%] h-[75px] object-contain"
        />
        <h4 className="font-bold md:text-[34px] text-[44px] text-black">
          ahead
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="font-normal text-[16px] text-black flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-center">
              <img src="/location.svg" alt="location svg" className="mr-4" />
              <span>Auguststraße 26, 10117 Berlin</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <img src="/mail.svg" alt="mail svg" className="mr-4" />
              <span>hi@ahead-app.com</span>
            </div>
          </div>
          <p className="font-bold text-[16px] text-black opacity-50 text-center">
            Copyright © 2023 Ahead. All rights reserved.
          </p>

          <div className="flex gap-4">
            <img
              src="/app-store.svg"
              alt="app store redirect"
              className="w-32 h-32 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
