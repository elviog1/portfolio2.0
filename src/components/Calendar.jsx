import React from 'react'
import CodersRankActivity from '@codersrank/activity';

// register web component as <codersrank-activity> element
window.customElements.define('codersrank-activity', CodersRankActivity);
export default function Calendar() {
  return (
    <div>
        <codersrank-activity  branding={false} username="elviog1" labels={true} legend={true} tooltip={true}></codersrank-activity>
        
    </div>
  )
}
