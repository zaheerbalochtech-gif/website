// --- INTERACTION LOGIC ---

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const isOpen = !menu.classList.contains('translate-x-full');

    if (isOpen) {
        menu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
}

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    // Also support selector if ID not found (for some templates)
    const navEl = navbar || document.querySelector('nav');

    // Check for specific text elements to change color if needed
    const navTitle = document.getElementById('nav-title');
    const navSubtitle = document.getElementById('nav-subtitle');
    const navLinks = document.getElementById('nav-links');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (!navEl) return;

    if (window.scrollY > 50) {
        navEl.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'py-2', 'top-0');
        navEl.classList.remove('py-3', 'py-6', 'top-8');

        // Update text colors for specific designs
        if (navTitle) {
            navTitle.parentElement.classList.remove('text-white');
            navTitle.parentElement.classList.add('text-brand-teal');
            if (navSubtitle) {
                navSubtitle.classList.remove('text-white');
                navSubtitle.classList.add('text-gray-500');
            }
        }
        if (navLinks) {
            navLinks.classList.remove('text-white');
            navLinks.classList.add('text-gray-800');
        }
        if (mobileBtn) {
            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-gray-800');
        }
    } else {
        navEl.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'py-2', 'top-0');
        // Restore original padding (checking against specific design classes used in html)
        if (document.querySelector('body').classList.contains('selection:bg-brand-gold')) {
            navEl.classList.add('py-6', 'top-0'); // For the v2 design (Fixed: Added top-0 back)
        } else {
            navEl.classList.add('py-3', 'top-8'); // For v1 design
        }

        if (navTitle) {
            navTitle.parentElement.classList.add('text-white');
            navTitle.parentElement.classList.remove('text-brand-teal');
            if (navSubtitle) {
                navSubtitle.classList.add('text-white');
                navSubtitle.classList.remove('text-gray-500');
            }
        }
        if (navLinks) {
            navLinks.classList.add('text-white');
            navLinks.classList.remove('text-gray-800');
        }
        if (mobileBtn) {
            mobileBtn.classList.add('text-white');
            mobileBtn.classList.remove('text-gray-800');
        }
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});





// --- INTERACTION LOGIC ---

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const isOpen = !menu.classList.contains('translate-x-full');

    if (isOpen) {
        menu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
}

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    // Also support selector if ID not found (for some templates)
    const navEl = navbar || document.querySelector('nav');

    // Check for specific text elements to change color if needed
    const navTitle = document.getElementById('nav-title');
    const navSubtitle = document.getElementById('nav-subtitle');
    const navLinks = document.getElementById('nav-links');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (!navEl) return;

    if (window.scrollY > 50) {
        navEl.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'py-2', 'top-0');
        navEl.classList.remove('py-3', 'py-6', 'top-8');

        // Update text colors for specific designs
        if (navTitle) {
            navTitle.parentElement.classList.remove('text-white');
            navTitle.parentElement.classList.add('text-brand-teal');
            if (navSubtitle) {
                navSubtitle.classList.remove('text-white');
                navSubtitle.classList.add('text-gray-500');
            }
        }
        if (navLinks) {
            navLinks.classList.remove('text-white');
            navLinks.classList.add('text-gray-800');
        }
        if (mobileBtn) {
            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-gray-800');
        }
    } else {
        navEl.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'py-2', 'top-0');
        // Restore original padding (checking against specific design classes used in html)
        if (document.querySelector('body').classList.contains('selection:bg-brand-gold')) {
            navEl.classList.add('py-6', 'top-0'); // For the v2 design (Fixed: Added top-0 back)
        } else {
            navEl.classList.add('py-3', 'top-8'); // For v1 design
        }

        if (navTitle) {
            navTitle.parentElement.classList.add('text-white');
            navTitle.parentElement.classList.remove('text-brand-teal');
            if (navSubtitle) {
                navSubtitle.classList.add('text-white');
                navSubtitle.classList.remove('text-gray-500');
            }
        }
        if (navLinks) {
            navLinks.classList.add('text-white');
            navLinks.classList.remove('text-gray-800');
        }
        if (mobileBtn) {
            mobileBtn.classList.add('text-white');
            mobileBtn.classList.remove('text-gray-800');
        }
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});