import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/dashboard/NavigationBar';
import CharityCard from '../components/CharityCards/CharityCard';
import CharityList from '../components/CharityCards/CharityCardList';

function Dashboard(props) {
    return (
        <div className="flex flex-row h-screen bg-bg bg-cover">
          <NavigationBar />
          <div className='w-full'>
            <CharityList />
          </div>
        </div>
      );
}

export { Dashboard };