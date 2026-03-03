import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import type { Dictionary } from "@/i18n";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({
  name,
  role,
  quote,
}: Readonly<Dictionary["testimonials"]["items"][number]>) {
  return (
    <article className="flex h-full w-full max-w-[420px] flex-col rounded-md border border-border bg-[#FEFFFF] px-5 py-[14px] shadow-[0_2px_4px_rgba(33,33,33,0.26)] md:px-6 md:py-[18px] lg:h-[256px]">
      <div>
        <div className="mb-4 h-0.5 w-10 rounded-full bg-secondary/60" aria-hidden="true" />
        <p className="text-base leading-[1.65] text-primary">{quote}</p>
      </div>
      <div className="mt-auto border-t border-border/70 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-[13px] font-medium text-primary">
            {getInitials(name)}
          </div>
          <div className="space-y-0.5">
            <p className="text-base font-semibold text-primary">{name}</p>
            <p className="text-sm text-muted-text">{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

interface TestimonialsProps {
  t: Dictionary["testimonials"];
}

export function Testimonials({ t }: Readonly<TestimonialsProps>) {
  return (
    <>
      <SectionTitle
        id="testimonials"
        preTitle={t.preTitle}
        title={t.title}
      >
        {t.description}
      </SectionTitle>

      <Container className="pb-8">
        <div className="grid gap-5 md:grid-cols-2 lg:hidden">
          {t.items.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-col lg:gap-5">
          <div className="grid grid-cols-3 justify-items-center gap-5">
            {t.items.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="flex justify-center gap-5">
            {t.items.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
