import React, { Component } from "react";
import { connect } from 'react-redux'

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import FeaturedImage from "parts/FeaturedImage";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import {checkoutBooking} from 'store/actions/checkout';
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    if(!this.props.page[this.props.match.params.id])
      this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id)
  }

  render() {

    const {page, match} = this.props;

    if(!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking}/>
            </div>
          </div>
        </section>
        {/* <Categories data={page[match.params.id].activityId} /> */}
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, {checkoutBooking, fetchPage})(DetailsPage)