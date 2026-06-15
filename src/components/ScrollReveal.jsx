import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, animation = 'fadeInUp', duration = '0.8s', delay = '0s' }) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: '0px 0px -60px 0px' // Offset to trigger before scrolling too far in
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={isIntersecting ? `animated ${animation}` : 'opacity-0'}
      style={{
        animationDuration: duration,
        animationDelay: delay,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}
