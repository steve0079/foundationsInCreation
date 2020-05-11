/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'


/**
* @function Slider
*/
const Slider = props => {
    const { slides } = props

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        activeSlide: 0,
        translate: 1.0,
        transition: 1.0,
        _slides: [lastSlide, firstSlide, secondSlide]
    })

    const { activeSlide, translate, _slides, transition } = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const smooth = event => {
            if (event.target.className.includes('SliderContent')) {
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        const interval = setInterval(play, props.autoPlay * 3000)
        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        return () => {
            clearInterval(interval)
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)
        }
    }, [props.autoPlay])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 1.0 })
    }, [state, transition])

    const handleResize = () => {
        setState({ ...state, translate: 0, transition: 0 })
    }

    const smoothTransition = () => {
        let _slides = []

        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: 0
        })
    }

    const nextSlide = () =>
        setState({
            ...state,
            translate: translate + "1025",
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        })

    const prevSlide = () =>
        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })

    return (
        <div className="mainSlider"> 
            <SliderContent
                translate={translate}
                transition={transition}
                width={3072}
                height={600}
            >
                {_slides.map((_slide, i) => (
                    <Slide width={1024} key={_slide + i} content={_slide} />
                ))}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots slides={slides} activeIndex={activeSlide} />
        </div>
    )
}

export default Slider