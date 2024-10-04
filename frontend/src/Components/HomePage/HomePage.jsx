import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../main';
import './HomePage.css';

const HomePage = () => {
    const [Eventname, eventName] = useState()
    const [Startdate, startDate] = useState()
    const [Enddate, endDate] = useState()
    const [Location, setLocation] = useState()
    const [Tickets, setTicket] = useState()
    const [Price, setPrice] = useState()
    const [Capacity, setCapacity] = useState()


    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/createUser`,
            {
                Eventname,
                Startdate,
                Enddate,
                Location,
                Tickets,
                Price,
                Capacity,


            })
            .then(result => {
                console.log(result)

                toast.success("Event created successfully!")
                navigate('/listing')
            })
            .catch(err => console.log(err))
    }


    return (
        <div >
            <h1>Create Event</h1>
            <form onSubmit={Submit} >
                <div className="container">
                    <div className="part">
                        <br />
                        <br />
                        {/* <label htmlFor="eventname"> Event name: </label> */}
                        🎶 <input type="text" className='name' onChange={(e) => eventName(e.target.value)} required placeholder='Event Name' /><br /> <br />
                        <div className='datetime'>
                            <label for="startdate">start:</label>
                            <input type="datetime-local" className='name' onChange={(e) => startDate(e.target.value)} /> <br />
                            <label for="enddate">end :</label>
                            <input type="datetime-local" className='name' onChange={(e) => endDate(e.target.value)} /> <br /> <br />
                        </div>
                        {/* <label htmlFor="location"> Location: </label> */}
                        📍 <input type="text" className='name' onChange={(e) => setLocation(e.target.value)} placeholder='Event Location' required /> <br /><br />



                        <div className="part">
                        </div>


                        <h4>Event Options</h4>
                        <br />
                        {/* <label htmlFor="ticket"> Tickets:</label> */}
                        &#127915; <input type="text" id="name" name="name" onChange={(e) => setTicket(e.target.value)} placeholder='Tickets' /><br /> <br />
                        {/* <label htmlFor="ticket"> Price:    </label> */}
                        &#128181; <input type="text" id="name" name="name" onChange={(e) => setPrice(e.target.value)} placeholder='Price ' /><br /> <br />
                        {/* <label htmlFor="ticket"> Capacity: </label> */}
                        &#127760; <input type="text" id="name" name="name" onChange={(e) => setCapacity(e.target.value)} placeholder='Capacity' /><br /> <br />

                        <button type="submit" className="submit-btn" >Create Event</button>

                    </div>
                    <div className="part">

                    </div>

                </div>
            </form>
        </div >






    )
}

export default HomePage
