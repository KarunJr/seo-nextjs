import CourseCard from "./CourseCard"
import courses from "../assests/courses.json"
export const courseImage: Record<string, string> = {
    "reactjs-mastery": "/thumbnails/reactjs-mastery.png",
    "nextjs-mastery": "/thumbnails/nextjs-mastery.png",
    "nodejs-masterclass": "/thumbnails/nodejs-masterclass.png",
    "typescript-complete-guide": "/thumbnails/typescript-complete-guide.png",
    "fullstack-javascript": "/thumbnails/fullstack-javascript.png"
}
export default function Courses() {
    return (
        <main>
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    courses.map((course, idx) => (
                        <CourseCard key={idx} title={course.title} description={course.description} slug={course.slug} image={courseImage[course.slug]} />
                    ))
                }
            </section>
        </main>
    )
}