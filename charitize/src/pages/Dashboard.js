import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../components/dashboard/NavigationBar';
import CharityCard from '../components/dashboard/CharityCard';

function Dashboard(props) {
    return (
        <div className="dashboard">
          <NavigationBar />
          <CharityCard />
        </div>
      );
}

export { Dashboard };