import React from "react"
import "./style.scss"

const MainPage = () => {
  return (
    <div className="main-page">
      <section className="header">
        <div className="container">
          <div className="header__inner">
            <h1 className="header__logo">VoGo</h1>
            <nav className="header__nav nav">
              <a href="#0" className="nav__link">
                About
              </a>
              <a href="#0" className="nav__link">
                Service
              </a>
              <a href="#0" className="nav__link">
                Blog
              </a>
              <a href="#0" className="nav__link">
                Work
              </a>
              <a href="#0" className="nav__link">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro__inner">
            <h1 className="intro__suptitle">Dream and Create</h1>
            <h1 className="intro__title">Welcome to VoGo</h1>
            <a className="btn" href="#a">
              Learn More
            </a>
          </div>
        </div>

        <div className="slider">
          <div className="container">
            <div className="slider__inner">
              <div className="slider__item active">
                <span className="slider__num">01</span>
                <span className="slider__text">Intro</span>
              </div>

              <div className="slider__item">
                <span className="slider__num">02</span>
                <span className="slider__text">Work</span>
              </div>

              <div className="slider__item">
                <span className="slider__num">03</span>
                <span className="slider__text">About</span>
              </div>

              <div className="slider__item">
                <span className="slider__num">04</span>
                <span className="slider__text">Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="title-block">
            <h3 className="title-block__sup">We work with</h3>
            <h3 className="title-block__sub">Amazing Services</h3>
            <p className="title-block__text">
              You create the best company when you see other people's mistakes
              and find the strength to fix them. The best service may be the
              only competitive advantage.
            </p>
          </div>
          <div className="about__row">
            <div className="about__item">
              <div className="about__item-img">
                <img src="https://picsum.photos/id/180/380/240" alt="" />
              </div>
              <p className="about__item-text">super team</p>
            </div>

            <div className="about__item">
              <div className="about__item-img">
                <img src="https://picsum.photos/id/42/380/240" alt="" />
              </div>
              <p className="about__item-text">super team</p>
            </div>

            <div className="about__item">
              <div className="about__item-img">
                <img src="https://picsum.photos/id/20/380/240" alt="" />
              </div>
              <p className="about__item-text">super team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <div className="statistics__row">
            <div className="statistics__item">
              <span className="statistics__item-count">75</span> <br />
              <span className="statistics__item-text">Web design projects</span>
            </div>

            <div className="statistics__item">
              <span className="statistics__item-count">105</span> <br />
              <span className="statistics__item-text">Happy client</span>
            </div>

            <div className="statistics__item">
              <span className="statistics__item-count">10</span> <br />
              <span className="statistics__item-text">Award winner</span>
            </div>

            <div className="statistics__item">
              <span className="statistics__item-count">66</span> <br />
              <span className="statistics__item-text">Cup of tea</span>
            </div>

            <div className="statistics__item">
              <span className="statistics__item-count">15</span> <br />
              <span className="statistics__item-text">Members</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
