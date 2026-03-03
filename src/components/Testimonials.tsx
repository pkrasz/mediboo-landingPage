import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

const testimonials = [
  {
    name: "Marta K.",
    role: "Mama 3 dzieci",
    quote:
      "W końcu mam wszystko w jednym miejscu — objawy, leki i wizyty. Przy trójce dzieci to ratuje głowę, bo nic nie ginie w notatkach i wiadomościach.",
  },
  {
    name: "Bartek C.",
    role: "Tata 2 dzieci",
    quote:
      "Udostępniłem profil żonie i od razu mamy spójne zapiski. Nie dublujemy informacji i łatwiej ogarnąć leki oraz terminy wizyt.",
  },
  {
    name: "Kasia W.",
    role: "Mama 4 dzieci",
    quote:
      "Najbardziej lubię porządek i prostotę. Szybko zapisuję, co się działo i później mam czarno na białym — bez chaosu.",
  },
  {
    name: "Michał P.",
    role: "Opiekuje się też rodzicami",
    quote:
      "Poza dziećmi mam tu też zdrowie rodziców — wyniki, leki, wizyty. Wreszcie nie muszę pamiętać wszystkiego z głowy.",
  },
  {
    name: "Ewa S.",
    role: "Mama 2 dzieci + dziadkowie w profilu",
    quote:
      "Dodałam dzieci i dziadków w jednym miejscu. Łatwo wrócić do historii i szybciej powiedzieć lekarzowi, co było wcześniej.",
  },
];

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
}: Readonly<(typeof testimonials)[number]>) {
  return (
    <article className="flex h-full w-full max-w-[420px] flex-col rounded-md border border-border bg-[#FEFFFF] px-5 py-[14px] shadow-[0_2px_4px_rgba(33,33,33,0.26)] md:px-6 md:py-[18px] lg:h-[256px]">
      <div>
        <div className="mb-2 h-px w-10 rounded-full bg-secondary/60" aria-hidden="true" />
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

export function Testimonials() {
  return (
    <>
      <SectionTitle preTitle="Testimonials" title="What families say after using MediBoo.">
        Real feedback from parents and caregivers keeping routines, notes, and visits in one
        place.
      </SectionTitle>

      <Container className="pb-8" id="testimonials">
        <div className="grid gap-5 md:grid-cols-2 lg:hidden">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-col lg:gap-5">
          <div className="grid grid-cols-3 justify-items-center gap-5">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="flex justify-center gap-5">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
