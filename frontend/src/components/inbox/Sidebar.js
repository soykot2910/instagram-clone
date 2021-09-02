import React from 'react'
import classes from './Inbox.module.css'
const data = [1, 2, 3, 4, 43, 43, 43, 43, 4, 4, 34, 34, 34, 3, 4, 434, 4];


function Sidebar() {
    return (
       <>
        <div className={`border-bottom ${classes.inboxHeader}`}>
        <h6 className="text-dark mx-auto">
          soykot2910
          <i className="bi bi-chevron-down"></i>
        </h6>
        <a href="/message" className="ms-auto">
          <i className="bi bi-pencil-square"></i>
        </a>
      </div>
      <div className="d-flex p-2 mx-4 justify-content-between">
        <h6>Messages</h6>
        <h6 style={{color:'blue'}}>1 Reguest</h6>
      </div>
      <div className={classes.usersWrapper}>
        {data.map((item) => (
          <div className={`${classes.userInfoWrap}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
              alt="user"
              className={classes.userImg}
            />
            <div className={classes.userInfo}>
              <p>jon21</p>
              <p className="text-muted">This is the first</p>
            </div>
            <p className="ms-auto mt-4">1w</p>
          </div>
        ))}
      </div>
       </>
    )
}

export default Sidebar
