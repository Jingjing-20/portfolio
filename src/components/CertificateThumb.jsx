export default function CertificateThumb({ title, image }) {
  return (
    <div className="dropdown dropdown-top dropdown-hover">
      <div tabIndex={0} role="button" className="size-10 rounded-box bg-white/50 overflow-hidden shrink-0 cursor-pointer border border-base-300">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[100] mb-2 p-0 bg-transparent shadow-none border-0 pointer-events-none"
      >
        <img
          src={image}
          alt={title}
          className="w-72 max-w-[70vw] rounded-box shadow-2xl border border-base-300 bg-white"
        />
      </div>
    </div>
  )
}
