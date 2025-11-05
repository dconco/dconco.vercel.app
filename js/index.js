// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const target = document.querySelector(this.getAttribute('href'))
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	})
})

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav')
	if (window.scrollY > 50) {
		nav.style.background = 'rgba(255, 255, 255, 0.95)'
		nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)'
	} else {
		nav.style.background = 'rgba(255, 255, 255, 0.8)'
		nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.03)'
	}
})

// Enhanced scroll animations
const observerOptions = {
	threshold: 0.15,
	rootMargin: '0px 0px -80px 0px',
}

const observer = new IntersectionObserver(entries => {
	entries.forEach((entry, index) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.classList.add('animate-in')
				entry.target.classList.add('revealed')
			}, index * 100)
		}
	})
}, observerOptions)

// Observe multiple elements with staggered animation
document.querySelectorAll('.project-card, .skill-category, .ai-bot-card, .resume-preview').forEach((el, index) => {
	el.classList.add('scroll-reveal')
	observer.observe(el)
})

// Add parallax effect to hero background elements
window.addEventListener('scroll', () => {
	const scrolled = window.pageYOffset
	const heroElements = document.querySelectorAll('.hero::before, .hero::after')
	heroElements.forEach(el => {
		if (el) {
			const speed = 0.5
			el.style.transform = `translateY(${scrolled * speed}px)`
		}
	})
})

// Add subtle mouse move effect on cards
document.querySelectorAll('.project-card, .skill-category, .ai-bot-card, .resume-preview').forEach(card => {
	card.addEventListener('mousemove', (e) => {
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		
		const centerX = rect.width / 2
		const centerY = rect.height / 2
		
		const rotateX = (y - centerY) / 20
		const rotateY = (centerX - x) / 20
		
		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
	})
	
	card.addEventListener('mouseleave', () => {
		card.style.transform = ''
	})
})
