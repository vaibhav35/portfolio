const Skills = () => {
  return (
    <section className="skills relative mb-[80px] tablet:mb-[100px] laptop:mb-[140px]">
        <div className="wrapper skills__wrapper bottom-border py-[40px] border-y-[1px] grid grid-cols-1 gap-[24px] tablet:grid-cols-2 tablet:gap-x-[7px] tablet:gap-y-[52px] tablet:pt-[53px] tablet:pb-0 tablet:border-b-0 laptop:gap-x-[35px] laptop:gap-y-[58px] laptop:pt-[72px] laptop:grid-cols-3">
          <h2 className="visuallyhidden">Skills</h2>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px] ">HTML</h3>
            <p className="skills__description text-grayText2  text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">4 Years Experience</p>
          </div>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px]">CSS</h3>
            <p className="skills__description text-grayText2 text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">4 Years Experience</p>
          </div>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px]">JavaScript</h3>
            <p className="skills__description text-grayText2 text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">4 Years Experience</p>
          </div>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px]">Accessibility</h3>
            <p className="skills__description text-grayText2 text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">4 Years Experience</p>
          </div>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px]">React</h3>
            <p className="skills__description text-grayText2 text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">3 Years Experience</p>
          </div>
          <div className="text-center tablet:text-left">
            <h3 className="skills__title font-bold text-fs32 leading-[1.25] -tracking-[1px] mb-[1px] tablet:text-fs48 tablet:leading-[1.16] tablet:-tracking-[1.5px] tablet:mb-[14px]">Sass</h3>
            <p className="skills__description text-grayText2 text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.55]">3 Years Experience</p>
          </div>
        </div>
        <img
          className="skills__rings absolute bottom-0 left-1/2 translate-y-1/2 tablet:translate-x-1/3 laptop:left-full laptop:-translate-x-1/3"
          src="/images/pattern-rings.svg"
          alt=""
          width="530"
          height="129"
        />
      </section>
  )
}

export default Skills