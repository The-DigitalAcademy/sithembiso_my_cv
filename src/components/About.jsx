import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>

                </div>

                <p className='text-xl mt-20'>
                    I'm a very warm and friendly person. i enjoy being able to work alone or as part of a team. i am honest and punctual. Open to new skills and challenges.
                </p>
            </div>

        </div>
    )
}

export default About;