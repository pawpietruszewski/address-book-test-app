import React from 'react';
import UserTile from '../src/components/UserTile';

export default function Home(): JSX.Element {
  return (
    <div>
      <UserTile
        thumbnail="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="Tim"
        lastName="Wright"
        userName="tinykoala227"
        email="tim.wright@example.com"
        cell="0479-199-052"
        street="Bollinger Rd 4155"
        city="Sunshine Coast"
        state="Queensland"
        postcode="1046"
        phone="05-3370-8052"
      />
    </div>
  );
}
