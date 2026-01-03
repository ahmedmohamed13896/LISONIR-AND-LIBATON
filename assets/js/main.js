/**
 * Document Ready Handler
 * Initializes the application when DOM is fully loaded
 */
$(document).ready(function () {
  console.log("App Initialized");

  // Initial State is set in HTML (landing page active)

  /**
   * Handle LYSONIR/LIBATON button active state
   */
  $(document).on("click", ".lysonir-btn, .libaton-btn", function () {
    // Remove active class from all product buttons
    $(".lysonir-btn, .libaton-btn").removeClass("active");

    // Add active class to the clicked button
    $(this).addClass("active");
  });
});

/**
 * Function to handle page switching
 * @param {string} pageName - The name of the page to show
 */
function showPage(pageName) {
  // Hide all pages
  $(".page-section").removeClass("active").addClass("hidden").hide();

  // Show target page based on pageName
  let targetPage = "";

  if (pageName === "landing") {
    targetPage = "#landing-page";
  } else if (pageName === "lysonir" || pageName === "lysonir-1") {
    targetPage = "#lysonir-page-1";
  } else if (pageName === "lysonir-2") {
    targetPage = "#lysonir-page-2";
  } else if (pageName === "lysonir-3") {
    targetPage = "#lysonir-page-3";
  } else if (pageName === "lysonir-4") {
    targetPage = "#lysonir-page-4";
  } else if (pageName === "lysonir-5") {
    targetPage = "#lysonir-page-5";
  } else if (pageName === "libaton-1") {
    targetPage = "#libaton-page-1";
  } else if (pageName === "libaton-2") {
    targetPage = "#libaton-page-2";
  } else if (pageName === "libaton-3") {
    targetPage = "#libaton-page-3";
  } else if (pageName === "libaton-4") {
    targetPage = "#libaton-page-4";
  } else if (pageName === "libaton-5") {
    targetPage = "#libaton-page-5";
  }

  // Note: libaton-1 is the main/intro page (no nav link)
  // libaton-2 = ABOUT (nav link 0)
  // libaton-3 = COMPOSITION (nav link 1)
  // libaton-4 = WHY (nav link 2)
  // libaton-5 = INDICATION (nav link 3)
  // Similarly for LYSONIR pages

  // Show target page
  if (targetPage) {
    const $targetPage = $(targetPage);

    // Reset counters and animations for LIBATON and LYSONIR pages
    if ($targetPage.hasClass("libaton-page")) {
      const pageId = $targetPage.attr("id");

      // Clear all .show classes to restart animations
      $targetPage.find(".show").removeClass("show");

      // Reset counters based on page
      if (pageId === "libaton-page-2" || pageId === "lysonir-page-2") {
        page2ImageClickCount = 0;
        bottleImageClickCount = 0;
      } else if (pageId === "libaton-page-3" || pageId === "lysonir-page-3") {
        page3ImageClickCount = 0;
      } else if (pageId === "libaton-page-4" || pageId === "lysonir-page-4") {
        page4ImageClickCount = 0;
      } else if (pageId === "libaton-page-5" || pageId === "lysonir-page-5") {
        page5ImageClickCount = 0;
      }
    }

    $targetPage.removeClass("hidden").addClass("active").show();

    // Update active nav-link
    if ($targetPage.hasClass("libaton-page")) {
      updateActiveNavLink();
    }
    // Update pulse state for clickable images when a page becomes active
    updatePulseStates();
  }
}

/**
 * Update pulse class on clickable images depending on whether their
 * reveal sequence is completed. Pulses run while there are remaining items.
 * Works for both LIBATON and LYSONIR pages
 */
