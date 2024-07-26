import React from 'react'
import Mobile from '../components/Signup/Signup/Mobile';
import Browser from '../components/Signup/Signup/Browser';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Signup() {
  <div>
    <BrowserView>
      <Mobile />
    </BrowserView>
    <MobileView>
      <Browser />
    </MobileView>
  </div>
}
