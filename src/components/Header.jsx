const Header = () => (
  <header className="bg-hampton-primary text-white px-6 py-10 md:py-14">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Sam Parr Content Dashboard
        </h1>
        <p className="mt-2 text-white/60 font-body text-base md:text-lg">
          Social Media Coordinator Application &mdash; Content Strategy & Analytics
        </p>
      </div>
      <div className="text-white/40 font-body text-sm">
        <p>Analyzing Twitter, Instagram & Moneywise</p>
        <p className="text-hampton-secondary font-medium">Hampton &middot; Moneywise</p>
      </div>
    </div>
  </header>
);

export default Header;
