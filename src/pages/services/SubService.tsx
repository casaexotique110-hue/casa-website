import ContentPage from "@/components/site/ContentPage";
import { ReactNode } from "react";

interface SubServiceProps {
  category?: string;
  title: ReactNode;
  intro?: string;
  body: ReactNode;
}

const SubService = ({ category = "Bespoke Furniture", title, intro, body }: SubServiceProps) => (
  <ContentPage eyebrow={category} title={title} intro={intro}>
    {body}
  </ContentPage>
);

export default SubService;
