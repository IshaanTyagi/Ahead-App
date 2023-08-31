import styles from '../../styles';

const StartSteps = ({ text }) => (
  <div className="flex-1 flex flex-col sm:max-w-[350px] min-w-[210px]">
    <p className="flex-1 font-normal text-[20px] text-[#000] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
