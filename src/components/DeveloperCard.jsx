import React from 'react'
import profileImage from '../assets/gian.png'

export default function DeveloperCard() {
const name = 'Gian Carlo N. Ulep'
const role = 'Software Developer'
const birthDate = '05/27/2004'
const gender = 'Male'
const age = '22'
const languages = 'Filipino, English'

return ( <div className="hover-3d my-6 mx-auto w-full max-w-sm">

  <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">

    {/* Subtle glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

    <div className="relative">

      {/* Profile */}
      <div className="flex justify-center">
        <div className="w-40 h-40 md:w-46 md:h-46 overflow-hidden rounded-full border-4 border-neutral-700 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="mt-4 text-center text-2xl md:text-4xl md:text-3xl font-bold tracking-tight text-white">
        {name}
      </h1>

      {/* Role */}
      <p className="font-extrabold mt-1 text-center text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400">
        {role}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-neutral-600" />

      {/* Information */}
      <div className="space-y-1 md:space-y-2 font-bold text-xs md:text-sm leading-relaxed">

      <p className="text-neutral-400">
          Adress:
          <span className="ml-2 text-white">Valladolid, Negros Occidental</span>
        </p>

        <p className="text-neutral-400">
          Languages:
          <span className="ml-2 text-white">{languages}</span>
        </p>

        <p className="text-neutral-400">
          Birth Date:
          <span className="ml-2 text-white">{birthDate}</span>
        </p>

        <p className="text-neutral-400">
          Gender:
          <span className="ml-2 text-white">{gender}</span>
        </p>

        <p className="text-neutral-400">
          Age:
          <span className="ml-2 text-white">{age}</span>
        </p>
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
