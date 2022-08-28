import React from 'react'
import img1 from "../Image/img1.png"
import {
  Button
} from '@chakra-ui/react'
import Car from '../Components/Carousel';
import styles from "../Routes/Home.module.css"
const Home = () => {
  return (
    <div className={styles.maindiv}>
      <div  className={styles.img}><img src={img1}/></div>
      <div className={styles.build}>
        <h1>Build landing pages faster with AI</h1>
        <p>Unbounce landing pages have helped businesses turn
           billions of visitors into leads, sales, and signups.
            (Literally.) Combining that data with AI, Unbounce 
            lets you create custom landing pages twice as fast 
            as old-school builders.
           Oh. And get way better results, too.
        </p>
      </div>
      <div className={styles.info}>
          <div>
              <h1>Create your pages</h1>
              <p>Make landing pages, popups, and sticky bars on your own. Unbounce has easy-to-use builders for any skill level—plus personalized recommendations to help you optimize every step of the way</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginLeft="1%" marginTop="14%" bg="white" color="black" mr="39px" fontSize="20px">Create Your Pages</Button>
              </div>
          </div>
          <div>
              <h1>… And write your copy</h1>
              <p>Writer’s block is so… Uh, what’s the word? With AI copywriting tools, you can instantly generate, remix, and expand content for anything—like landing pages, ads, emails—in seconds.</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginLeft="1%" marginTop="14%" bg="white" color="black" mr="39px" fontSize="20px">Write your copy</Button>
              </div>
          </div>
          <div>
              <h1>… And optimize your traffic</h1>
              <p>Improve your results with the click of a button. Unbounce routes your visitors to the best landing page for people like them and—on average—gets you 30% more sales and signups.</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginLeft="1%" marginTop="14%" bg="white" color="black" mr="39px" fontSize="20px">Optimize your traffic</Button>
              </div>
          </div>
         
      </div>
      <Car/>
      <div className={styles.imginfo}>
          <div>
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Group-29612-1.png.webp"/>
              <h1>For search ads</h1>
              <p>Google isn’t a wishing well. By pairing each ad with a dedicated landing page, you can increase your quality score, reduce your cost per click, and turn your search dollars into real results.</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginBottom="7%" marginLeft="7%" marginTop="8%" bg="white" color="black" mr="39px" fontSize="20px">For search ads</Button>
              </div>
          </div>
          <div>
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Group-29613.png.webp"/>
              <h1>For social media</h1>
              <p>You don’t need to slide into their DMs. Send your Facebook, Instagram, and LinkedIn visitors to targeted, mobile-optimized landing pages that persuade them to make the first move.</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginBottom="7%" marginLeft="7%" marginTop="8%" bg="white" color="black" mr="39px" fontSize="20px">For social media</Button>
              </div>
          </div>
          <div>
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Mask-group-5.png.webp"/>
              <h1>For email marketing</h1>
              <p>Unsubscribe from unsubscribes. Match every email campaign with a relevant landing page to give your visitors the clearest path from inbox to action. (And so you don’t end up in “Spam.”)</p>
              <div className={styles.comp2}>
                <Button  _hover={{color:"blue", border:"3px solid blue"}} marginBottom="7%" marginLeft="7%" marginTop="8%" bg="white" color="black" mr="39px" fontSize="20px">For email marketing</Button>
              </div>
          </div>
      </div>
      <div className={styles.background}>
            <div><img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Claire-Seymour.png.webp"/></div>
            <div>
              <h1>"I’m a one-person marketing team, so I can’t dive super deep into everything. Unbounce lets me quickly build campaigns on my own and provides all the insights I need to make informed decisions."</h1>
              <h3>Claire Seymour, Director of Marketing</h3>
              <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Raise_Craze.png.webp"/>
            </div>
      </div>

    </div>

  )
}

export default Home