function updatePulseStates() {
  // Page 2: main-image pulses until page2ImageClickCount >= 2
  const $p2Lib = $("#libaton-page-2");
  const $p2Lys = $("#lysonir-page-2");

  if ($p2Lib.hasClass("active")) {
    const $img2 = $p2Lib.find(".main-image-page-2");
    if (page2ImageClickCount < 2) {
      $img2.addClass("pulse");
    } else {
      $img2.removeClass("pulse");
    }
    const $bottle = $p2Lib.find(".bottle-image");
    if (
      $bottle.length &&
      bottleImageClickCount < 2 &&
      page2ImageClickCount >= 1
    ) {
      $bottle.addClass("pulse");
    } else {
      $bottle.removeClass("pulse");
    }
  }

  if ($p2Lys.hasClass("active")) {
    const $img2 = $p2Lys.find(".main-image-page-2");
    if (page2ImageClickCount < 2) {
      $img2.addClass("pulse");
    } else {
      $img2.removeClass("pulse");
    }
    const $bottle = $p2Lys.find(".bottle-image");
    if (
      $bottle.length &&
      bottleImageClickCount < 2 &&
      page2ImageClickCount >= 1
    ) {
      $bottle.addClass("pulse");
    } else {
      $bottle.removeClass("pulse");
    }
  }

  // Page 3: main-image pulses until all composition boxes are shown
  const $p3Lib = $("#libaton-page-3");
  const $p3Lys = $("#lysonir-page-3");

  if ($p3Lib.hasClass("active")) {
    const $img3 = $p3Lib.find(".main-image-page-3");
    const totalBoxes = $p3Lib.find(".composition-box-page-3").length;
    if (page3ImageClickCount < totalBoxes) {
      $img3.addClass("pulse");
    } else {
      $img3.removeClass("pulse");
    }
  }

  if ($p3Lys.hasClass("active")) {
    const $img3 = $p3Lys.find(".main-image-page-3");
    const totalBoxes = $p3Lys.find(".composition-box-page-3").length;
    if (page3ImageClickCount < totalBoxes) {
      $img3.addClass("pulse");
    } else {
      $img3.removeClass("pulse");
    }
  }

  // Page 4: main-image pulses until all benefit capsules are shown
  const $p4Lib = $("#libaton-page-4");
  const $p4Lys = $("#lysonir-page-4");

  if ($p4Lib.hasClass("active")) {
    const $img4 = $p4Lib.find(".main-image-page-4");
    const totalCapsules = $p4Lib.find(".benefit-capsule").length;
    if (page4ImageClickCount < totalCapsules) {
      $img4.addClass("pulse");
    } else {
      $img4.removeClass("pulse");
    }
  }

  if ($p4Lys.hasClass("active")) {
    const $img4 = $p4Lys.find(".main-image-page-4");
    const totalCapsules = $p4Lys.find(".benefit-capsule").length;
    if (page4ImageClickCount < totalCapsules) {
      $img4.addClass("pulse");
    } else {
      $img4.removeClass("pulse");
    }
  }

  // Page 5: main-image pulses until all indication items are shown
  const $p5Lib = $("#libaton-page-5");
  const $p5Lys = $("#lysonir-page-5");

  if ($p5Lib.hasClass("active")) {
    const $img5 = $p5Lib.find(".main-image-page-5");
    const totalItems = $p5Lib.find(".indication-item").length;
    if (page5ImageClickCount < totalItems) {
      $img5.addClass("pulse");
    } else {
      $img5.removeClass("pulse");
    }
  }

  if ($p5Lys.hasClass("active")) {
    const $img5 = $p5Lys.find(".main-image-page-5");
    const totalItems = $p5Lys.find(".indication-item").length;
    if (page5ImageClickCount < totalItems) {
      $img5.addClass("pulse");
    } else {
      $img5.removeClass("pulse");
    }
  }
}

/**
 * Update active nav-link based on the currently displayed page
 */
function updateActiveNavLink() {
  // Determine the currently active page (either LIBATON or LYSONIR)
  const activePage = $(".libaton-page.active, .lysonir-page.active");
  if (activePage.length === 0) return;

  const pageId = activePage.attr("id");
  if (!pageId) return;

  // Support both id formats: "libaton-page-X" and "lysonir-page-X"
  let pageNumber = null;
  if (pageId.indexOf("libaton-page-") === 0) {
    pageNumber = parseInt(pageId.replace("libaton-page-", ""));
  } else if (pageId.indexOf("lysonir-page-") === 0) {
    pageNumber = parseInt(pageId.replace("lysonir-page-", ""));
  }

  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 5) return;

  // Map page number to nav link index: page 2 -> index 0, ... page 5 -> index 3
  const navIndex = pageNumber - 2;

  // Remove active class from all nav links across both product navs
  $(".libaton-nav .nav-link").removeClass("active").removeAttr("aria-current");

  // Add active class to the corresponding nav link on every bottom nav
  if (navIndex >= 0 && navIndex < 4) {
    $(".libaton-nav").each(function () {
      const $navLinks = $(this).find(".nav-link");
      if ($navLinks.length > navIndex) {
        $navLinks.eq(navIndex).addClass("active").attr("aria-current", "page");
      }
    });
  }
}

