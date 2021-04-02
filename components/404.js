import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
 
const NotFound = () => {

    const router = useRouter();
    // after arriving at 404 page, user will be redirected home in 3 seconds
    useEffect(() => {
       setTimeout(() => {
           router.push('/');
       }, 3000)
    }, [])
    return (       
        <section id="not-found" className="meeting-one">
            <div className="container">
                <div className="row">
                    <div className="meeting-one__content">
                        <div className="block-title text-left">
                            <h2 className="block-title__title">Oooops...<br />
                            That page can't be found.</h2>
                        </div>
                        <p className="meeting-one__block-text">Go back to the <Link href="/"><a>Homepage</a></Link>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
