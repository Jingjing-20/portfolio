// Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear()
  const name = 'Gian Carlo N. Ulep'

  return (
    <footer className="duration-300 shadow-md hover:shadow-xl bg-base-300 border border-gray-300 hover:border-gray-400 text-base-content mt-6 rounded-box">
      <div className="flex w-full flex-col">
        {/* Upper Section - 3 Columns */}
        <div className="footer sm:footer-horizontal p-10 pb-8">
          {/* Content removed */}
        </div>

        {/* Divider */}
        <div className="divider px-5">
          {/* Content removed */}
        </div>

        {/* Lower Section - Centered Copyright */}
        <div className="p-3">
          <div className="text-center">
            <p className="text-[10px] md:text-xs opacity-50 font-bold">© {year} {name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}