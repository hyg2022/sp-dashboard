const VideoThumbnail = ({ content }) => {
  return (
    <div className="space-y-6">
      {/* YouTube thumbnail */}
      <div className="aspect-video bg-hampton-primary rounded-2xl relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-hampton-secondary blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-hampton-accent blur-2xl" />
        </div>

        {/* Main text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <p className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            {content.thumbnailText}
          </p>
          <p className="font-body text-hampton-secondary text-lg md:text-xl mt-2 font-medium">
            {content.thumbnailSubtext}
          </p>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Video title bar */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/90">
          <p className="font-body text-white text-sm font-medium truncate">
            {content.videoTitle}
          </p>
          <p className="font-body text-white/50 text-xs">
            Moneywise &middot; Sam Parr
          </p>
        </div>
      </div>

      {/* Cold open script */}
      <div className="bg-hampton-light rounded-xl p-5">
        <h4 className="font-headline text-lg font-bold text-hampton-primary mb-2">
          Cold Open Script
        </h4>
        <p className="font-body text-sm text-hampton-text/70 italic leading-relaxed">
          &ldquo;{content.coldOpen}&rdquo;
        </p>
      </div>

      {/* Video structure timeline */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h4 className="font-headline text-lg font-bold text-hampton-primary mb-4">
          Video Structure
        </h4>
        <div className="space-y-0">
          {content.videoStructure.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
              <span className="shrink-0 text-xs font-mono text-hampton-accent font-medium bg-hampton-light px-2 py-1 rounded">
                {item.time}
              </span>
              <span className="font-body text-sm text-hampton-text/70">{item.section}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
