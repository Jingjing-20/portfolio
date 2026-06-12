export default function SectionHeading({ lineOne, lineTwo, className = '' }) {
  return (
    <h2 className={`text-shadow-lg uppercase text-4xl md:text-8xl font-extrabold ${className}`}>
      <span className="md:hidden">
        {lineOne} <span className="text-gray-500">{lineTwo}</span>
      </span>
      <span className="hidden md:block">
        {lineOne}
        <br />
        <span className="text-gray-500">{lineTwo}</span>
      </span>
    </h2>
  )
}
