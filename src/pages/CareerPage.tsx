import ContentPage from "@/components/site/ContentPage";

const CareerPage = () => (
  <ContentPage
    eyebrow="Careers"
    title={<>Ready to elevate your <em className="text-accent">creativity?</em></>}
    intro="At Casa Exotique, we celebrate the transformative power of design. Join our innovative team and help craft unforgettable spaces."
  >
    <p>
      Your vision is valued here. You'll work on diverse, inspiring projects
      across residential, commercial, retail, and hospitality spaces — with
      opportunities for growth and collaboration alongside top professionals in
      an inclusive environment.
    </p>
    <p>
      To apply, share your portfolio and a short note at{" "}
      <a href="mailto:sales@casaexotique.com" className="text-accent underline">
        sales@casaexotique.com
      </a>.
    </p>
  </ContentPage>
);

export default CareerPage;
