const NewFeatures = ({ title, bgColor, subtitle }) => {
  const styles = {
    background: `${bgColor}`,
  };
  return (
    <div
      className="flex-1 flex flex-col sm:max-w-[41rem] min-w-[20rem] rounded-2xl p-8 justify-center item-center"
      style={styles}
    >
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-black">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-black leading-[32.4px]">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
