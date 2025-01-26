import React from 'react'
import { homepage } from '../../../assets'

const HivesApp = () => {
    return (
        <section className='min-w-full h-screen mt-3'>
            <div className='w-full flex items-center justify-center relative'>
                <header className=' w-full p-20 bg-gold-400 text-black font-6xl'>
                    This is our mobile app
                </header>
                    <img
                        src={homepage}
                        width={750}
                        className='absolute'
                        />
            </div>
        </section>
    )
}

export default HivesApp