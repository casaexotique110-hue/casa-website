import ContentPage from "@/components/site/ContentPage";

export const TurnkeyExecution = () => (
  <ContentPage
    eyebrow="Services"
    title={<>Turnkey <em className="text-accent">Execution</em></>}
    intro="A smooth and all-encompassing approach to interior design and implementation."
  >
    <p>
      Casa Exotique's turnkey execution represents a smooth and all-encompassing
      approach to interior design and implementation. We manage every facet of
      the project with meticulous attention to detail and a dedication to
      quality, from conception to execution.
    </p>
    <p>
      Our comprehensive solutions include strategic planning, design
      conceptualization, premium material procurement, expert craftsmanship,
      and an initial site evaluation. We oversee every aspect of installation
      and construction, making sure that deadlines are fulfilled and quality
      standards are maintained throughout.
    </p>
    <p>
      With an emphasis on operational efficiency and customer happiness, the
      result is fully realised spaces that surpass expectations and demonstrate
      our commitment to luxury and accuracy in every aspect.
    </p>
  </ContentPage>
);

export const CustomFitOuts = () => (
  <ContentPage
    eyebrow="Services"
    title={<>Custom <em className="text-accent">Fit-Out Solutions</em></>}
    intro="Personalized service blended with exceptional quality and craftsmanship."
  >
    <p>
      Casa Exotique delivers unparalleled interior fit-out solutions, blending
      personalized service with exceptional quality and craftsmanship. Standing
      as a beacon of excellence in millennium cities, our success is driven by
      a team of seasoned professionals dedicated to exceeding expectations in
      every project, regardless of its size.
    </p>
    <p>
      By intimately connecting with clients, we understand and exceed their
      expectations, delivering premium results through meticulous attention to
      detail and superior craftsmanship. Our custom fit-out solutions reinforce
      and enhance brand identity for commercial spaces while maximising
      functionality and aesthetics through tailored designs.
    </p>
    <div className="grid sm:grid-cols-2 gap-px bg-border mt-10 not-prose">
      {[
        { t: "Individual Client", d: "Bespoke fit-outs tailored to the unique needs and preferences of each client." },
        { t: "Quality & Craftsmanship", d: "Prioritizing exceptional quality and craftsmanship in every detail." },
        { t: "Brand Identity", d: "Visual and messaging elements that define personality and set you apart." },
        { t: "Optimum Space Utilization", d: "Maximising functionality and efficiency in every available area." },
      ].map((i) => (
        <div key={i.t} className="bg-background p-8">
          <h3 className="font-serif text-xl text-foreground">{i.t}</h3>
          <div className="w-8 h-px bg-accent my-4" />
          <p className="text-sm">{i.d}</p>
        </div>
      ))}
    </div>
  </ContentPage>
);

export const InHouseCustomization = () => (
  <ContentPage
    eyebrow="Services"
    title={<>Expert In-House <em className="text-accent">Customization</em></>}
    intro="Master artisans and designers crafting bespoke solutions tailored to your vision."
  >
    <p>
      Casa Exotique epitomizes luxury through our exclusive in-house
      customization services for interior decoration. We boast a dedicated
      team of master artisans and designers who meticulously craft bespoke
      solutions tailored to each client's discerning vision and exacting
      standards.
    </p>
    <p>
      From initial concept to final execution, our process ensures unrivaled
      attention to detail and exquisite craftsmanship. By maintaining complete
      control over design and production, we seamlessly integrate custom
      furniture, fixtures, and spatial layouts to elevate every space to the
      pinnacle of sophistication.
    </p>
    <p>
      Our commitment to uncompromising quality and innovation guarantees a
      personalized, prestigious experience that epitomizes the Casa Exotique
      signature of luxury living.
    </p>
  </ContentPage>
);

export const SeamlessProcurement = () => (
  <ContentPage
    eyebrow="Services"
    title={<>Elevate Your Design at <em className="text-accent">Global Level</em></>}
    intro="Curated environments that epitomize sophistication and luxury."
  >
    <p>
      At Casa Exotique, we understand your desire for the finest global elements
      in your home and are dedicated to delivering just that. Our approach
      focuses on curating environments that epitomize sophistication and luxury.
    </p>
    <p>
      By leveraging the global luxury market's expertise, we ensure that every
      space reflects unparalleled elegance. We provide advisory services and
      suggestions, granting access to diverse craftsmanship and innovation —
      offering options ranging from traditional to contemporary designs and
      ensuring the finest materials.
    </p>
    <p>
      Our dedication to global products advice allows us to stay ahead of
      trends, maintain a competitive edge, and enhance our reputation as a
      premier luxury interior design company.
    </p>
  </ContentPage>
);
