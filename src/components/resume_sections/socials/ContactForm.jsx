import { useState, useMemo } from 'react';
import { Send, Check, AlertCircle, RotateCcw, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { Select } from '@animate-ui/react/primitives/base-ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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

const emailformat = cn(
  'text-[10px] md:text-xs px-1.5 py-0.5 rounded',
  'border border-transparent',
  'bg-base-content/10 text-base-content/60 font-medium hover:font-bold',
  'hover:text-base-content hover:border-base-content',
  'font-medium grayscale cursor-default',
  'transition-all duration-200 hover:bg-base-content/20 hover:grayscale-0'
);

const SYSTEM_CATEGORIES = [
  'Full-Stack Web App',
  'E-Commerce / Store',
  'Admin / Management System',
  'Landing Page / Showcase',
  'API & Backend Service',
  'Other / Custom System',
];

const PRICE_RANGES = {
  PHP: [
    '< ₱5,000',
    '₱5,000 - ₱15,000',
    '₱15,000 - ₱30,000',
    '₱30,000 - ₱60,000',
    '₱60,000+',
    'Flexible / Open',
  ],
  USD: [
    '< $100',
    '$100 - $300',
    '$300 - $600',
    '$600 - $1,200',
    '$1,200+',
    'Flexible / Open',
  ],
};

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('project'); // 'project' | 'general'
  const [selectedCategory, setSelectedCategory] = useState(SYSTEM_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState('');
  const [currency, setCurrency] = useState('PHP'); // 'PHP' | 'USD'
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES.PHP[1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const categoryItems = useMemo(
    () => SYSTEM_CATEGORIES.map((cat) => ({ label: cat, value: cat })),
    []
  );

  const priceItems = useMemo(
    () => PRICE_RANGES[currency].map((range) => ({ label: range, value: range })),
    [currency]
  );

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
    setSelectedPriceRange(PRICE_RANGES[curr][1]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle' && status !== 'submitting') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    if (activeTab === 'general' && !formData.subject.trim()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const categoryTitle =
      selectedCategory === 'Other / Custom System' && customCategory.trim()
        ? `Custom (${customCategory.trim()})`
        : selectedCategory;

    const formattedSubject =
      activeTab === 'project'
        ? `[Project Inquiry: ${categoryTitle} | ${currency} ${selectedPriceRange}] from ${formData.name.trim()}`
        : `[General Inquiry] ${formData.subject.trim()} from ${formData.name.trim()}`;

    const formattedMessage =
      activeTab === 'project'
        ? [
          `=== PROJECT & PRICING INQUIRY ===`,
          `• System Category: ${categoryTitle}`,
          `• Budget / Price Range: ${selectedPriceRange} (${currency})`,
          ``,
          `=== CLIENT DESCRIPTION & REQUIREMENTS ===`,
          formData.message.trim(),
        ].join('\n')
        : [
          `=== GENERAL INQUIRY / QUESTION ===`,
          `• Subject: ${formData.subject.trim()}`,
          ``,
          `=== MESSAGE ===`,
          formData.message.trim(),
        ].join('\n');

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
          _subject: formattedSubject,
          message: formattedMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCustomCategory('');
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
    setSelectedCategory(SYSTEM_CATEGORIES[0]);
    setCustomCategory('');
    setCurrency('PHP');
    setSelectedPriceRange(PRICE_RANGES.PHP[1]);
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="">
      <Tabs value={activeTab} onValueChange={(val) => { if (val) setActiveTab(val); }} className="space-y-2">
        {/* Switch / Tabs placed ABOVE and OUTSIDE the main form card */}
        <div className="space-y-1">
          <TabsList className="inline-flex rounded p-0.5 border border-gray-300 dark:border-white/20 bg-base-content/5">
            <TabsTrigger value="project" className="px-3 py-1 text-[10px] md:text-xs font-semibold">
              Project
            </TabsTrigger>
            <TabsTrigger value="general" className="px-3 py-1 text-[10px] md:text-xs font-semibold">
              General
            </TabsTrigger>
          </TabsList>
          <p className="text-[8px] md:text-[9.5px] text-base-content/50">
            {activeTab === 'project'
              ? 'Looking to build a system? Select your system category and target budget to receive an estimate.'
              : 'Have general questions, collaboration ideas, or inquiries? Drop a direct message below.'}
          </p>
        </div>
        {/* Category Title & Direct Email */}
        <div className="mb-2">
          <h3 className="text-[10px] md:text-xs text-base-content">
            Send a Message / Inquire : <span className={emailformat}>jingjing052704@gmail.com</span>
          </h3>
        </div>
        {/* Main Form Card Container */}
        <div className="p-3 md:p-4 rounded-lg bg-textured border border-black/50 dark:border-white/50 shadow-xl space-y-3.5">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* TAB 1: Filtered Software / Project Inquiry */}
            <TabsContent value="project" className="space-y-3.5">
              {/* System Category & Price Range - Beside each other on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* System Category Select Dropdown */}
                <div className="space-y-1">
                  <div className="flex items-center min-h-[22px]">
                    <label className="block text-[8px] md:text-[10px] font-semibold text-base-content/80">
                      System Category :
                    </label>
                  </div>

                  <Select.Root
                    items={categoryItems}
                    value={selectedCategory}
                    onValueChange={(val) => {
                      if (val) setSelectedCategory(val);
                    }}
                  >
                    <Select.Trigger aria-label="System Category">
                      <Select.Value placeholder="Select system category" />
                      <Select.Icon />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Positioner alignItemWithTrigger={false} sideOffset={4}>
                        <Select.Popup>
                          <Select.List>
                            {categoryItems.map((cat) => (
                              <Select.Item key={cat.value} value={cat.value}>
                                <Select.ItemText>{cat.label}</Select.ItemText>
                                <Select.ItemIndicator />
                              </Select.Item>
                            ))}
                          </Select.List>
                        </Select.Popup>
                      </Select.Positioner>
                    </Select.Portal>
                  </Select.Root>

                  {/* Custom Description / Title if "Other / Custom System" is picked */}
                  {selectedCategory === 'Other / Custom System' && (
                    <div className="pt-1">
                      <input
                        type="text"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        placeholder="Specify system type (e.g. Mobile App, Telegram Bot)..."
                        className={cn(inputClasses, 'text-[9px] md:text-[10px]')}
                      />
                    </div>
                  )}
                </div>

                {/* Price Range & Currency Select Dropdown */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between min-h-[22px]">
                    <label className="block text-[8px] md:text-[10px] font-semibold text-base-content/80">
                      Price Range :
                    </label>

                    {/* Currency Selector (PHP / USD) */}
                    <div className="inline-flex rounded p-0.5 border border-gray-300 dark:border-white/20 bg-base-content/5">
                      <button
                        type="button"
                        onClick={() => handleCurrencyChange('PHP')}
                        className={cn(
                          'px-2 py-0.5 text-[8px] md:text-[9px] rounded transition-all cursor-pointer font-medium',
                          currency === 'PHP'
                            ? 'bg-base-content text-base-100 font-bold'
                            : 'text-base-content/60 hover:text-base-content'
                        )}
                      >
                        ₱ PHP
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCurrencyChange('USD')}
                        className={cn(
                          'px-2 py-0.5 text-[8px] md:text-[9px] rounded transition-all cursor-pointer font-medium',
                          currency === 'USD'
                            ? 'bg-base-content text-base-100 font-bold'
                            : 'text-base-content/60 hover:text-base-content'
                        )}
                      >
                        $ USD
                      </button>
                    </div>
                  </div>

                  <Select.Root
                    items={priceItems}
                    value={selectedPriceRange}
                    onValueChange={(val) => {
                      if (val) setSelectedPriceRange(val);
                    }}
                  >
                    <Select.Trigger aria-label="Price Range">
                      <Select.Value placeholder="Select target budget" />
                      <Select.Icon />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Positioner alignItemWithTrigger={false} sideOffset={4}>
                        <Select.Popup>
                          <Select.List>
                            {priceItems.map((item) => (
                              <Select.Item key={item.value} value={item.value}>
                                <Select.ItemText>{item.label}</Select.ItemText>
                                <Select.ItemIndicator />
                              </Select.Item>
                            ))}
                          </Select.List>
                        </Select.Popup>
                      </Select.Positioner>
                    </Select.Portal>
                  </Select.Root>
                </div>
              </div>
            </TabsContent>

            {/* TAB 2: General Questions Subject */}
            <TabsContent value="general" className="space-y-3.5">
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-[8px] md:text-[10px] font-semibold text-base-content/80">
                  Subject <span className="text-error">*</span> :
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required={activeTab === 'general'}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Question regarding tech stack / Collaboration inquiry"
                  className={inputClasses}
                />
              </div>
            </TabsContent>

            <hr className="border-gray-300 dark:border-white/20" />

            {/* Common Contact Fields (Name & Email side-by-side on desktop, stacked on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-[8px] md:text-[10px] text-base-content/80">
                  Your Name <span className="text-error">*</span> :
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
                  Your Email <span className="text-error">*</span> :
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

            {/* Message / Description */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-[8px] md:text-[10px] text-base-content/80">
                {activeTab === 'project'
                  ? 'System Description / Requirements * :'
                  : 'Message * :'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  activeTab === 'project'
                    ? 'Describe what you need: target features, existing references, specific requirements, or deadlines...'
                    : 'Write your questions or message here...'
                }
                className={cn(inputClasses, 'resize-y min-h-[90px]')}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2">
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
                    <span>
                      {activeTab === 'project' ? 'Send Software Inquiry' : 'Send Message'}
                    </span>
                  </>
                )}
              </button>

              {(formData.name ||
                formData.email ||
                formData.subject ||
                formData.message ||
                customCategory ||
                selectedCategory !== SYSTEM_CATEGORIES[0] ||
                currency !== 'PHP' ||
                selectedPriceRange !== PRICE_RANGES.PHP[1]) && (
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
                <p className="font-semibold text-success">
                  {activeTab === 'project' ? 'Inquiry sent successfully!' : 'Message sent successfully!'}
                </p>
                <p className="text-base-content/80 text-[8px] md:text-[10px]">
                  Thank you for reaching out. Your submission has been delivered directly to my inbox and I will respond to your email soon.
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
      </Tabs>
    </div>
  );
}
