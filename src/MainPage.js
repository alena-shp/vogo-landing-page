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
    </div>
  )
}

export default MainPage
