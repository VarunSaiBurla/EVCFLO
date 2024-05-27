
import logo from '@/assets/logo.svg'
import {
        NavigationMenu,
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        navigationMenuTriggerStyle,
        NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
} from "@/components/ui/accordion"

import LoginDialog from '@/components/login-dialog'
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';








const Header = () => {

        const [isOpen, setOpen] = useState(false);

        return (
                <section className='block'>
                        <div className="container sm:h-auto md:h-16 px-8 py-4 flex flex-wrap flex-row justify-between items-center">
                                <NavLink to='/'>
                                        <img src={logo} alt="ChameleonEVCFLO logo" className="h-6"/>
                                </NavLink>
                                <div className='sm:block md:hidden'>
                                        <Hamburger  toggled={isOpen} toggle={setOpen} size={24} />
                                </div>

                                <div className="hidden md:flex">

                                        <NavigationMenu>
                                                <NavigationMenuList>
                                                        <NavigationMenuItem>
                                                                <NavLink to='/'>
                                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Find chargers</NavigationMenuLink>
                                                                </NavLink>
                                                                
                                                        </NavigationMenuItem>

                                                        <NavigationMenuItem>
                                                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                                                <NavigationMenuContent>
                                                                <ul className="grid gap-3 p-6 md:w-[330px]">
                                                                <li>    
                                                                        <NavLink to="/company">
                                                                        <NavigationMenuLink asChild>
                                                                        <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">Company</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                        Learn more about our company's mission and vision.
                                                                                </p>
                                                                                
                                                                        </a>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                <li>
                                                                        <NavLink to="/insights">
                                                                        <NavigationMenuLink asChild>
                                                                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">Insights</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                        Read the latest industry news, insights, and trends.
                                                                                </p>
                                                                                
                                                                        </div>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                <li>
                                                                        <NavLink to="/support">
                                                                        <NavigationMenuLink asChild>
                                                                        <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">Support</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                Got questions? Contact us or read FAQs here.
                                                                                </p>
                                                                                
                                                                        </a>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                </ul>
                                                                </NavigationMenuContent>
                                                        </NavigationMenuItem>

                                                        <NavigationMenuItem>
                                                                <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                                                                <NavigationMenuContent>
                                                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                                <li className="row-span-3">
                                                                        
                                                                        <div
                                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                        href="/"
                                                                        >
                                                                        <span className="h-6 w-6" />
                                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                                        EVCFLO
                                                                        </div>
                                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                                        Our platform helps EV businesses connect and learn more about EV drivers. We are proudly open source.
                                                                        </p>
                                                                        </div>
                                                                        
                                                                </li>
                                                                <li>
                                                                        <NavLink to="/business-dashboard">
                                                                        <NavigationMenuLink asChild>
                                                                        <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">Business Dashboard</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                        Manage your charging station with our Business Dashboard.
                                                                                </p>
                                                                                
                                                                        </a>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                <li>
                                                                        <NavLink to="/research">
                                                                        <NavigationMenuLink asChild>
                                                                        <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">Industry Research</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                        Learn the latest findings from our data science team.
                                                                                </p>
                                                                                
                                                                        </a>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                <li>
                                                                        <NavLink to="/evcflo-api">
                                                                        <NavigationMenuLink asChild>
                                                                        <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                                <div className="text-sm font-medium leading-none">EVCFLO API</div>
                                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                Access our data via API for your project.
                                                                                </p>
                                                                                
                                                                        </a>
                                                                        </NavigationMenuLink>
                                                                        </NavLink>
                                                                </li>
                                                                </ul>
                                                                </NavigationMenuContent>
                                                        </NavigationMenuItem>

                                                        <NavigationMenuItem>
                                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                                        <LoginDialog />
                                                                </NavigationMenuLink>
                                                        </NavigationMenuItem>  
                                                        
                                                </NavigationMenuList>
                                        </NavigationMenu>
                                </div>


                                {/* Mobile Nav */}
                                <div className={(isOpen ? "flex flex-row justify-center py-12 basis-full transition-transform duration-200" : "hidden") + " md:hidden"}>
                                        <nav className='w-5/6'>
                                        <Accordion type="single" collapsible className="w-full">
                                                <a href="/" className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline border-b'>Find Chargers</a>
                                                <AccordionItem value="about">
                                                        <AccordionTrigger>About</AccordionTrigger>
                                                        <AccordionContent>

                                                        <a href="/company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Company</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                        Learn more about our company's mission and vision.
                                                                </p>
                                                                
                                                        </a>
                                                        <a href="/insights" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Insights</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                        Read the latest industry news, insights, and trends.
                                                                </p>
                                                                
                                                        </a>
                                                        <a href="/support" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Support</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Got questions? Contact us or read FAQs here.
                                                                </p>
                                                                
                                                        </a>
                                                        </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="business">
                                                        <AccordionTrigger>Business</AccordionTrigger>
                                                        <AccordionContent>
                                                        <a href="/business-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Business Dashboard</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Manage your charging station with our Business Dashboard.
                                                                </p>
                                                                
                                                        </a>
                                                        <a href="/research" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Industry Research</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Learn the latest findings from our data science team.
                                                                </p>
                                                                
                                                        </a>
                                                        <a href="/evcflo-api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">EVCFLO API</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Access our data via API for your project.
                                                                </p>
                                                                
                                                        </a>
                                                        </AccordionContent>
                                                </AccordionItem>

                                                <div className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline hover:cursor-pointer'><LoginDialog /></div>

                                        </Accordion>

                                        </nav>

                                </div>


                        </div>
                        

                </section>
                
        )
}


export default Header;