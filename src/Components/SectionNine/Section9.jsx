import React from 'react'
import "../../Components/SectionNine/Section9.jsx"
import "../../Components/SectionNine/Section9.css"
import "../SectionNine/Section9MediaQuery.css"


const Section9 = () => {

  return (
    <div className="section-9">
      {/* =======================custom Solutions================================== */}
      {/* ========================================================================= */}
      <div className="section-9-1">
        <div className='section-9-2'>
        <h1>Custom</h1>
        <h1>Solutions</h1>
        </div>
        <div className='section-9-3'>
          <p>Our team specializes in customizing IT development to meet your specific requierments. With our expertise, we deliver bespoke solutions tailored to address your unique challenges. Leverage our technical prowess and propet your business forward with our customized IT solutions.</p>
        </div> 
      </div>

      {/* ======================== courses =========================================== */}
      {/* ========================================================================== */}

      <div className='section-9-4'>
      {/* =========================================course one=================================== */}
      {/* ===================================================================================== */}

        <div className='section-9-5'>
          <div className='section-9-6'>
            <p>Front End</p>
            <p>Development</p>
          </div>
          <div className='section-9-6'>
            <p>Back End</p>
            <p>Development</p>
          </div>
        </div>

      {/* =========================================course two=================================== */}
      {/* ===================================================================================== */}

        <div className='section-9-5'>
          <div className='section-9-7'>
            <p>Progressive</p>
            <p>Web Apps</p>
          </div>
          <div className='section-9-7'>
            <p>Custom</p>
            <p>Web Apps</p>
          </div>
        </div>

      {/* =========================================course three================================= */}
      {/* ===================================================================================== */}

      <div className='section-9-5'>
          <div className='section-9-8'>
            <p>UI / UX Design</p>
          </div>
          <div className='section-9-8'>
            <p>React Native Apps</p>
            <p>(Android & IOS)</p>
          </div>
        </div>

      {/* =========================================course four================================== */}
      {/* ===================================================================================== */}

      <div className='section-9-5'>
          <div className='section-9-9'>
            <p>Cloud Solutions</p>
            <p>Microsoft Azure</p>
          </div>
          <div className='section-9-9'>
            <p>Prototyping &</p>
            <p>Tech Support</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section9