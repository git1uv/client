import React from 'react'
import Mobile from '../components/Login/Mobile';
import { BrowserView, MobileView } from 'react-device-detect'
import Browser from '../components/Login/Browser';

export default function Login() {
  return (
    <div>
      <BrowserView>
        <Mobile />
      </BrowserView>
      <MobileView>
        <Browser />
      </MobileView>
    </div>
  );
}
