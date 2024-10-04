import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../main';
import './ListingPage.css';
const ListingPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            {/* 
            <div class="section">
                <div className='para'>
                   
                </div>
            </div> */}

            <h1 className='header'>Events List</h1>
            <div className="container">
                <div className="part1">
                    {
                        users.map((user) => {
                            return (
                                <tr>


                                    <h5>📅 {user.Startdate}</h5>
                                    <br />
                                    <br />
                                    <br />
                                    <br />


                                </tr>
                            )
                        })
                    }
                </div>
                <div className="part2">
                    {
                        users.map((user) => {
                            return (
                                <tr>
                                    <ul>
                                        <li >
                                            <h1>{user.Eventname},</h1>
                                            <h4>📍 {user.Location}</h4>


                                        </li>
                                    </ul>
                                </tr>



                            )
                        })
                    }
                </div>

                <div className="part">

                </div>
                <div className="part">

                </div>
            </div>
        </div >
    )
}

export default ListingPage
