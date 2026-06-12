import { useState } from 'react'
import { checkIcon, copyIcon } from './icons'

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

export default function ContactListRow({ icon, label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <li className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
      <div className="size-10 rounded-box bg-white/50 flex items-center justify-center shrink-0 [&_svg]:size-5">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs md:text-sm font-bold leading-snug">{value}</div>
        <div className="text-[10px] uppercase font-semibold opacity-60 mt-1">{label}</div>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top"
        data-tip={copied ? 'Copied!' : 'Copy'}
        aria-label={`Copy ${label}`}
      >
        {copied ? checkIcon : copyIcon}
      </button>
    </li>
  )
}
