"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CourseCardProps {
    slug: string,
    image: string,
    title: string,
    description: string
}

export default function CourseCard({ title, image, description, slug }: CourseCardProps) {
    const router = useRouter();
    return (
        <div
            className="flex flex-col max-w-96 w-full border-3 rounded-md p-2 border-yellow-800 space-y-2">
            <div className="relative overflow-hidden rounded-lg mb-3 p-2 aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="hover:scale-105 transition-transform duration-300 w-full object-cover"
                />
            </div>
            <div className="space-y-1">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm line-clamp-3 text-gray-600">{description}</p>
            </div>

            <div className="mt-auto mb-3">
                <Link
                    href={`/course/${slug}`}
                    className="bg-yellow-800 hover:bg-yellow-700 transition-colors duration-300 ease-in text-gray-400 px-3 py-2 rounded-md w-full cursor-pointer"
                >
                    Check it out
                </Link>
            </div>
        </div>
    )
}