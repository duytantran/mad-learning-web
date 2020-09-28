import React from 'react';
import { Link } from '@reach/router';

import Alert from '../../../../components/Alert';
import EventCard from '../EventCard';
import { Event } from '../../../../types/domain';
import {
  GridList,
  GridItem,
  EventInfoList,
  EventInfo,
  DateInfo,
} from './styled';
import { formatDate } from '../../../../utils/formatting';

type EventListProps = {
  events: Array<Event>;
};

function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <Alert
        heading="No ongoing events"
        description="Check again later to see if there are any updates."
        headingAs="h2"
      />
    );
  }

  return (
    <GridList>
      {events.map(({ id, name, time, location, image, imageAlt }) => (
        <GridItem key={id}>
          <Link to={`/event/${id}/${name}`}>
            <EventCard
              heading={name}
              image={image}
              imageAlt={imageAlt}
              content={
                <EventInfoList>
                  <EventInfo>
                    <DateInfo>{formatDate(time, 'MMM d')}</DateInfo> -{' '}
                    {formatDate(time, 'HH:mm')} hrs
                  </EventInfo>
                  <EventInfo>{location}</EventInfo>
                </EventInfoList>
              }
            />
          </Link>
        </GridItem>
      ))}
    </GridList>
  );
}

export default EventList;