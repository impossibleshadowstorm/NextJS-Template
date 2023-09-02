import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import Layout from "../components/layout/index";

function serviceDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Services Details"
          pageTitle="Services Details"
          id="#service-details"
        />
        <div className="service-details pt-120 pb-120" id="service-details">
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="service-widget service-list-area">
                    <h4 className="sidebar-title">All Services</h4>
                    <ul className="service-list">
                      <li>
                        <Link href="/service">Video Animation</Link>
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.7496 15.4594C12.4954 15.4594 12.2385 15.41 11.9928 15.3082C11.2572 15.0038 10.7819 14.2953 10.7819 13.5034V11.8225C10.7819 11.3909 11.1316 11.0411 11.5631 11.0411C11.9946 11.0411 12.3445 11.3909 12.3445 11.8225V13.5034C12.3445 13.7374 12.5165 13.8337 12.5903 13.8644C12.6656 13.8955 12.8587 13.9497 13.0272 13.7811L18.2094 8.59248C18.5147 8.28685 18.5147 7.78956 18.2094 7.48393L13.0272 2.29548C12.8587 2.12687 12.6656 2.18088 12.5905 2.21201C12.5165 2.24268 12.3445 2.33912 12.3445 2.57319V7.29594C12.3445 8.1576 11.6435 8.85859 10.7819 8.85859H0.781251C0.349732 8.85859 0 8.50886 0 8.07734C0 7.64582 0.349732 7.29594 0.781251 7.29594H10.7819V2.57319C10.7819 1.78126 11.2572 1.07264 11.9928 0.768223C12.731 0.462742 13.571 0.628758 14.1327 1.1912L19.3149 6.37965C20.2283 7.29426 20.2283 8.7823 19.3149 9.69691L14.1327 14.8854C13.7579 15.2606 13.2593 15.4592 12.7496 15.4594Z" />
                        </svg>
                      </li>
                      <li>
                        <Link href="/service">
                          <a>Website Development</a>
                        </Link>
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.7496 15.4594C12.4954 15.4594 12.2385 15.41 11.9928 15.3082C11.2572 15.0038 10.7819 14.2953 10.7819 13.5034V11.8225C10.7819 11.3909 11.1316 11.0411 11.5631 11.0411C11.9946 11.0411 12.3445 11.3909 12.3445 11.8225V13.5034C12.3445 13.7374 12.5165 13.8337 12.5903 13.8644C12.6656 13.8955 12.8587 13.9497 13.0272 13.7811L18.2094 8.59248C18.5147 8.28685 18.5147 7.78956 18.2094 7.48393L13.0272 2.29548C12.8587 2.12687 12.6656 2.18088 12.5905 2.21201C12.5165 2.24268 12.3445 2.33912 12.3445 2.57319V7.29594C12.3445 8.1576 11.6435 8.85859 10.7819 8.85859H0.781251C0.349732 8.85859 0 8.50886 0 8.07734C0 7.64582 0.349732 7.29594 0.781251 7.29594H10.7819V2.57319C10.7819 1.78126 11.2572 1.07264 11.9928 0.768223C12.731 0.462742 13.571 0.628758 14.1327 1.1912L19.3149 6.37965C20.2283 7.29426 20.2283 8.7823 19.3149 9.69691L14.1327 14.8854C13.7579 15.2606 13.2593 15.4592 12.7496 15.4594Z" />
                        </svg>
                      </li>
                      <li>
                        <Link href="/service">
                          <a>Ui/Ux Design</a>
                        </Link>
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.7496 15.4594C12.4954 15.4594 12.2385 15.41 11.9928 15.3082C11.2572 15.0038 10.7819 14.2953 10.7819 13.5034V11.8225C10.7819 11.3909 11.1316 11.0411 11.5631 11.0411C11.9946 11.0411 12.3445 11.3909 12.3445 11.8225V13.5034C12.3445 13.7374 12.5165 13.8337 12.5903 13.8644C12.6656 13.8955 12.8587 13.9497 13.0272 13.7811L18.2094 8.59248C18.5147 8.28685 18.5147 7.78956 18.2094 7.48393L13.0272 2.29548C12.8587 2.12687 12.6656 2.18088 12.5905 2.21201C12.5165 2.24268 12.3445 2.33912 12.3445 2.57319V7.29594C12.3445 8.1576 11.6435 8.85859 10.7819 8.85859H0.781251C0.349732 8.85859 0 8.50886 0 8.07734C0 7.64582 0.349732 7.29594 0.781251 7.29594H10.7819V2.57319C10.7819 1.78126 11.2572 1.07264 11.9928 0.768223C12.731 0.462742 13.571 0.628758 14.1327 1.1912L19.3149 6.37965C20.2283 7.29426 20.2283 8.7823 19.3149 9.69691L14.1327 14.8854C13.7579 15.2606 13.2593 15.4592 12.7496 15.4594Z" />
                        </svg>
                      </li>
                      <li>
                        <Link href="/service">
                          <a>Branding Solution</a>
                        </Link>
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.7496 15.4594C12.4954 15.4594 12.2385 15.41 11.9928 15.3082C11.2572 15.0038 10.7819 14.2953 10.7819 13.5034V11.8225C10.7819 11.3909 11.1316 11.0411 11.5631 11.0411C11.9946 11.0411 12.3445 11.3909 12.3445 11.8225V13.5034C12.3445 13.7374 12.5165 13.8337 12.5903 13.8644C12.6656 13.8955 12.8587 13.9497 13.0272 13.7811L18.2094 8.59248C18.5147 8.28685 18.5147 7.78956 18.2094 7.48393L13.0272 2.29548C12.8587 2.12687 12.6656 2.18088 12.5905 2.21201C12.5165 2.24268 12.3445 2.33912 12.3445 2.57319V7.29594C12.3445 8.1576 11.6435 8.85859 10.7819 8.85859H0.781251C0.349732 8.85859 0 8.50886 0 8.07734C0 7.64582 0.349732 7.29594 0.781251 7.29594H10.7819V2.57319C10.7819 1.78126 11.2572 1.07264 11.9928 0.768223C12.731 0.462742 13.571 0.628758 14.1327 1.1912L19.3149 6.37965C20.2283 7.29426 20.2283 8.7823 19.3149 9.69691L14.1327 14.8854C13.7579 15.2606 13.2593 15.4592 12.7496 15.4594Z" />
                        </svg>
                      </li>
                      <li>
                        <Link href="/service">
                          <a>Digital Marketing</a>
                        </Link>
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.7496 15.4594C12.4954 15.4594 12.2385 15.41 11.9928 15.3082C11.2572 15.0038 10.7819 14.2953 10.7819 13.5034V11.8225C10.7819 11.3909 11.1316 11.0411 11.5631 11.0411C11.9946 11.0411 12.3445 11.3909 12.3445 11.8225V13.5034C12.3445 13.7374 12.5165 13.8337 12.5903 13.8644C12.6656 13.8955 12.8587 13.9497 13.0272 13.7811L18.2094 8.59248C18.5147 8.28685 18.5147 7.78956 18.2094 7.48393L13.0272 2.29548C12.8587 2.12687 12.6656 2.18088 12.5905 2.21201C12.5165 2.24268 12.3445 2.33912 12.3445 2.57319V7.29594C12.3445 8.1576 11.6435 8.85859 10.7819 8.85859H0.781251C0.349732 8.85859 0 8.50886 0 8.07734C0 7.64582 0.349732 7.29594 0.781251 7.29594H10.7819V2.57319C10.7819 1.78126 11.2572 1.07264 11.9928 0.768223C12.731 0.462742 13.571 0.628758 14.1327 1.1912L19.3149 6.37965C20.2283 7.29426 20.2283 8.7823 19.3149 9.69691L14.1327 14.8854C13.7579 15.2606 13.2593 15.4592 12.7496 15.4594Z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <div className="service-widget service-banner">
                    <span>Offer Banner</span>
                    <h3>Do You Have a Project In Your Mind </h3>
                    <Link href="/contact">
                      <a className="eg-btn btn--primary btn--lg">
                        {" "}
                        Get Started
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-details-area">
                  <img
                    src="assets/images/bg/servc-details.png"
                    className="img-fluid"
                    alt="image"
                  />
                  <h3>Are You Too Old for a Career in Web Development?</h3>
                  <p className="para">
                    The world of programming is full of fresh-faced coding
                    prodigies barely out of their teens, dealing simultaneously
                    with buggy code and acne. Or this is the reality that films
                    and Netflix shows would have us believe.{" "}
                  </p>
                  <p className="para mb-30">
                    With this in mind, is there a place for “older” developers
                    in the workforce? Is it too late to change into this field
                    once you’re 30 or above?
                  </p>
                  <h3 className="service-subtitle">Scratch to Development</h3>
                  <p className="para mb-40">
                    Let’s imagine an e-commerce startup—we’ll call it Beautify.
                    Beautify creates their own all-natura cosmetics and sells
                    them online via their website. Some of the key team members
                    behind this small but successful startup include a UX
                    designer, a UI designer, a web developer, a data analyst,
                    and a digital marketer.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h3 className="service-subtitle">Planning Project</h3>
                      <ul className="proj-planlist">
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Analyzing research data and identifying.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Conducting usability testing sessions.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Amazing Timing and Experience.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Gathering user feedback through surveys.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="assets/images/bg/service-details2.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="work-process-area">
                    <h3 className="service-subtitle text-center">
                      Work Process
                    </h3>
                    <div className="row g-4">
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs1.svg"
                            alt="image"
                          />
                          <h4>Research</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs2.svg"
                            alt="image"
                          />
                          <h4>Idea</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs3.svg"
                            alt="image"
                          />
                          <h4>Develop</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs4.svg"
                            alt="image"
                          />
                          <h4>Launch</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-faq-area">
                    <h3 className="service-subtitle text-md-start text-center mb-4">
                      FAQ This Services
                    </h3>
                    <div
                      className="faq-wrap wow fadeInRight"
                      data-wow-duration="1.5s"
                      data-wow-delay=".2s"
                    >
                      <div className="faq-item hover-btn">
                        <span />
                        <h5
                          id="heading10"
                          className="accordion-button style-2 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse10"
                          aria-controls="collapse10"
                        >
                          01. Curious about how to build your own UX strategy?
                          Here are five simple steps.
                        </h5>
                        <div
                          id="collapse10"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading10"
                        >
                          <div className="faq-body style-2">
                            Morbi aliquam quis quam in luctus. Nullam tincidunt
                            pulvinar imperdiet. Sed varius, diam vitae posuere
                            semper, libero ex hendrerit nunc, ac sagittis eros
                            metus ut diam. Donec a nibh in libero maximus
                            vehicula. Etiam sit amet condimentum erat.
                            Pellentesque ultrices sagittis turpis, quis tempus
                            ante viverra et.Morbi aliquam quis quam in luctus.
                            Nullam tincidunt pulvinar imperdiet. Sed varius,
                            diam vitae posuere semper, tincidunt pulvinar
                            imperdiet. Sed varius, diam vitae posuere semper.
                          </div>
                        </div>
                      </div>
                      <div className="faq-item hover-btn">
                        <span />
                        <h5
                          id="heading11"
                          className="accordion-button style-2 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-controls="collapse11"
                        >
                          02. Where Could a Career in UX Take You? Agency vs.
                          In-House vs. Freelance?
                        </h5>
                        <div
                          id="collapse11"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading11"
                        >
                          <div className="faq-body style-2">
                            Morbi aliquam quis quam in luctus. Nullam tincidunt
                            pulvinar imperdiet. Sed varius, diam vitae posuere
                            semper, libero ex hendrerit nunc, ac sagittis eros
                            metus ut diam. Donec a nibh in libero maximus
                            vehicula. Etiam sit amet condimentum erat.
                            Pellentesque ultrices sagittis turpis, quis tempus
                            ante viverra et.Morbi aliquam quis quam in luctus.
                            Nullam tincidunt pulvinar imperdiet. Sed varius,
                            diam vitae posuere semper, tincidunt pulvinar
                            imperdiet. Sed varius, diam vitae posuere semper.
                          </div>
                        </div>
                      </div>
                      <div className="faq-item hover-btn">
                        <span />
                        <h5
                          id="heading12"
                          className="accordion-button style-2 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-controls="collapse12"
                        >
                          03. What Is a Problem Statement in UX? And How To
                          Write One?
                        </h5>
                        <div
                          id="collapse12"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading12"
                        >
                          <div className="faq-body style-2">
                            Morbi aliquam quis quam in luctus. Nullam tincidunt
                            pulvinar imperdiet. Sed varius, diam vitae posuere
                            semper, libero ex hendrerit nunc, ac sagittis eros
                            metus ut diam. Donec a nibh in libero maximus
                            vehicula. Etiam sit amet condimentum erat.
                            Pellentesque ultrices sagittis turpis, quis tempus
                            ante viverra et.Morbi aliquam quis quam in luctus.
                            Nullam tincidunt pulvinar imperdiet. Sed varius,
                            diam vitae posuere semper, tincidunt pulvinar
                            imperdiet. Sed varius, diam vitae posuere semper.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <JoinOurTeam btnclass="btn--primary" />
        <OurPartner />
      </Layout>
    </>
  );
}

export default serviceDetails;
