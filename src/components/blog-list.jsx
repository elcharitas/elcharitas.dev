import BlogDetail from "./blog-detail";

const BlogList = () => (
    <section
        className="py-16 md:py-24 lg:pb-52 bg-coolGray-900"
        style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
        }}
    >
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center mb-16">
                <div className="w-full md:w-3/4 mb-8 md:mb-0">
                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-primary-900 bg-primary-100 font-medium uppercase rounded-full shadow-sm">
                        blog.elcharitas.dev
                    </span>
                    <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter">
                        Recent Updates
                    </h3>
                    <p className="text-lg md:text-xl text-coolGray-400 font-medium">
                        Recent updates from the blog.
                    </p>
                </div>
                <div className="w-full md:w-1/4">
                    <a
                        className="flex items-center justify-center py-2 px-4 ml-auto text-sm leading-5 text-primary-50 font-medium bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 md:max-w-max rounded-md"
                        href="https://blog.elcharitas.dev/archive"
                    >
                        View All Posts
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4">
                <BlogDetail />
            </div>
        </div>
    </section>
);

export default BlogList;
