const VacancyCard = ({ title, li1, li2, li3 }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[41rem] min-w-[20rem] rounded-2xl p-8 justify-center item-center gradient-vacancies">
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        {title}
      </h1>
      <ul className="flex-1 mt-[16px] font-normal text-[18px] text-white leading-[32.4px]">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </ul>
    </div>
  );
};

export default VacancyCard;
