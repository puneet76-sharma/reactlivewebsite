import React from 'react'
import Card from './Card'
import Data from './Data'

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        
                        {Data.map((val)=>{
                            return <Card key={val.id} title={val.title} desc={val.desc} img={val.img} />
                        })}    

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
