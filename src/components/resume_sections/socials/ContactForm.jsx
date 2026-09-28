import { useState } from 'react';
import { Send, Check, AlertCircle, RotateCcw, Loader2 } from 'lucide-react';
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
  'text-[10px] md:text-xs font-medium cursor-pointer text-base-content transition-all',
  'disabled:opacity-50 disabled:pointer-events-none'
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle' && status !== 'submitting') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jingjing052704@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="pt-2">
      {/* Category Title & Description */}
      <div className="mb-3">
        <h3 className="text-[10px] md:text-xs text-base-content">
          Send a Message : <span className="font-extrabold text-[10px] md:text-xs">jingjing052704@gmail.com</span>
        </h3>
        <p className="text-[8px] md:text-[10px] text-base-content/50">
          Fill out the form below to send a message directly to my inbox
        </p>
      </div>

      <div className="p-3 md:p-4 rounded-lg bg-textured border border-gray-600 dark:border-gray-300 shadow-xl space-y-3">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-[8px] md:text-[10px] text-base-content/80">
                Your Name <span className="text-error font-bold">*</span>
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
                Your Email <span className="text-error font-bold">*</span>
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
              Subject <span className="text-error font-bold">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Inquiry / Collaboration"
              className={inputClasses}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-[8px] md:text-[10px] text-base-content/80">
              Message <span className="text-error font-bold">*</span>
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
              disabled={status === 'submitting'}
              className={actionBtnClasses}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-3 w-3 md:h-3.5 md:w-3.5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {(formData.name || formData.email || formData.subject || formData.message) && (
              <button
                type="button"
                onClick={handleReset}
                disabled={status === 'submitting'}
                className={cn(actionBtnClasses, 'text-base-content/60')}
                title="Reset form"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </form>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="p-2.5 rounded-md bg-success/15 border border-success/30 text-[10px] md:text-xs text-base-content flex items-start gap-2 animate-in fade-in duration-300">
            <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold text-success">Message sent successfully!</p>
              <p className="text-base-content/80 text-[8px] md:text-[10px]">
                Thank you for reaching out. Your message has been delivered directly to my inbox and I will get back to you soon.
              </p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-2.5 rounded-md bg-error/15 border border-error/30 text-[10px] md:text-xs text-base-content flex items-start gap-2 animate-in fade-in duration-300">
            <AlertCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold text-error">Failed to send message</p>
              <p className="text-base-content/80 text-[8px] md:text-[10px]">
                {errorMessage || 'Please check your connection or try again later.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
