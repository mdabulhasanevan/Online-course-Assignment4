import React from 'react'

export default function HowtoUse() {
    return (
        <div className='mt-2'>
            <div className="bg-base-200 collapse">
                <input type="checkbox" className="peer" />
                <div className="font-bold collapse-title bg-primary text-primary-content  peer-checked:text-secondary-content">
                    কিভাবে আমার সাইটটি কাজ করে
                </div>
                <div className="collapse-content bg-slate-100-400 p-5  ">

                    
                    <ul className="steps">
                        <li className="step step-secondary">HTML</li>
                        <li className="step step-primary">Tailwind</li>
                        <li className="step step-secondary">Daisyui</li>
                        <li className="step step-primary">React</li>
                        <li className="step step-success">FireBase</li>
                        <li className="step step-primary">ExpressJS</li>
                        <li className="step">CORS</li>
                        <li className="step">Netlify</li>
                        <li className="step">Vercel</li>
                    </ul>

               
            </div>
        </div>
        </div >
    )
}
