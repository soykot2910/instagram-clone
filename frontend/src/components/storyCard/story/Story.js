import React from 'react'
import classes from './Story.module.css'

const Story = () => {
    return (
        <div className="d-flex mx-2 flex-column justify-content-center ">
          <div className={classes.userImgWrapper}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
              alt="hime"
              className={classes.userImg}
            />
          </div>
          <p style={{fontSize:'.9rem',marginLeft:'5px'}}>jon doe</p>
        </div>
    )
}

export default Story
