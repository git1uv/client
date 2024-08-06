import React from 'react';
import Browser from '../components/PencilHolder/Browser';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile from '../components/PencilHolder/Mobile';

function PencilHolder() {
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

export default PencilHolder;