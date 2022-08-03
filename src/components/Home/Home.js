import React, { Component } from "react";
import CategorySection from "../CategorySection/CategorySection";
import HeroSection from "../HeroSection/HeroSection";
import NewsSection from "../NewsSection/NewsSection";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        <HeroSection />
        <NewsSection pageSize="6" />
        <hr />
        <CategorySection />
      </>
    );
  }
}
