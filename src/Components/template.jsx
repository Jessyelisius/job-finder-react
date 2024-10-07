import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Template(props) {
  return (
    <div>
      <Header page={"appliedJob"} />

        {/* Children are based inside between the header and the footer */}
        {props.children}
      <Footer />
    </div>
  )
}

export default Template