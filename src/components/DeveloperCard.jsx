import profileImage from '../assets/gian.png'

export default function DeveloperCard() {
  const name = 'Gian Carlo N. Ulep'
  const role = 'Software Developer'
  const birthDate = '05/27/2004'
  const gender = 'Male'
  const age = '22'
  const languages = 'Filipino, English'

  return (
    <div className="hover-3d my-6 mx-auto w-full max-w-sm">

      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">

        {/* Texture Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
            `,
            backgroundSize: 'auto, 100px 100px',
          }}
        />

        {/* Top Light */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        {/* Card Highlight */}
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-1px_1px_rgba(0,0,0,0.6)] pointer-events-none" />

        {/* Accent Glow */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10">

          {/* Profile */}
          <div className="flex justify-center">
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-neutral-700 bg-neutral-900 shadow-[0_0_40px_rgba(255,255,255,0.08)] md:h-44 md:w-44">
              <img
                src={profileImage}
                alt={name}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="mt-5 text-center text-3xl font-bold tracking-tight text-white">
            {name}
          </h1>

          {/* Role */}
          <p className="mt-2 text-center text-xs font-extrabold uppercase tracking-[0.35em] text-neutral-400">
            {role}
          </p>

          {/* Divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />

          {/* Information */}
          <div className="space-y-2 md:space-y-3 text-sm">

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-xs md:text-sm text-neutral-500">Address</span>
              <span className="text-right text-xs md:text-sm font-medium text-white">
                Negros Occidental, Philippines
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-xs md:text-sm text-neutral-500">Languages</span>
              <span className="text-right text-xs md:text-sm font-medium text-white">
                {languages}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-xs md:text-sm text-neutral-500">Birth Date</span>
              <span className="text-right text-xs md:text-sm font-medium text-white">
                {birthDate}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-xs md:text-sm text-neutral-500">Gender</span>
              <span className="text-right text-xs md:text-sm font-medium text-white">
                {gender}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-xs md:text-sm text-neutral-500">Age</span>
              <span className="text-right text-xs md:text-sm font-medium text-white">
                {age}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Required for hover-3d */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

    </div>
  )
}