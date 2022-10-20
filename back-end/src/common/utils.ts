import { Ticket } from '../entities';

export const getTicketCode = (
  ticket: Pick<Ticket, 'position' | 'serviceCode'>,
): string => ticket.serviceCode + ticket.position.toString().padStart(4, '0');