/**
 * Navigate between LIBATON pages using arrow buttons
 * @param {number} direction - 1 for next, -1 for previous
 */
function navigateLibaton(direction) {
  const currentPage = $(".libaton-page.active").attr("id");
  if (!currentPage) return;

  const pageNumber = parseInt(currentPage.replace("libaton-page-", ""));
  let newPageNumber = pageNumber + direction;

  // Wrap around: if on page 5 and click next, go to page 1
  // If on page 1 and click previous, go to page 5
  if (newPageNumber > 5) {
    newPageNumber = 1;
    showPage("libaton-" + newPageNumber);
    return;
  } else if (newPageNumber < 1) {
    // When navigating back from the first LIBATON page, go to LYSONIR last page
    showPage("lysonir-5");
    return;
  }

  showPage("libaton-" + newPageNumber);
}

/**
 * Navigate between LYSONIR pages using arrow buttons
 * @param {number} direction - 1 for next, -1 for previous
 */
function navigateLysonir(direction) {
  const currentPage = $(".libaton-page.active").attr("id");
  if (!currentPage) return;

  const pageNumber = parseInt(currentPage.replace("lysonir-page-", ""));
  let newPageNumber = pageNumber + direction;

  // Wrap around: if on page 5 and click next, go to page 1
  // If on page 1 and click previous, go to page 5
  if (newPageNumber > 5) {
    // When navigating forward from the last LYSONIR page, go to LIBATON first page
    showPage("libaton-1");
    return;
  } else if (newPageNumber < 1) {
    newPageNumber = 5;
  }

  showPage("lysonir-" + newPageNumber);
}

/**
 * Add hover animations to navigation links
 */
$(document).on("mouseenter", ".libaton-nav .nav-link", function () {
  if (!$(this).hasClass("active")) {
    $(this).addClass("animate__animated animate__pulse");
  }
});

$(document).on("mouseleave", ".libaton-nav .nav-link", function () {
  $(this).removeClass("animate__animated animate__pulse");
});

/**
 * Page 2 Interactive Elements - Main Image Clicks
 * First click: Show text-content-page-2
 * Second click: Show bottle-image (keep text-content visible)
 * After second click: Do nothing on further clicks
 * Works for both LIBATON and LYSONIR
 */
let page2ImageClickCount = 0;

$(document).on("click", ".main-image-page-2", function () {
  const $page2Lib = $("#libaton-page-2");
  const $page2Lys = $("#lysonir-page-2");
  const $page2Content = $page2Lib.hasClass("active") ? $page2Lib : $page2Lys;

  // Reset counter when navigating away from page 2
  if (!$page2Content.hasClass("active")) {
    page2ImageClickCount = 0;
    return;
  }

  // Stop processing after second click
  if (page2ImageClickCount >= 2) {
    return;
  }

  page2ImageClickCount++;

  if (page2ImageClickCount === 1) {
    // First click: Show text content
    $page2Content.find(".text-content-page-2").addClass("show");
  } else if (page2ImageClickCount === 2) {
    // Second click: Show bottle image (text content stays visible)
    $page2Content.find(".bottle-image").addClass("show pulse");
  }
  // Update pulse state after click
  updatePulseStates();
});

/**
 * Page 2 Interactive Elements - Bottle Image Clicks
 * First click: Show packaging-box
 * Second click: Show dose-label, dose-value, and dose-duration (keep packaging visible)
 * After second click: Do nothing on further clicks
 * Works for both LIBATON and LYSONIR
 */
let bottleImageClickCount = 0;

$(document).on("click", ".bottle-image", function (e) {
  e.stopPropagation(); // Prevent triggering main image click

  const $page2Lib = $("#libaton-page-2");
  const $page2Lys = $("#lysonir-page-2");
  const $page2Content = $page2Lib.hasClass("active") ? $page2Lib : $page2Lys;

  // Reset counter when navigating away from page 2
  if (!$page2Content.hasClass("active")) {
    bottleImageClickCount = 0;
    return;
  }

  // Stop processing after second click
  if (bottleImageClickCount >= 2) {
    return;
  }

  bottleImageClickCount++;

  if (bottleImageClickCount === 1) {
    // First click: Show packaging box
    $page2Content.find(".packaging-box").addClass("show");
  } else if (bottleImageClickCount === 2) {
    // Second click: Show dose information (packaging box stays visible)
    $page2Content.find(".dose-label").addClass("show");
    $page2Content.find(".dose-value").addClass("show");
    $page2Content.find(".dose-duration").addClass("show");
  }
  // Update pulse state after bottle click
  updatePulseStates();
});

