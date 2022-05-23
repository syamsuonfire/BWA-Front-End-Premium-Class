import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Title from "parts/Title";
import Item from "parts/Item";
import Footer from "parts/Footer";
import ItemFilters from "parts/ItemFilters";

import { fetchPage } from "store/actions/page";

class BrowseByPages extends Component {
  state = {
    data: {
      searchParams: "",
      sequenceParams: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.document.title = "Staycation | BrowseBy";
    window.scrollTo(0, 0);

    if (!this.props.page.browseBy)
      this.props.fetchPage(
        `/browse-by-page/search?q=${this.state.data.searchParams}&sort=${this.state.data.sequenceParams}`,
        "browseBy"
      );
  }

  render() {
    const { data } = this.state;
    const { page } = this.props;

    if (!page.hasOwnProperty("browseBy")) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Browse By", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <Title heading={page.browseBy.heading} breadcrumb={breadcrumb} />
        <ItemFilters
          data={data}
          dropdown={page.browseBy.sorting}
          onChange={this.onChange}
        />
        <Item item={page.browseBy.items} data={data} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(BrowseByPages);
