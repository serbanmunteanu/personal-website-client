import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TimelineOppositeContent } from '@material-ui/lab';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TimelineProps {
    icon: IconProp;
    flip: boolean;
    text: string;
    description: string;
    last: boolean;
}

const TimelineCustom = (props: {items: TimelineProps[]}) => {
  const [mobile,] = React.useState(window.innerWidth < 450)
  const align = mobile ? 'left' : 'alternate';
  const {items} = props;
  return (
    <Timeline align={align}>
        { 
            items.map(item => 
                <TimelineItem>
                { mobile && <TimelineOppositeContent className="hidden"/> }
                <TimelineSeparator>
                    <FontAwesomeIcon icon={item.icon} size="3x" className={`my-6 md:my-3 ${item.flip && 'flip'}`}/>
                 { !item.last && <TimelineConnector className="h-16 bg-color-red"/> }
                </TimelineSeparator>
                <TimelineContent>
                    <div className="container glass p-2 md:-mt-1">
                        <h1 className="text-xl text-center">{item.text}</h1>
                        <p className="text-gray-300 text-center">{item.description}</p>
                    </div>
                </TimelineContent>
              </TimelineItem>
            )
        }
    </Timeline>
  );
}

export default TimelineCustom;