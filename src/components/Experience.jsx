// Experience.jsx
import { useState } from 'react';
import PGNOImg from '@/assets/experience/pgno.png';
import { Briefcase } from '@/components/animate-ui/icons/briefcase';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/reui/timeline';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@/components/animate-ui/components/headless/dialog';
import { cn } from '@/lib/utils';

// Stack icons
const stackIcons = {

  'Leaflet': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649c-2.424 3.91-3.116 6.988-2.237 9.882s2.559 2.763 3.516 3.717c.958.954 2.257 2.113 4.332 1.645c2.717-.613 5.335-2.426 6.638-7.508s.448-9.533-.103-11.99A35 35 0 0 0 17.69 0m-.138.858l-9.22 21.585l-.574-.577Z"/>
      </svg>
    ),
  },
  'MySQL': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M20.422 17.337c-1.088-.03-1.932.081-2.64.379c-.203.082-.53.082-.557.338c.11.108.122.284.218.433c.163.27.449.635.707.824l.87.622c.531.325 1.13.514 1.647.838c.299.19.598.433.898.636c.152.108.244.284.435.352v-.041c-.095-.122-.123-.297-.217-.433l-.409-.392a6.4 6.4 0 0 0-1.415-1.365c-.435-.298-1.387-.703-1.564-1.203l-.027-.03c.299-.03.653-.136.939-.217c.463-.121.884-.095 1.36-.216l.653-.19v-.12c-.245-.244-.422-.569-.68-.798a18 18 0 0 0-2.245-1.663c-.422-.27-.966-.447-1.415-.676c-.164-.081-.435-.122-.53-.257c-.246-.297-.381-.69-.558-1.041l-1.116-2.353c-.245-.527-.395-1.054-.694-1.54c-1.4-2.3-2.925-3.692-5.265-5.058c-.503-.284-1.101-.406-1.738-.554l-1.02-.055c-.218-.094-.436-.351-.626-.473c-.775-.487-2.775-1.541-3.347-.151c-.368.878.544 1.743.854 2.19c.231.31.53.662.694 1.014c.091.23.122.473.217.716c.218.595.422 1.258.708 1.812c.152.284.312.582.503.839c.109.151.3.216.34.46c-.19.27-.204.675-.313 1.014c-.49 1.528-.3 3.42.395 4.545c.218.338.731 1.082 1.428.798c.613-.244.476-1.014.653-1.69c.041-.162.014-.27.095-.379v.03l.558 1.123c.422.662 1.157 1.352 1.769 1.812c.326.243.584.662.992.81v-.04h-.026c-.082-.121-.205-.176-.314-.27a6.6 6.6 0 0 1-.707-.812a17.4 17.4 0 0 1-1.523-2.46c-.218-.42-.409-.879-.585-1.298c-.083-.162-.083-.406-.218-.487c-.205.297-.503.555-.654.92c-.258.58-.285 1.297-.38 2.041c-.055.014-.03 0-.055.03c-.435-.107-.585-.554-.748-.932c-.408-.96-.476-2.501-.123-3.61c.096-.284.504-1.177.341-1.447c-.082-.257-.354-.405-.504-.608a5.5 5.5 0 0 1-.49-.865c-.325-.758-.489-1.596-.843-2.353c-.163-.352-.449-.717-.68-1.041c-.259-.365-.544-.622-.748-1.055c-.068-.151-.163-.392-.054-.554c.026-.108.081-.152.19-.176c.176-.151.68.04.857.121c.503.203.925.392 1.347.676c.19.135.394.392.64.46h.285c.436.095.925.03 1.333.152c.72.23 1.374.567 1.96.933a12 12 0 0 1 4.244 4.624c.163.311.23.595.38.92c.287.662.64 1.338.926 1.987c.286.636.558 1.285.966 1.812c.204.284 1.02.433 1.387.582c.272.12.694.23.94.378c.461.284.924.609 1.359.92c.217.162.898.5.939.77zM6.548 5.588a2.2 2.2 0 0 0-.557.068v.03h.027c.109.216.3.365.435.555l.313.649l.027-.03c.19-.136.286-.352.286-.676c-.082-.095-.095-.19-.163-.284c-.082-.135-.259-.203-.368-.311" clipRule="evenodd"/>
      </svg>
    ),
  },
  'PHP': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209q.086-.457-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z"/>
      </svg>
    ),
  },
  'Tailwind CSS': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/>
      </svg>
    ),
  },
  'JavaScript': {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"/>
      </svg>
    ),
  },
};

