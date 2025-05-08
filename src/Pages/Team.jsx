import React from 'react'
import Nav from '../components/Nav';
import Ourteam from '../components/Ourteam';
import Teamtable from '../components/Teamtable';


function Team() {
  return (
    <div>
        <Nav />
        <div className="pt-16">
            <Ourteam />
            <Teamtable />
        </div>
    </div>
  )
}

export default Team