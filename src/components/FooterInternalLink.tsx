import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router';

interface FooterInternalLinkProps {
    name: string,
    link: string
}

const FooterInternalLink: React.FC<FooterInternalLinkProps> = ({name, link}) => {
    const {t} = useTranslation();
    const history = useHistory();

    return (
        <div className="text-gray-300 my-2 cursor-pointer" onClick={() => history.push(link)}>
            {t(name)}
        </div>
    )
}

export default FooterInternalLink
