const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary/60">
      <div className="container grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="eyebrow">Begin a Project</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.1]">
            Let us draw the portrait of your home.
          </h2>
          <div className="w-12 h-px bg-accent my-8" />
          <p className="text-muted-foreground max-w-md">
            Commissions are accepted by appointment. Share a few words about your
            vision and our studio will be in touch.
          </p>
          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Studio</dt>
              <dd className="mt-2">12 Aurelian Mews, New Delhi</dd>
            </div>
            <div>
              <dt className="eyebrow">Enquiries</dt>
              <dd className="mt-2">studio@maisonaurelia.com</dd>
            </div>
            <div>
              <dt className="eyebrow">Telephone</dt>
              <dd className="mt-2">+91 11 0000 0000</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 bg-background p-8 md:p-10 border border-border"
        >
          {[
            { label: "Name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Location", type: "text", name: "location" },
          ].map((f) => (
            <div key={f.name}>
              <label className="eyebrow block mb-2">{f.label}</label>
              <input
                type={f.type}
                name={f.name}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-base transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="eyebrow block mb-2">Project Brief</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-base transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center text-[0.72rem] uppercase tracking-[0.32em] border border-foreground px-8 py-3 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
