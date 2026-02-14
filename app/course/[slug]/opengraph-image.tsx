import { ImageResponse } from 'next/og'
import { getCourse } from './page'
import { notFound } from 'next/navigation'
// Image metadata
export const size = {
    width: 1200,
    height: 630,
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const course = getCourse((await params).slug)
    console.log("Course:", course);
    if (!course) notFound();
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={`${baseUrl}/thumbnails/${(await params).slug}.png`}
                    alt={(await params).slug}
                    width="100%"
                    height="100%"
                />
            </div>
        )
    )

}