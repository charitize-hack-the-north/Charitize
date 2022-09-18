import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/dashboard/NavigationBar';
import CharityCard from '../components/dashboard/CharityCard';

function Dashboard(props) {
    return (
        <div className="flex flex-row h-screen bg-bg bg-cover">
          <NavigationBar />
          <div className='w-full'>
            <CharityCard />
          </div>
        </div>
      );
}

export { Dashboard };