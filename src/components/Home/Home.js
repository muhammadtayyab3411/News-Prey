import React, { useState } from "react";
import CategorySection from "../CategorySection/CategorySection";
import HeroSection from "../HeroSection/HeroSection";
import NewsSection from "../NewsSection/NewsSection";

export default function Home(props) {
  const [apiKey] = useState(props.apiKey);

  return (
    <>
      <HeroSection />
      <NewsSection pageSize="6" title="Latest News" apiKey={apiKey} />
      <hr />
      <CategorySection />
    </>
  );
}
