import style from "../Components/nav.module.css"
import React from 'react'
import {  Link, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <div className={style.pfooter}> 
      <div className={style.footer}>
          <div className={style.fchild1}>
            <Text fontSize="22px">Product</Text>
            <p>Smart builder</p>
            <p>Preview smart builder</p>
            <p>Smart Traffic</p>
            <p>Smart Copy</p>
            <p>Unbounce Apps</p>
            <p>Landing pages</p>
            <p>Pop ups And sticky bars</p>
            <p>Smart copy templates</p>
            <p>Integrations</p>
          </div>
          <div>
            <Text fontSize="22px">Solution</Text>
            <p>Ecommerce</p>
            <p>Saas</p>
            <p>Agency</p>
            <p>Email marketing</p>
            <p>Professional business</p>
            <p>PPC</p>
            <p>Social Ads</p>
            <p>Lead generation</p>
          </div>
          <div>
          <Text fontSize="22px">Company</Text>
          <p>About Unbounce</p>
          <p>Careers</p>
          <p>Partner Program</p>
          <p>Integrate with Us</p>
          </div>
          <div>
            <Text fontSize="22px">Learn</Text>
            <p>Blog</p>
            <p>Resource center</p>
            <p>Landing page examples</p>
            <p>Landing page basics</p>
            <p>Landing page analyzes</p>
            <p>How to build a landing page</p>
            
          </div>
          <div>
            <Text fontSize="22px">Get in touch</Text>
              <div className={style.subpart}>
            <div>
                <p>Contact</p>
                <p>Demo</p>
                <p>Login</p>
                <p>Help center</p>
                <p>Community</p>
            </div>
          </div>
          
          </div>
        
      </div>

      <hr />
      <div className={style.footerLogo}>
          <div className={style.gplay}>
            <img src="https://web-static.unbounce.com/tp/static/assets/img/footer/apple_en.svg" alt="" />
            <img src="https://web-static.unbounce.com/tp/static/assets/img/footer/google_play_en.svg" alt="" />
          </div>

          <div className={style}>
            <p>Privacy Policy. Terms of Service. Cookie Preferences</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
