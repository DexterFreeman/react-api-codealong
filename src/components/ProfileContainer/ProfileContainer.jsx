import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileContainer.scss'
const ProfileContainer = ({data}) => {

    
    let JSX = data.map(person => {
        console.log(person.name.first);
        return (
        <div className="card">
            <ProfileCard
            key={`${person.login.uuid}`}
            name={`${person.name.first} ${person.name.last}`}
            image={person.picture.large}
            email={person.email}
            phoneNumber={person.phone}
            />
        </div>);
    });

  return (
    <div className='card-container'>
        {JSX}
    </div>
  )
}

export default ProfileContainer