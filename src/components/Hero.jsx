/** @format */

import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Hero = () => {
  return (
    <main>
      <section className="mb-[80px] tablet:mb-[80px] laptop:mb-[219px]">
        <div className="wrapper">
          <picture className="order-2">
            <source
              media="(min-width: 73.125em)"
              srcSet="/images/image-profile-desktop.webp"
              width="445"
              height="720"
            />
            <source
              media="(min-width: 48em)"
              srcSet="/images/image-profile-tablet.webp"
              width="322"
              height="600"
            />
            <img
              className="absolute left-1/2 -translate-x-1/2 top-0 tablet:left-auto right-0 tablet:translate-x-0 laptop:right-[calc(calc(100%_-_69.375em)_/_2)]"
              src="/images/image-profile-mobile.webp"
              alt="picture of Adam Keyes"
              width="174"
              height="383"
            />
          </picture>
          <img
            className="absolute right-1/2 top-[124px] -z-10 tablet:right-auto tablet:left-0 tablet:top-[86px] tablet:-translate-x-1/2 laptop:left-[calc(calc(100%_-_69.375em)_/_2)] laptop:top-[133px]"
            src="/images/pattern-rings.svg"
            alt=""
            width="530"
            height="129"
          />
          <img
            className="absolute right-0 top-[calc(383px-129px)] translate-x-1/2 tablet:top-[calc(600px-129px)] tablet:z-10 laptop:top-[521px] laptop:right-[calc(calc(calc(100%_-_69.375em)_/_2)_+_445px)]"
            src="/images/pattern-circle.svg"
            alt=""
            width="129"
            height="129"
          />
          <div className="mt-[331px] text-center me-auto ms-auto tablet:mt-0 tablet:text-left tablet:z-10 tablet:me-0 tablet:ms-0 tablet:relative">
            <h1 className="text-fs40 leading-10 -tracking-[1.14px] font-bold tablet:text-fs72 tablet:leading-[1] tablet:-tracking-[0.1282rem] tablet:mb-[60px] tablet:w-[15ch] laptop:text-fs88 laptop:-tracking-[0.15685rem] laptop:mb-[40px]">
              Nice to{" "}
              <br className="hidden tablet:inline-block laptop:hidden" />
              meet you!
              <br className="tablet:hidden laptop:inline-block" />
              I&apos;m{" "}
              <span className="inline-block relative before:w-full before:absolute before:right-0  before:border-b-4 before:border-b-greenAccent before:top-[calc(100%+1px)]">
                Adam Keyes
              </span>
              .
            </h1>
            <p className="text-fs16 text-grayText2 leading-[1.625] font-medium my-6 tablet:text-fs18 tablet:leading-[1.55] tablet:mb-[34px] tablet:w-[38ch] laptop:mb-[66px]">
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <a
              href="#contact"
              className="text-fs16 leading-[26px] tracking-[2.29px] font-bold uppercase underline-link "
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Hero;
