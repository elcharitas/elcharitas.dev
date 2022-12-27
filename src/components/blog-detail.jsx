const BlogDetail = ({ author, dateAdded, coverImage, slug, title }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <a
            className="block mb-6 overflow-hidden rounded-md"
            href={`https://blog.elcharitas.dev/${slug}`}
        >
            <img className="w-full h-64" src={coverImage} alt={title} />
        </a>
        <p className="mb-2 text-coolGray-400 font-medium">
            {author} • {dateAdded}
        </p>
        <a
            className="inline-block mb-4 text-2xl leading-tight text-white hover:text-coolGray-100 font-bold hover:underline"
            href={`https://blog.elcharitas.dev/${slug}`}
        >
            {title}
        </a>
    </div>
);

export default BlogDetail;
