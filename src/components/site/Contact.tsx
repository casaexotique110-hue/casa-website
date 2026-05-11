const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary/60">
      <div className="container grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="eyebrow">Begin a Project</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.1]">
            Let the creative journey begin.
          </h2>
          <div className="w-12 h-px bg-accent my-8" />
          <p className="text-muted-foreground max-w-md">
            Share your vision with our studio. Our team will be in touch to craft
            an interior that reflects your aspirations.
          </p>
          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">India Address</dt>
              <dd className="mt-2">
                Design and Experience Center<br />
                Plot No. 110, Pace City 1, Sector 37, Gurgaon
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2">sales@casaexotique.com</dd>
            </div>
            <div>
              <dt className="eyebrow">Telephone</dt>
              <dd className="mt-2">+91 9667733382</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 bg-background p-8 md:p-10 border border-border"
        >
          {[
            { label: "Full Name", type: "text", name: "name" },
            { label: "Phone Number", type: "tel", name: "phone" },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Super Area", name: "area" },
              { label: "Budget", name: "budget" },
              { label: "Property Type", name: "type" },
            ].map((s) => (
              <div key={s.name}>
                <label className="eyebrow block mb-2">{s.label}</label>
                <select
                  name={s.name}
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-sm transition-colors"
                >
                  <option value="">Select</option>
                </select>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By submitting your information you agree to our collection, use, and
            sharing of this information per our Privacy Policy.
          </p>
          <button
            type="submit"
            className="mt-2 inline-flex items-center text-[0.72rem] uppercase tracking-[0.32em] border border-foreground px-8 py-3 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
