export enum UserRole {
  officer = 0,
  admin,
}

export enum TicketState {
  /**
   * User created a ticket
   */
  notAssigned = 0,
  /**
   * Officer assigned this ticket to their counter
   */
  assigned = 1,
  /**
   * Finish
   */
  processed = 2,
}

export const JWT_SECRET: string = process.env.JWT_SECRET
  ? process.env.JWT_SECRET
  : (() => {
      throw new Error('process.env.JWT_SECRET is not defined');
    })();
