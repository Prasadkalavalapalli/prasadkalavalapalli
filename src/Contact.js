import React from 'react'

function Contact() {
  return (<>
       <div className='contacts'>
  <div className='contact-text'>
 <h2> Contact Us</h2>
 <p><b>
We would love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out to us. I am  here to assist you!
</b></p>
<h5>Our Location:</h5> 
<p>Chinna Kalavalapalli
H/O Mamidivada,Rambilli
Dimilli (post)
Vishkapatnam,AndhraPradesh
Pincode:531061.</p>

{/* <h5>Phone Number :</h5> */}
<p>9987654321,<br/>8688113655.</p>

{/* <h5>Email Address :</h5> */}
<p>prasadkalavapalli70@gmail.com,<br/>
prasadkalavalpalli70@gmail.com.</p>

<h5>Send Us a Message :</h5>
<p>If you prefer to get in touch via message,call, please fill out the form below, and we will respond as soon as possible.</p>
<button className='btn  btn-success m-2 px-4'> Request Form</button>
  </div>
  {/* <img src='contact.webp' alt='Image is Deleted....!'/>  */}
  </div>
   </>
  )
}

export default Contact
