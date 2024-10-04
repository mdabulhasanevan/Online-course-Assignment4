import React from 'react'

export default function AboutUs() {
    return (
        <div className='mt-2'>
            <h2 className='font-bold'>About Us</h2>

            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/444481741_7942012099166287_7601817381755814383_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9UlYv5RuwUA28Zv443_-2PpwR9iq2H7I-nBH2KrYfssZus6eEB4HECpc8UjRLEyAAKAL60us3-ea0dkH3VpJl&_nc_ohc=ckz6_e_5aA4Q7kNvgHY6EaP&_nc_ht=scontent.fdac22-1.fna&_nc_gid=A4m_gi9BanPVOmgNZc1yfkZ&oh=00_AYCvwNxLCVp7Frxgb71-RQ7zpHtCa_0kAOrcB2VuySw17Q&oe=6705C175"
                        className="object-contain h-48 w-130 " />
                    <div>
                        <h1 className="text-2xl font-bold">I'm Abul Hasan!</h1>
                        <p className="py-6">
                            Founder of Edu Online Ltd. here you can learn verious type of technology and scienc related online courses
                        </p>
                        <button className="btn btn-primary">More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
