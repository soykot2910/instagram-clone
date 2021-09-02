import React from 'react'
import {Card} from 'react-bootstrap'
import Story from './story/Story'
import classes from './StoryCard.module.css'


const stories=[1,2,3,4,5,2,3,4,4,4,]

const StoryCard = () => {
    return (
        <Card className={`mt-4 p-3 d-flex flex-row ${classes.storyCard} `}>
            {stories.map((story)=>(
                <Story/>
            ))}
        </Card>
    )
}

export default StoryCard
