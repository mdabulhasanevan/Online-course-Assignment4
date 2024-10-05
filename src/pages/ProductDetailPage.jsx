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
                <figure className=''>
                    <img className='relative '
                        src={courseDetails.img_url}
                        alt="Shoes" />
                    <img className='absolute top-0 items-center w-36 rounded-xl'
                        src={courseDetails.author_img_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{courseDetails.title}</h2>
                    <p>{courseDetails.details}</p>
                    <hr></hr>
                    <p><span className='font-bold'>lession:    </span>{courseDetails.lession}</p>
                    <p><span className='font-bold'>student:    </span>{courseDetails.student}</p>
                    <p><span className='font-bold'>duration:   </span>{courseDetails.duration}</p>
                    <p><span className='font-bold'>price:      </span>{courseDetails.price}</p>
                    <p><span className='font-bold'>assessments:</span>{courseDetails.assessments}</p>
                    <p><span className='font-bold'>author:     </span>{courseDetails.author}</p>

                    <p><span className='font-bold'>level:      </span>{courseDetails.level}</p>
                    <p><span className='font-bold'>ratings:    </span>{courseDetails.ratings}</p>
                    <p><span className='font-bold'>assessments:</span>{courseDetails.assessments}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;