import React from "react";
import type { Experience } from "@/data/experience";

const TimelineNode: React.FC<{ experience: Experience; isLast?: boolean }> = ({
  experience,
  isLast = false,
}) => {
  const { date, title, company, description, techStack, bulletPoints, logo } =
    experience;
  const current = /present|now/i.test(date);
  // Skip the description when it only repeats the first bullet.
  const showDescription =
    description && description.trim() !== bulletPoints[0]?.trim();

  return (
    <li className="grid gap-x-8 gap-y-2 md:grid-cols-[11.5rem_minmax(0,1fr)]">
      <p className="pt-1 text-sm font-medium tabular-nums text-dark-grey md:text-right">
        {date}
      </p>

      <div
        className={`relative border-l pl-8 ${
          isLast ? "border-transparent pb-2" : "border-light-grey pb-14"
        }`}
      >
        {/* Node on the spine: filled coral for a current role, hollow otherwise */}
        <span
          aria-hidden="true"
          className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
            current
              ? "border-highlight-orange bg-highlight-orange"
              : "border-cool-grey/60 bg-page"
          }`}
        />

        <h3 className="text-xl font-semibold tracking-tight text-off-black sm:text-2xl">
          {title}
          {current && <span className="sr-only"> (current role)</span>}
        </h3>
        <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-off-black/90">
          {logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 rounded-sm bg-white object-contain"
            />
          )}
          <span>{company}</span>
        </p>

        {showDescription && (
          <p className="mt-4 max-w-[62ch] leading-relaxed text-dark-grey">
            {description}
          </p>
        )}

        {bulletPoints.length > 0 && (
          <ul className="mt-4 max-w-[62ch] space-y-2 text-dark-grey">
            {bulletPoints.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[0.7em] h-px w-3 shrink-0 bg-cool-grey/60"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {techStack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools and topics">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-light-grey px-2.5 py-1 text-xs font-medium text-off-black"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default TimelineNode;
