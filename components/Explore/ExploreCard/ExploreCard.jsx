const ExploreCard = ({ title, bgColor, subtitle, emoji }) => {
  const styles = {
    background: `${bgColor}`,
  };
  return (
    <div
      className="flex-1 flex flex-col sm:max-w-[41rem] min-w-[20rem] rounded-2xl p-8"
      style={styles}
    >
      <div className="flex flex-row justify-around items-center mt-[26px]">
        <h1 className="font-bold text-[24px] leading-[30.24px] text-black">
          {title}
        </h1>
        <img src={`${emoji}`} className="h-[2rem]" />
      </div>

      <p className="flex-1 mt-[16px] font-normal text-[18px] text-black leading-[32.4px]">
        {subtitle}
      </p>
    </div>
  );
};

export default ExploreCard;
