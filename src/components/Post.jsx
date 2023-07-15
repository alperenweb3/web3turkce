import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        height={420}
        width={600}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <div>{post.frontmatter.category}</div>
      </div>
      <div className="mt-2">
        <Link
          className="text-2xl text-gray-700 font-bold hover:underline"
          href={`/blog/${post.slug}`}
        >
          {post.frontmatter.title}
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link
          className="text-gray-900 hover:text-blue-600"
          href={`/blog/${post.slug}`}
        >
          Read More
        </Link>
        <div className="flex items-center">
            <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src={post.frontmatter.author_image} alt={post.frontmatter.author} />
            <h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  );
}
