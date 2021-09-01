import React, {useState} from 'react'

const Contact = () => {

    const [item, setItem] = useState({
        "myname":"",
        "phone":"",
        "email":"",
        "message":""
    })

    const inputEvent=(e)=>{
        const{name,value}=e.target
        setItem((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        alert(`My name is ${item.myname}. My Phone number is ${item.phone}`)
    }

    return (
        <>

            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>

                            <div className="mb-3">
                                <label htmlFor="examplehtmlFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="myname" value={item.myname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={item.phone} onChange={inputEvent} placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={item.email} onChange={inputEvent}  placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={item.message} onChange={inputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
