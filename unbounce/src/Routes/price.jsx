import { Text,Switch, Stack,  List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from '@chakra-ui/react'
import React from 'react'
import "./price.css"
import price from "../Image/price.png"
const Price = () => {
  return (
    <div id='price'>
      <div id="first">
        <Text fontSize="6xl">Grow your business with Unbounce <br /> —free for 14 days</Text>
      </div>
      <div id="second">
        <img src="https://unbounce.com/photos/20off-badge-circle.webp" alt="" />

        <Stack direction='row'>
            <Text>Monthly</Text>
            <Switch colorScheme='white' size='lg' />
            <Text>Yearly</Text>
        </Stack>
      </div>

      <div id="third">

        <div id="launch">
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_launch2X_.png.webp" alt="" />
            <Text fontSize='3xl'>Launch</Text>
           <div id="launch_price">
           <Text fontSize='5xl' as='b'  >$90</Text>
            <Text fontSize='xs'><div id='bold_P'> <strong>$70</strong></div>Get 20% off for 3 months</Text>
           </div>
           <div id="launch_list">
           <List spacing={3}>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Unlimited landing pages, popups, and sticky bars
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong> 500</strong> conversions
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong>20,000</strong> visitors
                </ListItem>
                
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                   <strong>1</strong> domain
                </ListItem>
            </List>

            <button>Start Building for Free</button>
           </div>
        </div>
        <div id="optimize">
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_optimize3x-12X_.png.webp" alt="" />
            <Text fontSize='3xl'>Optimize</Text>
           <div id="launch_price">
           <Text fontSize='5xl' as='b'  >$135</Text>
            <Text fontSize='xs'><div id='bold_P'> <strong>$108</strong></div>Get 20% off for 3 months</Text>
           </div>
           <div id="launch_list">
           <List spacing={3}>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Unlimited landing pages, popups, and sticky bars
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong> 1000</strong> conversions
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong>30,000</strong> visitors
                </ListItem>
                
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                   <strong>5</strong> domain
                </ListItem>
            </List>

            <button>Start Building for Free</button>
           </div>
        </div>
        
        <div id="accelerate">
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_accelerate3x-12X_.png.webp" alt="" />
            <Text fontSize='3xl'>Accelerate</Text>
           <div id="launch_price">
           <Text fontSize='5xl' as='b'  >$225</Text>
            <Text fontSize='xs'><div id='bold_P'> <strong>$170</strong></div>Get 20% off for 3 months</Text>
           </div>
           <div id="launch_list">
           <List spacing={3}>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Unlimited landing pages, popups, and sticky bars
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong> 2500</strong> conversions
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong>50,000</strong> visitors
                </ListItem>
                
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                   <strong>10</strong> domain
                </ListItem>
            </List>
            <button>Start Building for Free</button>
           </div>
        </div>

        <div id="conc">
            <img src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_concierge3x-12X_.png.webp" alt="" />
            <Text fontSize='3xl'>Concierge</Text>
           <div id="launch_price">
           <Text fontSize='5xl' as='b'  >$575</Text>
            <Text fontSize='xs'> <div id='bold_P'> <strong>$70</strong></div> Get 20% off for 3 months</Text>
           </div>
           <div id="launch_list">
           <List spacing={3}>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Unlimited landing pages, popups, and sticky bars
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong> 500</strong> conversions
                </ListItem>
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                    Up to <strong>100,000</strong> visitors
                </ListItem>
                
                <ListItem fontSize='s'>
                    <ListIcon  color='green.500' />
                   <strong>25</strong> domain
                </ListItem>
            </List>
            <button>Start Building for Free</button>
           </div>
        </div>
      </div>
      <div id="price_bottom">
        <Text>Please click here for the T&Cs of this limited time offer.</Text>
        <button>Compare Plan Feature</button>
      </div>
      <img src={price}/>
    </div>
  )
}

export default Price
