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

export function Testimonials() {
  return (
    <>
      <SectionTitle preTitle="Testimonials" title="What families say after using MediBoo.">
        Real feedback from parents and caregivers keeping routines, notes, and visits in one
        place.
      </SectionTitle>

      <Container className="pb-8" id="testimonials">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {testimonials.map((testimonial, index) => {
            const desktopPosition =
              index === 3
                ? "lg:col-start-2 lg:col-span-2"
                : index === 4
                  ? "lg:col-start-4 lg:col-span-2"
                  : "lg:col-span-2";

            return (
              <article
                key={testimonial.name}
                className={`rounded-md border border-border bg-[#FEFFFF] px-5 py-5 shadow-card md:px-6 md:py-6 ${
                  desktopPosition
                }`}
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-secondary" aria-hidden="true" />
                <p className="text-base leading-8 text-primary">{testimonial.quote}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-text">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </>
  );
}
