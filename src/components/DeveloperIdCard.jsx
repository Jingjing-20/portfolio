import profileImage from '../assets/gian.png'
import { profileData } from '../data/profileData'

export default function DeveloperIdCard() {
  return (
    <div className="hover-3d my-12 mx-auto md:mx-2 w-full max-w-lg md:max-w-none">
      <figure className="w-full md:w-80 rounded-2xl overflow-hidden m-0 shadow-2xl border-2 border-neutral-700">
        <div className="bg-neutral-900 text-neutral-content">
          <div className="text-white px-4 py-2.5 flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase">BS in Information Technology</span>
            <span className="text-[10px] font-bold tracking-widest opacity-80">2026</span>
          </div>
          <div className="p-4 md:p-5 flex flex-row md:flex-col items-stretch gap-4">
            <div className="w-28 sm:w-32 md:w-full shrink-0 border-4 border-neutral-700 overflow-hidden bg-neutral-800 aspect-square md:max-w-[10.5rem] md:mx-auto rounded-lg">
              <img
                src={profileImage}
                alt={profileData.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center md:items-center gap-3">
              <div className="w-full text-left md:text-center md:border-b md:border-neutral-700 md:pb-3">
                <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1">Full Name</div>
                <div className="text-sm font-bold uppercase tracking-wide leading-tight">{profileData.fullName}</div>
              </div>
              <div className="w-full space-y-2.5 text-left">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Role</div>
                  <div className="text-sm font-semibold text-neutral-100">{profileData.role}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Address</div>
                  <div className="text-sm font-semibold text-neutral-100 leading-snug">{profileData.address}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Birthdate</div>
                  <div className="text-sm font-semibold text-neutral-100">{profileData.birthdate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>

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
