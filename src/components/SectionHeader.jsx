const SectionHeader = ({ title, subtitle, id }) => (
  <div className="mb-6" id={id}>
    <h2 className="font-headline text-2xl md:text-3xl font-bold text-hampton-primary">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-1 text-hampton-text/50 font-body text-sm md:text-base">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