/**
 * Reset click counters when page changes
 */
$(document).on("click", ".top-nav-btn, .nav-link, .nav-arrow", function () {
  page2ImageClickCount = 0;
  bottleImageClickCount = 0;
  page3ImageClickCount = 0;
  page4ImageClickCount = 0;
  page5ImageClickCount = 0;
  // Remove any pulse classes immediately when navigating
  $(
    ".main-image-page-2, .bottle-image, .main-image-page-3, .main-image-page-4, .main-image-page-5"
  ).removeClass("pulse");
  // Ensure pulses reflect reset state
  updatePulseStates();
});

/**
 * Page 3 Interactive Elements - Main Image Clicks
 * Each click: Show next composition-box-page-3
 * When all boxes are shown: Do nothing on further clicks
 * Works for both LIBATON and LYSONIR
 */
let page3ImageClickCount = 0;

$(document).on("click", ".main-image-page-3", function () {
  const $page3Lib = $("#libaton-page-3");
  const $page3Lys = $("#lysonir-page-3");
  const $page3Content = $page3Lib.hasClass("active") ? $page3Lib : $page3Lys;

  // Reset counter when navigating away from page 3
  if (!$page3Content.hasClass("active")) {
    page3ImageClickCount = 0;
    return;
  }

  const $compositionBoxes = $page3Content.find(".composition-box-page-3");
  const totalBoxes = $compositionBoxes.length;

  // Stop processing if all boxes are already shown
  if (page3ImageClickCount >= totalBoxes) {
    $(".main-image-page-3").removeClass("pulse"); // Remove pulse if all shown
    return;
  }

  // Show the next composition box
  $compositionBoxes.eq(page3ImageClickCount).addClass("show");
  page3ImageClickCount++;
  updatePulseStates();
});

/**
 * Page 4 Interactive Elements - Main Image Clicks
 * Each click: Show next benefit-capsule
 * When all capsules are shown: Do nothing on further clicks
 * Works for both LIBATON and LYSONIR
 */
let page4ImageClickCount = 0;

$(document).on("click", ".main-image-page-4", function () {
  const $page4Lib = $("#libaton-page-4");
  const $page4Lys = $("#lysonir-page-4");
  const $page4Content = $page4Lib.hasClass("active") ? $page4Lib : $page4Lys;

  // Reset counter when navigating away from page 4
  if (!$page4Content.hasClass("active")) {
    page4ImageClickCount = 0;
    return;
  }

  const $benefitCapsules = $page4Content.find(".benefit-capsule");
  const totalCapsules = $benefitCapsules.length;

  // Stop processing if all capsules are already shown
  if (page4ImageClickCount >= totalCapsules) {
    return;
  }

  // Show the next benefit capsule
  $benefitCapsules.eq(page4ImageClickCount).addClass("show");
  page4ImageClickCount++;
  updatePulseStates();
});

/**
 * Page 5 Interactive Elements - Main Image Clicks
 * Each click: Show next indication-item
 * When all items are shown: Do nothing on further clicks
 * Works for both LIBATON and LYSONIR
 */
let page5ImageClickCount = 0;

$(document).on("click", ".main-image-page-5", function () {
  const $page5Lib = $("#libaton-page-5");
  const $page5Lys = $("#lysonir-page-5");
  const $page5Content = $page5Lib.hasClass("active") ? $page5Lib : $page5Lys;

  // Reset counter when navigating away from page 5
  if (!$page5Content.hasClass("active")) {
    page5ImageClickCount = 0;
    return;
  }

  const $indicationItems = $page5Content.find(".indication-item");
  const totalItems = $indicationItems.length;

  // Stop processing if all items are already shown
  if (page5ImageClickCount >= totalItems) {
    return;
  }

  // Show the next indication item
  $indicationItems.eq(page5ImageClickCount).addClass("show");
  page5ImageClickCount++;
  updatePulseStates();
});
