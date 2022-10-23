import React, { useState } from 'react';
import users from '../users.json'

const card = () => {
    // const user0 = users[0].name.title + " " + users[0].name.first + " " + users[0].name.last
    let randomNum = Math.floor(Math.random() * users.length)
    const [indexNum, setIndexNum] = useState(randomNum)

    const changeIndex = () => {
        let random = Math.floor(Math.random() * users.length)
        setIndexNum(random)
    }

    const colors = ['lightyellow', 'lightgreen', 'lavenderblush', 'lightskyblue', 'lightcoral']
    let randomColorIndex = Math.floor(Math.random() * colors.length)
    let randomcolor = colors[randomColorIndex]

    document.body.style = `background: ${randomcolor}`

    return (
        <div className='card'>
            {/* <h1>{user0}</h1> */}
            <h1>{users[indexNum].name.title} {users[indexNum].name.first} {users[indexNum].name.last} </h1>
            <img src={users[indexNum].picture.large} alt="" />
            {/* Cómo es código dinámico, se usan llaves para acceder a la imagen */}
            <ul>
                <li>
                    <i className="fa-solid fa-envelope"></i> {users[indexNum].email}
                </li>

                <li>
                    <i className="fa-solid fa-phone"></i> {users[indexNum].phone}
                </li>

                <li>
                    <i className="fa-solid fa-location-dot"></i> {users[indexNum].location.city} {users[indexNum].location.country}
                </li>
            </ul>


            <button onClick={changeIndex} ><i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default card;