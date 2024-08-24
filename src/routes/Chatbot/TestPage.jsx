import React from 'react'
import Browser from '../../components/Test/TestStart/Browser'
import { BrowserView, MobileView } from 'react-device-detect'
import Mobile from '../../components/Test/TestStart/Mobile'

export default function TestPage() {
  return (
    <div className="App">
      <BrowserView>
        <Browser />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </div>
  )
}
