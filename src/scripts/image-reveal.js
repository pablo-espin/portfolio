const imageConfigs = {
    1: {
        backgroundImage: '/images/khthon-bg.webp',
        colors: ['#d88f6b', '#c9be9c', '#d3b153', '#6e5744', '#ccccc5'],
        pieces: [
            { width: 50.5, height: 60, top: 0, left: 0, direction: 'slide-left' },
            { width: 25, height: 60, top: 0, left: 50, direction: 'slide-up' },
            { width: 26, height: 60, top: 0, left: 74, direction: 'slide-right' },
            { width: 60, height: 40, top: 60, left: 0, direction: 'slide-left' },
            { width: 40, height: 40, top: 60, left: 60, direction: 'slide-down' }
        ]
    },
    2: {
        backgroundImage: '/images/carambolo-bg.webp',
        colors: ['#41749c', '#598285', '#73a083', '#295066', '#467189', '#32608f', '#598285', '#71a0b5'],
        pieces: [
            { width: 39.6, height: 38.9, top: 0, left: 0, direction: 'slide-left' },
            { width: 23.9, height: 38.9, top: 0, left: 39.6, direction: 'slide-up' },
            { width: 36.4, height: 38.9, top: 0, left: 63.6, direction: 'slide-right' },
            { width: 26.4, height: 46.7, top: 38.9, left: 0, direction: 'slide-left' },
            { width: 23.1, height: 46.7, top: 38.9, left: 26.4, direction: 'slide-left' },
            { width: 50.5, height: 46.7, top: 38.9, left: 49.5, direction: 'slide-right' },
            { width: 66.8, height: 14.5, top: 85.5, left: 0, direction: 'slide-down' },
            { width: 33.2, height: 14.5, top: 85.5, left: 66.8, direction: 'slide-right' }
        ]
    },
    3: {
        backgroundImage: '/images/aventura-bg.webp',
        colors: ['#8acc4d', '#7fa05c', '#78baae', '#00a588', '#f6e167'],
        pieces: [
            { width: 50, height: 23.1, top: 0, left: 0, direction: 'slide-left' },
            { width: 50, height: 23.1, top: 0, left: 50, direction: 'slide-up' },
            { width: 42.4, height: 76.9, top: 23.1, left: 0, direction: 'slide-left' },
            { width: 27.5, height: 76.9, top: 23.1, left: 42.4, direction: 'slide-down' },
            { width: 30.1, height: 76.9, top: 23.1, left: 69.9, direction: 'slide-right' }
        ]
    },
    4: {
        backgroundImage: '/images/amitw-bg.webp',
        colors: ['#fc92ff', '#d3d3d3', '#606060', '#232323'],
        pieces: [
            { width: 28, height: 52, top: 0, left: 0, direction: 'slide-left' },
            { width: 72.1, height: 52, top: 0, left: 27.9, direction: 'slide-up' },
            { width: 60.4, height: 48, top: 52, left: 0, direction: 'slide-down' },
            { width: 39.6, height: 48, top: 52, left: 60.4, direction: 'slide-right' }
        ]
    },
    5: {
        backgroundImage: '/images/wetlands-bg.webp',
        colors: ['#82a6ce', '#598285', '#32608f', '#ffffff', '#82a6ce', '#4c5566', '#afafaf'],
        pieces: [
            { width: 33.2, height: 40.2, top: 0, left: 0, direction: 'slide-left' },
            { width: 66.8, height: 40.2, top: 0, left: 33.2, direction: 'slide-up' },
            { width: 50.5, height: 19.3, top: 40.2, left: 0, direction: 'slide-left' },
            { width: 23.1, height: 19.3, top: 40.2, left: 50.5, direction: 'slide-right' },
            { width: 26.4, height: 19.3, top: 40.2, left: 73.6, direction: 'slide-right' },
            { width: 60.4, height: 41, top: 59, left: 0, direction: 'slide-left' },
            { width: 39.6, height: 41, top: 59, left: 60.4, direction: 'slide-down' }
        ]
    }
};

// Track revealed images
const revealedImages = new Set();

function createPuzzlePieces(item, imageId) {
    const config = imageConfigs[imageId];
    if (!config) return;

    // Create or find background image div
    let backgroundDiv = item.querySelector('.background-image');
    if (!backgroundDiv) {
        backgroundDiv = document.createElement('div');
        backgroundDiv.className = 'background-image';
        item.appendChild(backgroundDiv);
    }

    // Create or find mosaic overlay
    let overlay = item.querySelector('.mosaic-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mosaic-overlay';
        item.appendChild(overlay);
    }

    // Set background image
    backgroundDiv.style.backgroundImage = `url('${config.backgroundImage}')`;

    // Clear existing tiles
    overlay.innerHTML = '';

    // Create puzzle pieces
    config.pieces.forEach((piece, index) => {
        const tile = document.createElement('div');
        tile.className = `tile ${piece.direction}`;
        
        tile.style.width = piece.width + '%';
        tile.style.height = piece.height + '%';
        tile.style.top = piece.top + '%';
        tile.style.left = piece.left + '%';
        
        const pieceColor = config.colors[index] || config.colors[0];
        tile.style.background = pieceColor;
        tile.style.transitionDelay = (index * 0.08) + 's';
        
        overlay.appendChild(tile);
    });
}

function revealImage(item, imageId) {
    if (revealedImages.has(imageId)) return;
    
    item.classList.add('revealed');
    revealedImages.add(imageId);

    // Hide scroll hint when first image is revealed
    if (revealedImages.size === 1) {
        document.getElementById('scrollHint').classList.add('hidden');
    }
}

function setupHoverReveal() {
    // Only enable hover reveal on desktop
    if (window.innerWidth > 900) {
        const links = document.querySelectorAll('.portfolio-link');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const portfolioItem = this.querySelector('.portfolio-item');
                const imageId = parseInt(portfolioItem.dataset.image);
                revealImage(portfolioItem, imageId);
            });
        });
    }
}

function setupScrollReveal() {
    // Only enable scroll reveal on tablet and mobile
    if (window.innerWidth <= 900) {
        const items = document.querySelectorAll('.portfolio-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    const imageId = parseInt(entry.target.dataset.image);
                    if (!revealedImages.has(imageId)) {
                        revealImage(entry.target, imageId);
                    }
                }
            });
        }, {
            threshold: [0.3],
            rootMargin: '-10% 0px -10% 0px'
        });

        items.forEach(item => observer.observe(item));
    }
}

// Initialize everything
function init() {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        const imageId = parseInt(item.dataset.image);
        createPuzzlePieces(item, imageId);
    });

    setupScrollReveal();
    setupHoverReveal();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize - reinitialize event listeners
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recreate puzzle pieces if not revealed
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            const imageId = parseInt(item.dataset.image);
            if (!revealedImages.has(imageId)) {
                createPuzzlePieces(item, imageId);
            }
        });

        // Reinitialize event listeners based on new screen size
        setupScrollReveal();
        setupHoverReveal();
    }, 250);
});