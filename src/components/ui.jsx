import { useEffect, useState } from 'react'

export const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em]" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
)

const copyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g></svg>
)

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 text-success" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5"/></svg>
)

export const emailIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>)

export const phoneIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"/></svg>)

function SectionHeading({ lineOne, lineTwo, className = '' }) {
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

export function SectionHeader({ index, lineOne, lineTwo, detail }) {
  return (
    <header>
      <div className="flex items-start justify-between gap-4">
        <SectionHeading lineOne={lineOne} lineTwo={lineTwo} className="min-w-0" />
        {index != null && (
          <span
            aria-hidden="true"
            className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-300 shrink-0 pt-1 md:pt-2"
          >
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>
      {detail && <p className="mt-1 text-xs text-gray-500 leading-relaxed max-w-lg">{detail}</p>}
      <hr className="mt-3 mb-3 border-gray-300" />
    </header>
  )
}

export function SectionMeta({ children }) {
  if (!children) return null

  return (
    <p className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
      {children}
    </p>
  )
}

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

export function ContactListRow({ icon, label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
      <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0 [&_svg]:size-5">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs md:text-sm font-bold leading-snug">{value}</div>
        <div className="text-[10px] uppercase font-semibold opacity-60 mt-1">{label}</div>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
        data-tip={copied ? 'Copied!' : 'Copy'}
        aria-label={`Copy ${label}`}
      >
        {copied ? checkIcon : copyIcon}
      </button>
    </li>
  )
}

export function DetailModal({ id, children }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box max-w-2xl max-h-[85vh] overflow-y-auto">
        <form method="dialog">
          <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  )
}

export function CertificateThumb({ title, image }) {
  return (
    <div className="dropdown dropdown-top dropdown-hover">
      <div tabIndex={0} role="button" className="w-20 h-12 rounded-box bg-base-300 overflow-hidden shrink-0 cursor-pointer border border-base-300">
        <img src={image} alt={title} className="w-full h-full object-cover object-top" />
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

function ExtraListRows({ items }) {
  if (!items?.length) return null

  return (
    <ul className="list rounded-box gap-3 mb-3">
      {items.map((item) => (
        <li key={item.label} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
          <div className="min-w-0">
            <div className="text-[10px] uppercase font-semibold opacity-60">{item.label}</div>
            <div className="text-xs md:text-sm font-bold mt-0.5">{item.title}</div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function SectionExtras({ items }) {
  return <ExtraListRows items={items} />
}

export function ContactForm({ recipientEmail }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(timer)
  }, [toast])

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio inquiry',
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Send failed')

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setToast({ type: 'success', message: 'Message sent successfully.' })
    } catch {
      setStatus('error')
      setToast({ type: 'error', message: 'Something went wrong. Email me directly instead.' })
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="rounded-box p-4 md:p-5 space-y-4 bg-base-300 shadow-xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="form-control w-full">
          <span className="text-[10px] uppercase font-semibold opacity-60 mb-1">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={update('name')}
            required
          />
        </label>
        <label className="form-control w-full">
          <span className="text-[10px] uppercase font-semibold opacity-60 mb-1">Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            value={form.email}
            onChange={update('email')}
            required
          />
        </label>
      </div>
      <label className="form-control w-full">
        <span className="text-[10px] uppercase font-semibold opacity-60 mb-1">Subject</span>
        <input
          type="text"
          name="subject"
          placeholder="Project inquiry, collaboration, etc."
          className="input input-bordered w-full"
          value={form.subject}
          onChange={update('subject')}
        />
      </label>
      <label className="form-control w-full">
        <span className="text-[10px] uppercase font-semibold opacity-60 mb-1">Message</span>
        <textarea
          name="message"
          placeholder="Tell me about your project, timeline, and goals..."
          className="textarea textarea-bordered w-full min-h-32"
          value={form.message}
          onChange={update('message')}
          required
        />
      </label>
      <button type="submit" className="btn btn-neutral font-mono mt-3" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
    {toast && (
      <div className="toast toast-end toast-bottom z-[100]">
        <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          <span>{toast.message}</span>
        </div>
      </div>
    )}
    </>
  )
}

export function PortfolioFooter({ stack, name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded-box p-10 mt-8 border border-gray-200">
      <nav>
        <p className="text-[10px] uppercase font-semibold opacity-60 mb-3">Built with</p>
        <div className="grid grid-flow-col gap-4">
          {stack.map((item) => (
            <span key={item.name} className="tooltip tooltip-top" data-tip={item.name}>
              <span className="size-6 inline-flex [&_svg]:w-full [&_svg]:h-full">{item.icon}</span>
            </span>
          ))}
        </div>
      </nav>
      <aside>
        <p className="text-xs opacity-70">© {year} {name}. All rights reserved.</p>
      </aside>
    </footer>
  )
}
