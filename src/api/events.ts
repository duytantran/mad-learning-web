import { Event } from 'src/types/domain';
import {authFetch} from "../utils/request";

export async function fetchEvents(): Promise<Array<Event>> {
     const response = await authFetch('https://localhost:5001/api/event', {
       method: 'GET',
     });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Failed to fetch events: ${response.statusText}.`);
}

export async function fetchEvent(id: string): Promise<Event> {
  const response = await authFetch(`https://localhost:5001/api/event/${id}`, {
    method: 'GET',
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch event: ${response.statusText}.`);
}

export async function createEvent(
  starttime: string,
  endtime: string,
  name: string,
  description: string,
  firstName: string,
  lastName: string,
  email: string
): Promise<Boolean> {
  const response = await authFetch('https://localhost:5001/api/Event', {
    method: 'POST',
    body: JSON.stringify({
      starttime: starttime,
      endtime: endtime,
      name: name,
      description: description,
      owner: {
        id: '5f747809885eeb66847e7726', //TODO remove
        firstName,
        lastName,
        email,
      },
      participants: [],
    }),
  });
  if (response.ok) {
    return true;
  }
  throw new Error(`Failed to create event: ${response.statusText}.`);
}
