import type { Metadata } from "next";
import { CollaboratorsView } from "@/components/sections/CollaboratorsView";

export const metadata: Metadata = {
  title: "Our Global Partners | Altimi Biosciences",
  description:
    "Explore our authorized international manufacturing partners. We collaborate with world-leading diagnostic and medical device manufacturers including Randox, Aidian, Bittium, A&D, Anji Hongde, and Yangzhong Jinxiang to supply authentic healthcare technologies in Pakistan.",
  openGraph: {
    title: "Our Global Partners | Altimi Biosciences",
    description:
      "Authorized nationwide distributor for world-renowned medical diagnostic manufacturers and clinical laboratory technologies in Pakistan.",
    url: "https://altimibiosciences.com/collaborators",
    siteName: "Altimi Biosciences",
    locale: "en_US",
    type: "website",
  },
};

export default function CollaboratorsPage() {
  return <CollaboratorsView />;
}

