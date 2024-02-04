import { BlogCard } from "@/lib/unchained/unchainedSection1";
import { UnchainedPageProps } from "@/pages/unchained";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateString: string): string {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Format the date into "Month Day, Year" format
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function UnchainedSection1({
  unchainedSection1Props,
}: UnchainedPageProps) {
  // const test = unchainedSection1Props.featuredBlogs;
  // console.log("/unchained: ", test);

  return (
    <section className=" mb-[96px] bg-hero-cg-gradient pt-[180px]">
      <div className="main-text max-w-[1152px] mx-auto flex justify-between w-full items-end mb-[48px]">
        <div className="text-left">
          <h5>Floating Header text</h5>
          <h1>Welcome to the Unchained page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button>Subscribe to Newsletter</button>
      </div>
      <ul className="featured-cards flex gap-5 justify-center">
        {unchainedSection1Props.featuredBlogs.map((blogCard: BlogCard) => {
          return (
            <li key={blogCard.title} className="max max-w-[564px]">
              <Link href={`/unchained/${blogCard.slug}`}>
                <div className="blog-card-img h-[376px]">
                  <Image
                    src={`https:${blogCard.cardImg?.src}` || ""}
                    alt={blogCard.cardImg?.alt || ""}
                    height={376}
                    width={blogCard.cardImg?.width}
                  />
                </div>
                <div className="card-text">
                  <div className="category-container">
                    {blogCard.category.map((category) => (
                      <span key={`${blogCard.title}/${category}`}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3>{blogCard.title}</h3>
                  <p>{blogCard.about}</p>
                  <div className="card-data">
                    {blogCard.authors.map((author) => (
                      <span key={`${blogCard.title}/${author}`}>{author}</span>
                    ))}
                    <span>{formatDate(blogCard.datePublished)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
