import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';

function Dashboard(props) {
    return (
        <div className="dashboard">
          <NavigationBar />
        </div>
      );
}

export { Dashboard };