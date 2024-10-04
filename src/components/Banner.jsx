import React from 'react'

export default function Banner() {
    return (
        <div className=''>
            <div className="hero "
                style={{
                    backgroundImage: "url(https://goedu.ac/wp-content/uploads/2024/03/Confidence-Students-at-GoEdu-Online-Learning-Platform-Best-Online-Learning-Platform-In-Bangladesh-2.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Start shaping your future learning online!</h1>
                        <p className="mb-5">
                        Eduonline Courses, your best choice to find the best online courses in Bangladesh. Learn at your convenience. Quality professional courses with certificates and varieties of topics.
                        </p>
                        <button className="btn btn-primary">Browse All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
