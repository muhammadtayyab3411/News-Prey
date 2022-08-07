import React, { Component } from "react";
import CategorySection from "../CategorySection/CategorySection";
import HeroSection from "../HeroSection/HeroSection";
import NewsSection from "../NewsSection/NewsSection";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      apiKey: this.props.apiKey,
    };
    props.setProgress(30);
  }

  componentDidMount() {
    this.props.setProgress(60);
    this.setState({ isLoading: false });
    this.props.setProgress(100);
  }

  render() {
    return (
      <>
        <HeroSection />
        <NewsSection
          pageSize="6"
          title="Latest News"
          apiKey={this.state.apiKey}
        />
        <hr />
        <CategorySection />
      </>
    );
  }
}
