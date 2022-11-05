import { Flex, Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import gsap from 'gsap'

import { TextPlugin } from 'gsap/dist/TextPlugin'
gsap.registerPlugin(TextPlugin)

const Experimental = () => {

    /**
     * HANDLE ANIMATIONS
     */
    useEffect(() => {
        animateText(1)
    })

    return (
        <Box textAlign='center'>
            <span id='quote'></span>
        </Box>
    )
}

const animateText = (phrase) => {
    let text = ''
    phrase = phrase > 4 ? 1 : phrase
    switch(phrase) {
        case 1:
            text = 'design.'
            break
        case 2:
            text = 'collaborate.'
            break
        case 3:
            text = 'innovate.'
            break
        case 4:
            text = 'develop.'
            break
    }   

    const tl = gsap.timeline({
        repeat: 1,
        repeatDelay: 2,
        yoyo: true, 
        onComplete: () => {
            animateText(phrase + 1)
        }
    })

    tl.to('#quote', {
        text: {
            value: text
        },
        duration: 1,
        ease: 'none',
    })
}

export default Experimental