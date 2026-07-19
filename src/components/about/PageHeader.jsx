const PageHeader = ({ badge, title, description }) => {
  return (
    <section className="border-b border-gray-100 bg-[#F8F6F1]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
            {badge}
          </p>
          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-[#0B2346] sm:text-5xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
