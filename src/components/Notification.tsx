import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface NotificationProps {
    logo: any,
    title: string,
    fontAwesomeIcon: boolean,
    subtitle: string,
    flexDirectionType: string
}

const Notification: React.FC<NotificationProps> = ({logo, title, subtitle, flexDirectionType, fontAwesomeIcon}) => {
    const { t } = useTranslation(); 
    return (
        <div className={`glass flex p-5 mb-5 font-serif ${flexDirectionType}`}>
            <div className="right my-auto">
                 {fontAwesomeIcon ? <FontAwesomeIcon icon={logo} size="2x" /> : logo}
            </div>
            <div className={`container ${flexDirectionType === 'row-reverse' ? 'align-start' : ''} ${fontAwesomeIcon ? '' : 'align-start'} mx-3`}>
                <div className="font-semibold mb-3">
                    {t(title)}
                </div>
                <div className="text-gray-300">
                    {t(subtitle)}
                </div>
            </div>
        </div>
    )
}

export default Notification
