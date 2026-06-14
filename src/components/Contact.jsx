import React, { useState, useEffect } from 'react'

const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
)

const copyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g></svg>
)

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 text-success" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5"/></svg>
)

const facebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-600" viewBox="0 0 24 24"><path fill="#0f3eed" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
)

const linkedinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-600" viewBox="0 0 24 24"><path fill="#2a65dd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
)

const githubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"/></svg>
)

const indeedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-600" viewBox="0 0 32 32"><path fill="#0f3fd2" d="M19.76 13.745c-3.197 1.64-6.776-1.417-5.661-4.833c1.12-3.417 5.813-3.767 7.423-.552a4 4 0 0 1-1.761 5.389zM15.469.76c3.291-1.197 7.057-1.135 9.875 1.313a4.8 4.8 0 0 1 1.364 1.828c.281.916-1-.095-1.172-.224a12.7 12.7 0 0 0-2.869-1.464C17.115.516 11.864 3.609 8.62 8.421a26 26 0 0 0-3 6.833a4.2 4.2 0 0 1-.281.86c-.145.271-.068-.735-.068-.765c.12-1.005.313-2.005.573-2.985C7.349 7.12 10.683 2.755 15.469.755zm.047 27.995V17.068c.333.036.645.052.979.052c1.516.005 3-.412 4.297-1.193V28.75c0 1.1-.204 1.907-.699 2.439a2.49 2.49 0 0 1-1.932.812a2.44 2.44 0 0 1-1.907-.812c-.489-.537-.744-1.349-.744-2.433z"/></svg>
)

const gmailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 256 193"><title>Gmail</title><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/></svg>
)

const phoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-600" viewBox="0 0 16 16"><title>Phone</title><path fill="currentColor" fill-rule="evenodd" d="M7.808 10.197H6.796L5.859 13H4.485l.937-2.803H3.966l.219-1.25h1.647l.608-1.805H4.991l.226-1.251h1.64l.95-2.844h1.368l-.95 2.844h1.018l.95-2.844h1.374l-.95 2.844h1.51l-.218 1.25h-1.702l-.608 1.805h1.497l-.219 1.251H9.182L8.252 13H6.878zm-.602-1.25h1.012l.615-1.805H7.814z"/></svg>
)

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

export default function Contact() {
  const recipientEmail = 'jingjing052704@gmail.com'
  const phone = '09562657521'
  const contactIntro = "Have a project idea, internship opening, or collaboration in mind? Send a message and I'll get back to you as soon as I can."

  const sectionExtra = {
    label: 'Response time',
    title: '1–2 business days',
    detail: 'I read every message personally — include your timeline and project scope for a faster reply.',
  }

  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(timer)
  }, [toast])

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleCopyEmail = async () => {
    await copyText(recipientEmail)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = async () => {
    await copyText(phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

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

  const socialLinks = [
    {
      label: 'Facebook',
      value: 'Gian Carlo N. Ulep',
      href: 'https://www.facebook.com/Shmingmong',
      icon: facebookIcon,
      type: 'link',
    },
    {
      label: 'LinkedIn',
      value: 'Gian Carlo Ulep',
      href: 'https://www.linkedin.com/in/gian-carlo-ulep-003490346/',
      icon: linkedinIcon,
      type: 'link',
    },
    {
      label: 'Indeed',
      value: 'Gian Carlo N. Ulep',
      href: 'https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-viewjob',
      icon: indeedIcon,
      type: 'link',
    },
    {
      label: 'GitHub',
      value: 'Jingjing-20',
      href: 'https://github.com/Jingjing-20',
      icon: githubIcon,
      type: 'link',
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Let's Work <span className="text-gray-500">Together</span>
            </span>
            <span className="hidden md:block">
              Let's Work
              <br />
              <span className="text-gray-500">Together</span>
            </span>
          </h2>
          <span className="badge badge-outline badge-sm font-mono text-gray-600 font-bold border-gray-300 shrink-0 mt-1 kbd" aria-hidden="true">
            06
          </span>
        </div>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-lg">
          Tell me about your project, timeline, and how I can help — I reply within 1–2 business days.
        </p>
        <hr className="mt-4 mb-4 border-gray-300" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-l-2 border-base-300 space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">{contactIntro}</p>
        
        {/* Extra Response Info */}
        <ul className="list rounded-box gap-3">
          <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start p-3 bg-white/50 rounded-box">
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-semibold opacity-60">{sectionExtra.label}</div>
              <div className="text-xs md:text-sm font-bold mt-0.5">{sectionExtra.title}</div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{sectionExtra.detail}</p>
            </div>
          </li>
        </ul>

        {/* Connect Social Grid */}
        <div>
          <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Connect:</p>
          <ul className="list rounded-box grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {/* Standard Social Links */}
            {socialLinks.map((link) => (
              <li key={link.label} className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-center p-3 bg-white/50 rounded-box flex">
                <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1 ml-3">
                  <div className="text-xs md:text-sm font-bold leading-snug">{link.label}</div>
                  <p className="text-[11px] text-gray-500 truncate">{link.value}</p>
                </div>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                  data-tip="Open link"
                  aria-label={`Open ${link.label}`}
                >
                  {externalLinkIcon}
                </a>
              </li>
            ))}

            {/* Gmail Row */}
            <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-center p-3 bg-white/50 rounded-box flex">
              <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0">
                {gmailIcon}
              </div>
              <div className="min-w-0 flex-1 ml-3">
                <div className="text-xs md:text-sm font-bold leading-snug">Gmail</div>
                <p className="text-[11px] text-gray-500 truncate">{recipientEmail}</p>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                data-tip={copiedEmail ? 'Copied!' : 'Copy email'}
                aria-label="Copy Gmail Address"
              >
                {copiedEmail ? checkIcon : copyIcon}
              </button>
            </li>

            {/* Phone Row */}
            <li className="border border-gray-200 list-row hover:bg-base-300 hover:shadow-xl transition-colors items-center p-3 bg-white/50 rounded-box flex">
              <div className="size-10 rounded-box bg-base-300 flex items-center justify-center shrink-0">
                {phoneIcon}
              </div>
              <div className="min-w-0 flex-1 ml-3">
                <div className="text-xs md:text-sm font-bold leading-snug">Phone</div>
                <p className="text-[11px] text-gray-500 font-mono">{phone}</p>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top font-mono"
                data-tip={copiedPhone ? 'Copied!' : 'Copy phone'}
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? checkIcon : copyIcon}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="mt-4">
          <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Send a message:</p>
          <form onSubmit={handleSubmit} className="rounded-box p-4 md:p-5 space-y-3 bg-base-300 shadow-xl border border-gray-200">
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
        </div>

        {/* Section Meta */}
        <p className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          Messages delivered to {recipientEmail}
        </p>
      </div>
    </section>
  )
}
