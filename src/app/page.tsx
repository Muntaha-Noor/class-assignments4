import React from 'react'
import Card from './Components/card'

const page = () => {
  return (
      <div>
        <Card Name="Muntaha" Age={14} RollNo={4326} class="Monday 2-5"/>
        <Card Name="Warda" Age={16} RollNo={9646} class="Friday 9-12"/>
        <Card Name="Munsfirah" Age={19} RollNo={3649} class="Tuesday 7-10"/>
      </div>
  )
}

export default page