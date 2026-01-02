/**
 * Document Ready Handler
 * Initializes the application when DOM is fully loaded
 */
$(document).ready(function() {
    console.log("App Initialized");
    
    // Initial State is set in HTML (landing page active)
});

/**
 * Function to handle page switching
 * @param {string} pageName - The name of the page to show
 */
function showPage(pageName) {
    // Hide all pages
    $('.page-section').removeClass('active').addClass('hidden').hide();
    
    // Show target page based on pageName
    let targetPage = '';
    
    if (pageName === 'landing') {
        targetPage = '#landing-page';
    } else if (pageName === 'lysonir') {
        targetPage = '#lysonir-page';
    } else if (pageName === 'libaton-1') {
        targetPage = '#libaton-page-1';
    } else if (pageName === 'libaton-2') {
        targetPage = '#libaton-page-2';
    } else if (pageName === 'libaton-3') {
        targetPage = '#libaton-page-3';
    } else if (pageName === 'libaton-4') {
        targetPage = '#libaton-page-4';
    } else if (pageName === 'libaton-5') {
        targetPage = '#libaton-page-5';
    }
    
    // Note: libaton-1 is the main/intro page (no nav link)
    // libaton-2 = ABOUT (nav link 0)
    // libaton-3 = COMPOSITION (nav link 1)
    // libaton-4 = WHY (nav link 2)
    // libaton-5 = INDICATION (nav link 3)
    
    // Show target page
    if (targetPage) {
        const $targetPage = $(targetPage);
        $targetPage.removeClass('hidden').addClass('active').show();
        
        // Update active nav-link
        if ($targetPage.hasClass('libaton-page')) {
            updateActiveNavLink();
        }
    }
}


/**
 * Update active nav-link based on the currently displayed page
 */
function updateActiveNavLink() {
    const activePage = $('.libaton-page.active');
    if (activePage.length === 0) return;
    
    const pageId = activePage.attr('id');
    if (!pageId) return;
    
    // Extract page number from id (e.g., "libaton-page-1" -> 1)
    const pageNumber = parseInt(pageId.replace('libaton-page-', ''));
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 5) return;
    
    // Map page number to nav link index
    // Page 1 = Main/Intro (no nav link)
    // Page 2 = ABOUT (nav link index 0)
    // Page 3 = COMPOSITION (nav link index 1)
    // Page 4 = WHY (nav link index 2)
    // Page 5 = INDICATION (nav link index 3)
    const navIndex = pageNumber - 2;
    
    // Remove active class from all nav links on all pages
    $('.libaton-nav .nav-link').removeClass('active').removeAttr('aria-current');
    
    // Add active class to the corresponding nav link on all pages (only for pages 2-5)
    if (navIndex >= 0 && navIndex < 4) {
        // Find all nav links and update the one at the correct index
        $('.libaton-nav').each(function() {
            const $nav = $(this);
            const $navLinks = $nav.find('.nav-link');
            if ($navLinks.length > navIndex) {
                $navLinks.eq(navIndex).addClass('active').attr('aria-current', 'page');
            }
        });
    }
}

/**
 * Navigate between LIBATON pages using arrow buttons
 * @param {number} direction - 1 for next, -1 for previous
 */
function navigateLibaton(direction) {
    const currentPage = $('.libaton-page.active').attr('id');
    if (!currentPage) return;
    
    const pageNumber = parseInt(currentPage.replace('libaton-page-', ''));
    let newPageNumber = pageNumber + direction;
    
    // Wrap around: if on page 5 and click next, go to page 1
    // If on page 1 and click previous, go to page 5
    if (newPageNumber > 5) {
        newPageNumber = 1;
    } else if (newPageNumber < 1) {
        newPageNumber = 5;
    }
    
    showPage('libaton-' + newPageNumber);
}

/**
 * Add hover animations to navigation links
 */
$(document).on('mouseenter', '.libaton-nav .nav-link', function() {
    if (!$(this).hasClass('active')) {
        $(this).addClass('animate__animated animate__pulse');
    }
});

$(document).on('mouseleave', '.libaton-nav .nav-link', function() {
    $(this).removeClass('animate__animated animate__pulse');
});
