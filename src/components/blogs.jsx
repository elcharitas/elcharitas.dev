import React from "react";

const BlogList = () => (
  <section
    className="py-16 md:py-24 lg:pb-52 bg-coolGray-900"
    style={{
      backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top"
    }}
  >
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap items-center mb-16">
        <div className="w-full md:w-3/4 mb-8 md:mb-0">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-900 bg-violet-100 font-medium uppercase rounded-full shadow-sm">
            blog.elcharitas.dev
          </span>
          <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter">
            Recent Updates
          </h3>
          <p className="text-lg md:text-xl text-coolGray-400 font-medium">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage your business in one secure
            platform.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <a
            className="flex items-center justify-center py-2 px-4 ml-auto text-sm leading-5 text-violet-50 font-medium bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 md:max-w-max rounded-md"
            href="#"
          >
            View All Posts
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/room.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/effect5.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/work6.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/learn3.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/macbook3.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <a className="block mb-6 overflow-hidden rounded-md" href="#">
            <img
              className="w-full"
              src="flex-ui-assets/images/blog/work5.jpg"
              alt
            />
          </a>
          <p className="mb-2 text-coolGray-400 font-medium">
            John Doe • 19 Jan 2022
          </p>
          <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href="#"
          >
            A small business is only as good as its tools and it is totally
            true.
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BlogList;
