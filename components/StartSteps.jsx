'use client';

import styles from '../styles';

const StartSteps = ({ text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <p className="flex-1 font-normal text-[20px] text-[#000] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
