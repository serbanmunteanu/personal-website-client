import React from 'react'

interface FooterExternalLinkProps {
    name: string,
    link: string
}

const FooterExternalLink: React.FC<FooterExternalLinkProps> = ({name, link}) => {
    return (
        <div className="text-gray-300 my-2 cursor-pointer" onClick={() => window.open(link,"_blank")}>
            {name}
        </div>
    )
}

export default FooterExternalLink
