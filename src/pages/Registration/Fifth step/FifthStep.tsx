import moment from 'moment'
import { useEffect } from 'react'
import { type User } from '../../../models/user'
import './FifthStep.css'

export interface FifthStepProps {
  user: User
}

export const FifthStep = ({ user }: FifthStepProps): JSX.Element => {
  useEffect(() => {
    const img = document.getElementById('img')
    if (user.photo != null) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // @ts-expect-error
        img?.setAttribute('src', reader.result)
      }
      reader.readAsDataURL(user.photo)
    }
    return () => {}
  }, [user])

  return <div className='user-summary-info'>
        <h3>Check yor data</h3>
        <div className='avatar-and-name'>
            <img id='img' src="#" alt="avatar" className={(user.photo != null) ? '' : 'imageless'} />
            <div>
                <span>{ user.firstName }</span><br />
                <span>{ user.lastName }</span>
            </div>
        </div>
        <div className='birthday'>
            <p>Birthday</p>
            <p>{ moment(user.birthday).format('DD.MM.YYYY') }</p>
        </div>
        <div className='phone-number'>
            <p>Phone number</p>
            <p>{ user.phone }</p>
        </div>
        <div className="gender">
            <p>Gender</p>
            <p>{ user.gender === 'M' ? 'Male' : 'Female' }</p>
        </div>
    </div>
}