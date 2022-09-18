import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/dashboard/NavigationBar';
import CharityInfo from '../components/dashboard/CharityInfo';

function SponsorPage(props) {
    return (
        <div className="flex flex-row h-screen bg-bg bg-cover">
          <div className='w-full'>
            <CharityInfo />
          </div>
        </div>
      );
}

export { SponsorPage };