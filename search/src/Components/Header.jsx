import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddLinkIcon from '@mui/icons-material/AddLink';
function Header() {
    return (
        <div className='bg-teal-500 p-5 text-white  fixed bottom-0 w-full mt-12' >
            <div className='flex flex-row w-full justify-center items-center space-x-8 '>
                <a href="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    < GitHubIcon className='h-6 w-6' />
                </a>
                <a href="https://www.linkedin.com/in/carullahtursun/">
                    < LinkedInIcon className='h-6 w-6' />
                </a>
                <a href="https://carullahtursun.vercel.app">
                    < AddLinkIcon className='h-6 w-6' />
                </a>
            </div>
        </div>
    )
}

export default Header