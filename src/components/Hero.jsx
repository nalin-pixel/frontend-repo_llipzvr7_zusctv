import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[360px] sm:h-[420px] lg:h-[520px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />
      <div className="relative z-10 p-6 sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium shadow-sm">
          ✨ SmartLink
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-2xl leading-tight">
          Organize links, tasks, and deadlines in one smart dashboard
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Save favorite links, set reminders for events, and manage daily tasks — beautifully organized and searchable.
        </p>
      </div>
    </section>
  );
}
