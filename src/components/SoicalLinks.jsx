import React from 'react';
import { FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TiMessages } from 'react-icons/ti';


const SoicalLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    WhatsApp <FaWhatsapp size={30} />
                </>
            ),
            href: "https://web.whatsapp.com/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/",
            style: "rounded-tr-md"
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "https://www.google.com/account/about/",
        },
        {
            id: 4,
            child: (
                <>
                    Facebook <FaFacebook size={30} />
                </>
            ),
            href: "https://en-gb.facebook.com/",
            style: "rounded-tr-md",

        },
        {
            id: 5,
            child: (
                <>
                    Messages <TiMessages size={30} />
                </>
            ),
            href: "https://messages.google.com/web/authentication",
            style: "rounded-tr-md",
        
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style} >

                        < a href={href} className='flex justify-between items-center w-full text-white'
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}</a>
                    </li>
                ))
                }



            </ul >
        </div >
    )
}

export default SoicalLinks;