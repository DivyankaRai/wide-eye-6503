import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import style from "../Components/nav.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className={style.nav}>
        <div className={style.comp}>
            <div className={style.logo}>
                <Link to="/">
                <img src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"/>
                </Link>
            </div>
            <div className={style.box}>
                <Menu >
                    <MenuButton  borderRadius="none"  _hover={{ color: 'blue', borderBottom:'3px solid blue',}} bg="none" mr="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        Product
                    </MenuButton>
                    <MenuList  color="black" display="flex">
                        <Box>
                        <MenuItem>Smart Builder</MenuItem>
                        <MenuItem>Smart Copy</MenuItem>
                        <MenuItem>Smart Traffic</MenuItem>
                        <MenuItem>Conversion Intelligence Features</MenuItem>
                        <MenuItem>Unbounce Apps</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Menu >
                    <MenuButton  borderRadius="none"  _hover={{ color: 'blue', borderBottom:'3px solid blue',}} bg="none" mr="35px" as={Button}  rightIcon={<ChevronDownIcon />}>
                        Solution
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem color="grey">By Industry</MenuItem>
                        <MenuItem>E-commerce</MenuItem>
                        <MenuItem>SaaS</MenuItem>
                        <MenuItem>Agencies</MenuItem>
                        <MenuItem>Small Bussiness</MenuItem>
                        <MenuItem>Professional Services</MenuItem>
                        </Box>
                        <Box>
                        <MenuItem color="grey">By USE CASE</MenuItem>
                        <MenuItem>PPC</MenuItem>
                        <MenuItem>Social Ads</MenuItem>
                        <MenuItem>Email Marketing</MenuItem>
                        <MenuItem>Lead Generation</MenuItem>
                        <MenuItem>Sell Online</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Menu >
                    <Link to="/price">
                    <MenuButton borderRadius="none"  _hover={{ color: 'blue', borderBottom:'3px solid blue',}} bg="none" mr="35px" as={Button}>
                        Pricing
                    </MenuButton>
                    </Link>
                </Menu>
                <Menu >
                    <MenuButton borderRadius="none" _hover={{ color: 'blue', borderBottom:'3px solid blue',}} bg="none" mr="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        Learn
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem color="grey">Conversion Intelligence Resources</MenuItem>
                        <MenuItem>What is Conversion Intelligence</MenuItem>
                        <MenuItem>The Ultimate Optimization Guide</MenuItem>
                        <MenuItem>Why AI in Marketing Matters</MenuItem>
                        <MenuItem>Conversion Benchmark Report</MenuItem>
                        <MenuItem>Conversion Insights</MenuItem>
                        </Box> 
                        <Box>
                        <MenuItem color="grey">Making Fundamentals</MenuItem>
                        <MenuItem>What is a Landing Page?</MenuItem>
                        <MenuItem>Landing Page Examples</MenuItem>
                        <MenuItem>Customers & Case Studies</MenuItem>
                        <MenuItem>Blogs</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Menu >
                    <MenuButton borderRadius="none"  _hover={{ color: 'blue', borderBottom:'3px solid blue',}} bg="none" mr="35px" as={Button}>
                        Contacts
                    </MenuButton>
                </Menu>
            </div>
        </div>
        <div className={style.comp2}>
                <Button  _hover={{ color: 'white',bg: "blue"}} border="2px solid blue" bg="white" color="blue" mr="35px">Sign in</Button>
                <Button _hover={{ bg: 'white', color: "blue"}} bg="blue" color="white" mr="35px">Start For Free</Button>
        </div>
    </div>
  )
}

export default Navbar