import React from "react";
import ActivitiesArea from "../components/activities/ActivitiesArea";
import Breadcrumb from "../components/common/Breadcrumb";
import OurPartner from "../components/common/OurPartner";
import Team1 from "../components/team/Team1";
import Testimonial from "../components/testimonial/Testimonial";
import Layout from "../components/layout/index";
import About from "../components/about/About";

function about() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Us" pageTitle="About Us" id="#about" />
        <About />
        <Testimonial />
        <ActivitiesArea />
        <Team1 />
        <OurPartner />
      </Layout>
    </>
  );
}

export default about;
