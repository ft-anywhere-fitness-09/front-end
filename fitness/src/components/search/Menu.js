import React from 'react'

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <h3>Name: {item.name}</h3>
                            <h3>Time: {item.time}</h3>
                            <h3>Duration: {item.duration}</h3>
                            <h3>Level: {item.level}</h3>
                            <h3>Location: {item.location}</h3>
                            <h3>Number of Attendees: {item.attend}</h3>
                            <h3>Max Size: {item.size}</h3>
                            
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;