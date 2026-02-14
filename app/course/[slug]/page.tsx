import { notFound } from "next/navigation";
import courses from "../../assests/courses.json";
import Script from "next/script";
import Image from "next/image";
import { courseImage } from "@/app/components/Courses";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

interface Course {
  slug: string,
  title: string,
  description: string;
  provider: string;
}

interface Props {
  params: Promise<{ slug: string }>
}


export function getCourse(slug: string): Course | undefined {
  const course = courses.find(course => course.slug === slug)
  return course;
}

//Pre-building the content
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

//Genearte Dynamic MetaData:
export async function generateMetadata({ params }: Props) {
  const course = getCourse((await params).slug);
  if (!course) return notFound();

  return {
    metadataBase: new URL(baseUrl),
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "website",
      siteName: "StartHub Academy",
      url: `/course/${course.slug}`,
      images: [
        {
          url: `/course/${(await params).slug}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/course/${course.slug}`,
    },
  };
}
export default async function CourseDetails({ params }: Props) {
  const course = getCourse((await params).slug)
  if (!course) return notFound();
  return (
    <main className="p-6">
      <article>
        <header>
          <h1 className="text-3xl font-bold">{course.title}</h1>
        </header>

        <section>
          <Image
            src={courseImage[course.slug]}
            alt={course.slug}
            width={400}
            height={400}
            className="rounded-lg"
          />

          <p className="mt-4">{course.description}</p>
          <p className="mt-2 text-gray-600">Provided by: {course.provider}</p>
        </section>
      </article>


      <Script type="application/ld+json" id="course-json-ld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: {
            "@type": "Organization",
            name: course.provider,
            sameAs: `${baseUrl}`
          },
          url: `${baseUrl}/courses/${course.slug}`
        })}
      </Script>
    </main>
  )
}