const PGNO_EXPERIENCE = {
  step: 1,
  company: 'Provincial Government of Negros Occidental : General Services Office - Property Management Division',
  logo: PGNOImg,
  logoInitials: 'PG',
  employmentType: 'Internship',
  durationMonths: '4 mos',
  location: 'Bacolod, Negros Occidental, Philippines',
  workMode: 'On-site',
  role: 'Software Developer & Systems Administrator',
  dateRange: 'Feb 2026 – May 2026',
  description: [
    'Developed GSO-ULPMMS, a centralized platform for managing provincial lots and properties, integrating property monitoring, document management, beneficiary tracking, and geographic visualization.',
  ],
  keyContributions: [
    'Built lot allocation and property donation modules.',
    'Migrated legacy records into a unified database.',
    'Implemented beneficiary and amortization payment tracking.',
    'Integrated interactive property maps with Leaflet.',
    'Built secure document management with scanner support.',
    'Created Excel import and export reporting features.',
    'Designed real-time statistics dashboards.',
    'Implemented RBAC and authentication workflows.',
  ],
  stack: ['Leaflet', 'MySQL', 'PHP', 'Tailwind CSS', 'JavaScript'],
};

const outlineButtonWithLabelClasses = cn(
  "shadow-xl inline-flex items-center justify-center gap-2 rounded-md p-2",
  "border bg-background hover:bg-accent hover:text-accent-foreground",
  "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  "transition-[box-shadow,_color,_background-color,_border-color]",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  "text-sm font-medium"
);

const KEY_CONTRIBUTIONS_TITLE = 'Key Contributions';

function OpenLineIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <title>open-line</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
      />
    </svg>
  );
}

function KeyContributionsDialog({ contributions, company, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel className="gap-4 p-6 w-sm">
        <div className="space-y-1.5 pr-6">
          <DialogTitle>{KEY_CONTRIBUTIONS_TITLE}</DialogTitle>
          <hr></hr>
          <DialogDescription className="text-xs md:text-sm leading-relaxed">{company}</DialogDescription>
        </div>
        <ul className="space-y-2">
          {contributions.map((item, i) => (
            <li key={i} className="flex gap-2 text-[10px] md:text-xs leading-relaxed">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </DialogPanel>
    </Dialog>
  );
}

export default function Experience() {
  const exp = PGNO_EXPERIENCE;
  const [open, setOpen] = useState(false);
  return (
    <section id="experience" className="scroll-mt-24">
      <header className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600/20">
            <AnimateIcon animateOnHover>
              <Briefcase size={20} className="h-5 w-5" />
            </AnimateIcon>
          </div>
          <div>
            <h2 className="font-bold tracking-tight text-base-content text-3xl md:text-5xl">
              Experience
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-base-content/70">
              Work history and professional engagements
            </p>
          </div>
        </div>
      </header>

      <Timeline defaultValue={1} className="w-full max-w-full ps-4">
        <TimelineItem
          step={exp.step}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="bg-input! group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
            <TimelineIndicator className="size-8 overflow-hidden rounded-full border-2 border-border group-data-[orientation=vertical]/timeline:-left-8 bg-background shadow-sm">
              <Avatar className="size-full">
                <AvatarImage src={exp.logo} alt={exp.company} />
                <AvatarFallback className="text-[10px]">
                  {exp.logoInitials}
                </AvatarFallback>
              </Avatar>
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            <div className="space-y-1">
              <h3 className="text-xs md:text-sm leading-relaxed font-base font-semibold text-base-content">
                {exp.company}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {exp.employmentType}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.durationMonths}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {exp.location}
                <span className="mx-2 text-base-content/40">·</span>
                {exp.workMode}
              </p>
            </div>

            <div className="mt-2 space-y-1">
              <h4 className="text-xs md:text-sm font-medium text-base-content">
                {exp.role}
              </h4>
              <TimelineDate className="text-[10px] md:text-xs mt-0.5 mb-0">
                {exp.dateRange}
                <span className="mx-2 text-base-content/50">·</span>
                {exp.durationMonths}
              </TimelineDate>
            </div>

            <div className="text-[10px] md:text-xs mt-3 space-y-3 text-sm leading-relaxed">
              {exp.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {exp.stack?.length ? (
              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className={outlineButtonWithLabelClasses}
                    onClick={() => setOpen(true)}
                    aria-label={KEY_CONTRIBUTIONS_TITLE}
                  >
                    <OpenLineIcon size={16} />
                    <span className="hidden md:block text-[10px] font-medium text-base-content">
                      {KEY_CONTRIBUTIONS_TITLE}
                    </span>
                  </button>
                  {exp.stack.map((tech) => {
                    const stackIcon = stackIcons[tech];
                    if (!stackIcon) return null;
                    return (
                      <button
                        key={tech}
                        type="button"
                        className={outlineButtonWithLabelClasses}
                        aria-label={tech}
                      >
                        {stackIcon.icon}
                        <span className="hidden md:block text-[10px] font-medium text-base-content">
                          {tech}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <KeyContributionsDialog
        contributions={exp.keyContributions ?? []}
        company={exp.company}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}