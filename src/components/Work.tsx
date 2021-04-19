import React from 'react'
import { useTranslation } from 'react-i18next';

interface WorkProps {
    component: any,
    title: string,
    description: string
}

const Work: React.FC<WorkProps> = ({component, title, description}) => {
    const {t} = useTranslation();

    return (
        <div className="glass my-5 mx-5 md:w-1/3">
            {component}
            <div className="container text-center capitalize font-serif font-medium text-xl mb-3">
                {t(title)}
            </div>
            <div className="container px-5 pb-3 font-serif text-gray-300">
                {t(description)}
            </div>
        </div>
    )
}

export default Work
