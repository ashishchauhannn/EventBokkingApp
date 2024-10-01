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
    const [Ticket, setTicket] = useState()
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
                Ticket,
                Price,
                Capacity
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
            <form onSubmit={Submit}>

                <div className="container">
                    <div className="part">
                        <br />
                        <br />
                        <label htmlFor="eventname"> Event name: </label>
                        <input type="text" className='name' onChange={(e) => eventName(e.target.value)} required /><br /> <br />
                        <div className='datetime'>
                            <label for="startdate">start:</label>
                            <input type="datetime-local" className='name' onChange={(e) => startDate(e.target.value)} /> <br />
                            <label for="enddate">end:</label>
                            <input type="datetime-local" className='name' onChange={(e) => endDate(e.target.value)} /> <br /> <br />
                        </div>
                        <label htmlFor="location"> Location: </label>
                        <input type="text" className='name' onChange={(e) => setLocation(e.target.value)} required /><br />



                    </div>
                    <div className="part">Part 2</div>

                    <div className="part">

                        <h4>Event Options</h4>
                        <br />
                        <label htmlFor="ticket"> Tickets:</label>
                        <input type="number" id="name" name="name" onChange={(e) => setTicket(e.target.value)} /><br /> <br />
                        <label htmlFor="ticket"> Price:    </label>
                        <input type="number" id="name" name="name" onChange={(e) => setPrice(e.target.value)} /><br /> <br />
                        <label htmlFor="ticket"> Capacity: </label>
                        <input type="number" id="name" name="name" onChange={(e) => setCapacity(e.target.value)} /><br /> <br />

                        <button type="submit" className="submit-btn">Submit</button>



                    </div>

                    <div className="part">Part 4</div>

                </div>
            </form>
        </div >
    )
}

export default HomePage
