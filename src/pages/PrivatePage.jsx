import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PrivatePage = () => {
    const [courses, setCategories] = useState([]);

    useEffect(() => {
        fetch(
            `https://assignment-4-online-course-project-server-side.vercel.app/course`
        )
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    console.log(courses);

    return (
        <>
            <div className="p-3">
                <h2 className="font-bold text-center p-3">Our Courses {courses.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        courses.map((course) => (

                            <div key={course._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img className="w-screen h-60"
                                        src={course.img_url}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {course.title}
                                        <div className="badge badge-secondary"> {course.ratings}</div>
                                    </h2>
                                    <p>Lession:  {course.lession}- Duration: {course.duration}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline"> {course.level}</div>
                                        <div className="badge badge-outline"> {course.author}</div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/productDetails/${course._id}`}><button className="btn btn-sm btn-primary">view details</button> </Link>
                                    </div>
                                </div>
                            </div>

                        ))

                    }
                </div>

            </div>
        </>
    );
}

export default PrivatePage;