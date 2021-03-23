import React from "react";
import { PageProps } from "gatsby";

import Title from "@/components/Title";

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>Baseline content</p>
  </main>
);

export default Home;
