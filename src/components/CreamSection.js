import React from 'react'
import gift from '../assets/gift.png';
import bus from '../assets/bus.png';
import '../styles/creamSection.scss';
function CreamSection() {
    return (
        <div className='section-body'>
        <h1>Good Gifts Maded</h1>
        <div className='creamsection'>
            <div className='box'>
                <img src={gift} alt='box' />
                <h2>Send As A Gift</h2>
                <p>Ship your gift with a free personalized message</p>
            </div>
            <div className='box'>
                <img src={bus} alt='box' />
                <h2>Send As A Gift</h2>
                <p>Ship your gift with a free personalized message</p>
            </div>
            <div className='box'>
                <img src={gift} alt='box' />
                <h2>Send As A Gift</h2>
                <p>Ship your gift with a free personalized message</p>
            </div>
        </div>
        </div>
    )
}

export default CreamSection
