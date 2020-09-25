import React, { useEffect, useState } from 'react';

import './Body.Styles.css';

const Body = ({ body, company, name }) => {
    const paragraphs = body.split('#')
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    useEffect(() => {
        try {
            const imageOne = require('../../Assets/' + company + name + '1.png')
            setImage1(imageOne)
        }
        catch (err) { }
        try {
            const imageTwo = require('../../Assets/' + company + name + '2.png')
            setImage2(imageTwo)
        }
        catch (err) { }
    }, [])

    if (company && name) {
        const set1 = paragraphs.slice(0, 1)
        const set2 = paragraphs.slice(1, 3)
        const set3 = paragraphs.slice(3, paragraphs.length)
        return (
            <div className='body'>
                {set1.map((para, ind) => <p key={ind}>{para}</p>)}
                {image1 ?
                    <div className='img-container'>
                        <div className='img'>
                            <img src={image1} alt='ComprehensionImage' />
                        </div>
                    </div> :
                    null
                }
                {set2.map((para, ind) => <p key={ind}>{para}</p>)}
                <div className='img-container'>
                    {image2 ?
                        <div className='img'>
                            <img src={image2} alt='ComprehensionImage' />
                        </div> :
                        null
                    }
                </div>
                {set3.map((para, ind) => <p key={ind}>{para}</p>)}
            </div>
        )
    } else {
        return (
            <div className='body'>
                {paragraphs.map((para, ind) => <p key={ind}>{para}</p>)}
            </div>
        )
    }
}

export default Body;