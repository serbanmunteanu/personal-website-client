import React from 'react'
import Cloud from '../components-svg/Cloud'
import Rocket from '../components-svg/Rocket'
import Teach from '../components-svg/Teach'
import Work from '../components/Work'

function QuickWork() {
    const [items,] = React.useState([
        {
            content: <Rocket/>,
            name: 'firstPage.section2.work.rocket.title',
            description: 'firstPage.section2.work.rocket.description',
        },
        {
            content: <Cloud/>,
            name: 'firstPage.section2.work.cloud.title',
            description: 'firstPage.section2.work.cloud.description',
        },
        {
            content: <Teach/>,
            name: 'firstPage.section2.work.teach.title',
            description: 'firstPage.section2.work.teach.description',
        }
    ])
    return (
        <div className="container flex flex-col md:flex-row justify-evenly">
            {
                items.map(item => <Work component={item.content} title={item.name} description={item.description}/>)
            }
        </div>
    )
}

export default QuickWork
