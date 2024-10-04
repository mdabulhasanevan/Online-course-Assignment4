import React from 'react'

export default function ProductPhoto() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-2  '>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://bohubrihi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcross-border-education-technologies-pte-ltd%2Fimage%2Fupload%2Fv1707651174%2Fts9kmsf8mk6udhomm5yz.jpg&w=1920&q=75"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>সফটওয়্যার ও ডিজিটাল প্রোডাক্ট ম্যানেজমেন্টের কোয়ালিফিকেশন অর্জন করুন। Pathao-এর হেড অফ প্রোডাক্ট আহমেদ ফাহাদকে এ কোর্সে পাচ্ছেন আপনার ইন্সট্রাক্টর হিসাবে।</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ডিজিটাল</div>
                        <div className="badge badge-outline">ম্যানেজমেন্ট</div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://bohubrihi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcross-border-education-technologies-pte-ltd%2Fimage%2Fupload%2Fv1696249890%2Fnkoyj84gmhl5coivntuf.jpg&w=1920&q=75"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>সফটওয়্যার ও ডিজিটাল প্রোডাক্ট ম্যানেজমেন্টের কোয়ালিফিকেশন অর্জন করুন। Pathao-এর হেড অফ প্রোডাক্ট আহমেদ ফাহাদকে এ কোর্সে পাচ্ছেন আপনার ইন্সট্রাক্টর হিসাবে।</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">E Commarce </div>
                        <div className="badge badge-outline">F Commarce</div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://bohubrihi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcross-border-education-technologies-pte-ltd%2Fimage%2Fupload%2Fv1713267352%2Fsgutigq1eezfggcpwjmd.jpg&w=1920&q=75"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    ডেটা অ্যানালিটিক্স!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Data-driven প্রবলেম সলভিংয়ের কনফিডেন্স অর্জন করুন। ডেটা সায়েন্স ও অ্যানালিটিক্সের ইন্ডাস্ট্রি-স্ট্যান্ডার্ড প্র্যাকটিসগুলো আয়ত্ত করুন একেবারে বিগিনার লেভেল থেকে।</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Data</div>
                        <div className="badge badge-outline">Analysis</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
