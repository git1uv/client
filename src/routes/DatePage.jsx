import React from 'react';
import Browser from '../components/Calendar/Browser';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile from '../components/Calendar/Mobile';

function DatePage() {
  return (
    <div className="App">
      <BrowserView>
        <Browser />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </div>
  );
}

export default DatePage;