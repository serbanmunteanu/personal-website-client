import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ServiceCategories {
    name: string,
    description: string
}

interface ServiceTechnologies {
    color: string,
    logo: IconProp
}

interface ServiceProps {
    name: string,
    active: boolean,
    description: string,
    categories: ServiceCategories[],
    logo: any,
    technologies: ServiceTechnologies[],
    frameworks: string[]
}

const Service: React.FC<ServiceProps> = ({name, active, description, categories, logo, technologies, frameworks}) => {
    return (
        <div className={`${active ? '' : 'hidden'} pb-0 md:py-5`}>
            <div className="container mx-0 md:mx-5 my-5 md:mx-auto flex flex-col md:flex-row justify-around font-serif">
                <div className="w-full px-0 md:w-1/2 md:px-5 my-auto">
                    <div className="w-full px-5 md:px-0 md:w-2/3 xl:w-2/4 mx-auto">
                        {logo}
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-0 md:px-5 xl:my-auto">
                    <div className="container text-gray-300 my-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</div>
                    <h1 className="text-2xl">Frameworks</h1>
                    <div className="container flex flex-wrap md:flex-row justify-start mb-5">
                        {
                            frameworks.map(framework => <div className="text-gray-300 mr-5 md:mr-10"><a href="#">{framework}</a></div>)
                        }
                    </div>
                    <h1 className="text-2xl">Stack</h1>
                    <div className="container">
                        {
                            technologies.map(tech => <FontAwesomeIcon icon={tech.logo} size="3x" className="mb-2 md:mb-0 mr-8 md:mr-10" style={{color: tech.color}} />)
                        }
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h1 className="text-3xl text-center font-serif uppercase tracking-wider color-red mt-10 md:mt-16">Categories</h1> 
                <div className={`container flex flex-col md:flex-row pt-5 justify-center md:mx-auto ${ categories.length > 3 ? 'md:flex-wrap' : ''}`}>
                    {
                        categories.map(category => <div className={`glass mx-0 mb-5 md:my-0 md:mx-3 w-full md:w-1/3 font-serif  ${ categories.length > 3 ? 'md:mb-5' : ''}`}>
                            <h1 className="text-xl text-center capitalize py-3 px-2">{category.name}</h1>
                            <div className="text-gray-300 px-2 md:px-5 pb-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category.description}</div>
                        </div> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
