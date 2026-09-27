import { useState } from 'react';
import { Send, Check, Copy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

const inputClasses = cn(
  'w-full rounded-md p-2 text-[10px] md:text-xs text-base-content bg-theme',
  'border border-solid border-gray-300 dark:border-white/20',
  'focus:border-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary',
  'placeholder:text-base-content/40'
);

const actionBtnClasses = cn(
  'shadow-xl inline-flex items-center justify-center gap-1.5 p-2 rounded-sm',
  'bg-textured border border-solid border-gray-300 dark:border-white/20 hover:border-double hover-theme-switch',
  'text-[10px] md:text-xs font-medium cursor-pointer text-base-content transition-all'
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subjectText = formData.subject.trim() || `Inquiry from ${formData.name}`;
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoUrl = `mailto:jingjing052704@gmail.com?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyMessage = async () => {
    const fullMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(fullMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setCopied(false);
  };

  return (
    <div className="pt-2">
      {/* Category Title & Description */}
      <div className="mb-3">
        <h3 className="text-[10px] md:text-xs text-base-content">
          Direct Message :
        </h3>
        <p className="text-[8px] md:text-[10px] text-base-content/50">
          Send a direct message or project inquiry straight to my inbox
        </p>
      </div>

      <div className="p-3 md:p-4 rounded-lg bg-textured border-3 border-solid border-gray-300 dark:border-white/20 shadow-xl space-y-3">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-[8px] md:text-[10px] text-base-content/80">
                Your Name <span className="text-error">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Juan Dela Cruz"
                className={inputClasses}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-[8px] md:text-[10px] text-base-content/80">
                Your Email <span className="text-error">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. juan@example.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="block text-[8px] md:text-[10px] text-base-content/80">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Inquiry / Collaboration"
              className={inputClasses}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-[8px] md:text-[10px] text-base-content/80">
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={cn(inputClasses, 'resize-y min-h-[90px]')}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="submit"
              className={actionBtnClasses}
            >
              <Send className="h-3 w-3 md:h-3.5 md:w-3.5" />
              <span>Send via Email</span>
            </button>

            {formData.message && (
              <button
                type="button"
                onClick={handleCopyMessage}
                className={actionBtnClasses}
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 md:h-3.5 md:w-3.5 text-success" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            )}

            {(formData.name || formData.email || formData.subject || formData.message) && (
              <button
                type="button"
                onClick={handleReset}
                className={cn(actionBtnClasses, 'text-base-content/60')}
                title="Reset form"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </form>

        {submitted && (
          <div className="p-2.5 rounded-md bg-base-300/40 border border-gray-300 dark:border-white/20 text-[10px] md:text-xs text-base-content flex items-start gap-2">
            <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold">Email client opened!</p>
              <p className="text-base-content/70 text-[8px] md:text-[10px]">
                If your email client didn't open automatically, you can click "Copy Text" above and send it directly to{' '}
                <a
                  href="mailto:jingjing052704@gmail.com"
                  className="underline font-medium text-base-content"
                >
                  jingjing052704@gmail.com
                </a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
