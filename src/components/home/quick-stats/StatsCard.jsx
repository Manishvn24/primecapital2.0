const StatCard = ({ stat }) => {
  const { number, label } = stat;

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-[#D4AF37] lg:text-2xl">
        {number}
      </h3>

      <p className="mt-1 text-sm font-medium text-slate-300 lg:text-base">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
