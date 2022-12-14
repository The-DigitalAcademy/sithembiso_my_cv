import React from 'react'

import Html from '../assets/portfolio/Html.png';
import JavaScript from '../assets/portfolio/JavaScript.png';
import Css from '../assets/portfolio/Css.png';
import ReactImage from '../assets/portfolio/ReactImage.png';
// import  GitHub from '../assets/portfolio/GitHub.png';
import Tailwind from '../assets/portfolio/Tailwind.png';
import Git from '../assets/portfolio/Git.png';
import Trello from '../assets/portfolio/Trello.webp';
import Discord from '../assets/portfolio/Discord.jpeg';
import Slack from '../assets/portfolio/Slack.webp';
import Bootstrap from '../assets/portfolio/Bootstrap.png';
import GitHub from '../assets/portfolio/GitHub.png';



const Experience = () => {

    const techs = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImage,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: GitHub,
            title: 'GITHUB',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: Git,
            title: 'GIT',
            style: 'shadow-orange-800'
        },
        {
            id: 8,
            src: Trello,
            title: 'TRELLO',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: Discord,
            title: 'DISCORD',
            style: 'shadow-purple-300'
        },
        {
            id: 10,
            src: Slack,
            title: 'SLACK',
            style: 'shadow-purple-700'
        },
        {
            id: 11,
            src: Bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-400'
        },
        
    ]


    return (
        <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience;