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

export default function CopyableField({ label, value, dark = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="min-w-0 flex-1 text-left"
        aria-label={`Copy ${label}`}
      >
        <div className={`text-[10px] uppercase tracking-widest mb-0.5 ${dark ? 'text-neutral-400' : 'text-slate-400'}`}>
          {label}
        </div>
        <div className={`text-sm font-semibold truncate ${dark ? 'text-neutral-100' : 'text-slate-700'}`}>{value}</div>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-ghost btn-xs btn-square shrink-0"
        aria-label={`Copy ${label}`}
      >
        {copied ? checkIcon : copyIcon}
      </button>
    </div>
  )
}
