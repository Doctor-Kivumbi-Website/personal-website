import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="section" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              <h2
                className="h3 mb-6">
                    About</h2>
              <div className="content">
              Are you seeking guidance, healing, and transformation in your life? Look no further than our esteemed practitioner, <span className='font-bold'>Doctor Kivumbi</span>, who combines the potency of natural herbs and the mystical power of spells to help you achieve the life you desire.
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
