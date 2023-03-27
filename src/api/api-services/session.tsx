import moment from "moment";
// export interface ISessionService {
//   private _authToken
// }
export class SessionService {
  private _date: Date;

  private _authToken: string | null = null

  constructor () {
    this._date = new Date()
  }

  public get date (): string {
    return moment(this._date).format('DD.MM.YYYY-h:mm:ss a')
  }

  public get authToken (): string | null {
    return this._authToken
  }

  public set authToken (token: string | null) {
    this._authToken = token
  }
}
export const sessionService = new SessionService()
