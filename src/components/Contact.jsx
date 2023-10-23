/** @format */

const Contact = () => {
  return (
    <section id="contact" className="contact bg-darkGrey pt-[60px] relative laptop:pt-[84px]">
      <div className="wrapper contact__wrapper bottom-border border-b-[1px] pb-[87px] tablet:pb-[92px] laptop:max-w-[69.375rem] laptop:flex laptop:justify-between ">
        <div className="contact__text text-center mb-[50px] max-w-[27.8125rem] mx-auto laptop:mx-0 laptop:text-left">
          <h2 className="contact__headline header-xl mb-[20px] font-bold text-fs40 leading-[1] -tracking-[1.14px] tablet:text-fs72 tablet:-tracking-[2.05px] laptop:text-fs88 laptop:-tracking-[2.5px]">
            Contact
          </h2>
          <p className="contact__description text-grayText2 font-medium text-fs16 leading-[1.625] tablet:text-fs18 tablet:leading-[1.56]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form action="" className="contact__form max-w-[27.8125rem] mx-auto laptop:mx-0">
          <div className="contact__control mb-[32px] relative">
            <label htmlFor="name" className="visuallyhidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NAME"
              required
              className="w-full pl-[24px] pb-[16px]  border-b-[1px] border-whiteMainText bg-transparent outline-none peer focus-visible:invalid:border-red-600 valid:border-greenAccent placeholder:text-whiteMainText placeholder:opacity-50 placeholder:uppercase text-fs16 leading-[1.625] -tracking-[0.22px] "
            />
            <img
                src="/src/assets/images/icon-invalid.svg"
                alt=""
                className="contact__invalid-icon h-[1.5rem] w-[1.5rem] absolute top-0 right-0 hidden peer-focus-visible:peer-invalid:inline-block"
                width="24"
                height="24"
              />
          </div>
          <div className="contact__control mb-[32px] relative">
            <label htmlFor="email" className="visuallyhidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              required
              className="w-full pl-[24px] pb-[16px]  border-b-[1px] border-whiteMainText bg-transparent outline-none peer focus-visible:invalid:border-red-600 valid:border-greenAccent placeholder:text-whiteMainText placeholder:opacity-50 placeholder:uppercase text-fs16 leading-[1.625] -tracking-[0.22px]"
            />
            <img
                src="/src/assets/images/icon-invalid.svg"
                alt=""
                className="contact__invalid-icon h-[1.5rem] w-[1.5rem] absolute top-0 right-0 hidden peer-focus-visible:peer-invalid:inline-block"
                width="24"
                height="24"
              />
          </div>
          <div className="contact__control mb-[32px] relative">
            <label htmlFor="message" className="visuallyhidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="MESSAGE"
              required
              className="w-full pl-[24px] pb-[16px]  border-b-[1px] border-whiteMainText bg-transparent outline-none peer focus-visible:invalid:border-red-600 valid:border-greenAccent placeholder:text-whiteMainText placeholder:opacity-50 placeholder:uppercase text-fs16 leading-[1.625] -tracking-[0.22px]"
            ></textarea>
            <img
                src="/src/assets/images/icon-invalid.svg"
                alt=""
                className="contact__invalid-icon h-[1.5rem] w-[1.5rem] absolute top-0 right-0 hidden peer-focus-visible:peer-invalid:inline-block"
                width="24"
                height="24"
              />
          </div>
          <div className="contact__control align-right">
            <button type="submit" className="ml-auto mr-[2px] underline-link block">Send Message</button>
          </div>
        </form>
      </div>
      <img
        className="contact__rings absolute bottom-0 -translate-x-2/3 -translate-y-full laptop:-translate-x-[40%]"
        src="/src/assets/images/pattern-rings.svg"
        alt=""
        width="530"
        height="129"
      />
    </section>
  );
};

export default Contact;
