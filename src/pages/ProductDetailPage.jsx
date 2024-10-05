import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetailPage = () => {

    const courseDetails = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(courseDetails);

    //const { title, image_url, rating, details, category_id } = courseDetails;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className='flex'>
                    <img
                        src={courseDetails.img_url}
                        alt="Shoes" />
                    <img
                        src={courseDetails.author_img_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{courseDetails.title}</h2>
                    <p>{courseDetails.details}</p>
                    <hr></hr>
                    <p>lession: {courseDetails.lession}</p>
                    <p>student: {courseDetails.student}</p>
                    <p>duration: {courseDetails.duration}</p>
                    <p>price: {courseDetails.price}</p>
                    <p>assessments: {courseDetails.assessments}</p>
                    <p>author: {courseDetails.author}</p>

                    <p>level: {courseDetails.level}</p>
                    <p>ratings: {courseDetails.ratings}</p>
                    <p>assessments: {courseDetails.assessments}</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;