import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ToggleTheme from './ToggleTheme';
import MyPopover from './MyPopover';
import { FaChevronDown } from "react-icons/fa";
import MyButton from './MyButton';
function Header() {
    const navItems = [
        {
            label: 'WHAT WE DO', items: [],

            body:
                <>
                    <div >
                        <h1 className='mb-3' style={{ fontWeight: 'bolder' }}>Capabilities</h1>
                        <div className=' w-full list-none flex justify-between items-center flex-wrap gap-3'>
                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Digital Transformation</h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Business Applications</h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>E-commerce
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Emerging Technologies
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Gaming
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        },
        {
            label: 'WHO WE HELP', items: [],

            body:
                <>
                    <div >
                        <h1 className='mb-3' style={{ fontWeight: 'bolder' }}>Industries</h1>
                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>

                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Travel & Hospitality</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Telecommunication </li>
                                    <li className='hover:underline cursor-pointer pb-1'>Oil, Gas, and Energy</li>
                                    <li className='hover:underline cursor-pointer pb-1'>E-commerce</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Healthcare & Pharmaceuticals</li>
                                </div>
                            </div>

                            <div>

                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Public Sector</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Retail & CPG</li>
                                    <li className='hover:underline cursor-pointer pb-1'>StartUps</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Banking & Fintech</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Gaming</li>
                                </div>
                            </div>



                        </div>
                    </div>
                </>
        },
        {
            label: 'WHO WE ARE', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>About</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Leadership</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Geographies</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Code of Conduct & Values</li>

                            </div>


                        </div>
                    </div>
                </>
        },
        {
            label: 'HOW WE DELIVER', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Blogs</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Case Studies</li>

                            </div>


                        </div>
                    </div>
                </>
        },
        {
            label: 'JOIN DEVSINC', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Careers</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Culture</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Diversity, Equity and Inclusion</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Employee Success</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Benefits</li>

                            </div>


                        </div>
                    </div>
                </>
        }
    ]
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto flex items-center">

                            <Nav.Link href="#home">  <ToggleTheme /></Nav.Link>
                            {
                                navItems.map((x, i) => (
                                    <div key={i} className='flex items-center'>
                                        <MyPopover elem={x} /><FaChevronDown/>
                                    </div>
                                    // <Nav.Link key={i} href="">{x.label}</Nav.Link>
                                ))
                            }

                            <MyButton/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;