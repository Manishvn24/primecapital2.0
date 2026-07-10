const FeatureItem = ({ feature }) => {
  const { title, description, icon: Icon } = feature;

  return (
    <div className="flex flex-col gap-2">
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-[#D4AF37]" />
        <h3 className="text-sm font-semibold text-[#0B2346]">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureItem;
