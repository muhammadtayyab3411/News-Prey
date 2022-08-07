// import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import NewsSection from "./components/NewsSection/NewsSection";
import Home from "./components/Home/Home";

export default function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchCountry, setSearchCountry] = useState("globe");
  const [progress, setProgress] = useState(0);

  const pageSize = 21; // Change the pageSize to show your desired number of newsItems per page.

  const onSearch = async (query) => {
    await setSearchQuery(query);
  };

  const onSearchCountry = async (country) => {
    await setSearchCountry(country);
  };

  const onProgress = async (progress) => {
    await setProgress(progress);
  };

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <>
      <Navbar
        key={searchCountry}
        title="News Prey"
        onSearch={onSearch}
        country={searchCountry}
        onSearchCountry={onSearchCountry}
      />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        <Route
          path="/"
          element={<Home setProgress={onProgress} apiKey={apiKey} />}
        />
        <Route
          path="/business"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "business", searchCountry]}
              title="Business"
              category="business"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "entertainment", searchCountry]}
              title="Entertainment"
              category="entertainment"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "technology", searchCountry]}
              title="Technology"
              category="technology"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "sports", searchCountry]}
              title="Sports"
              category="sports"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/general"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "general", searchCountry]}
              title="General"
              category="general"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/health"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "health", searchCountry]}
              title="Health"
              category="health"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
        <Route
          path="/science"
          element={
            <NewsSection
              apiKey={apiKey}
              setProgress={onProgress}
              key={[searchQuery, "science", searchCountry]}
              title="Science"
              category="science"
              pageSize={pageSize}
              onSearch={onSearch}
              searchQuery={searchQuery}
              country={searchCountry}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
