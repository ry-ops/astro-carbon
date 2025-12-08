// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

      mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // Scroll behavior - hide top nav, sticky category bar
  const topNav = document.getElementById('top-nav');
  const categoryNav = document.getElementById('category-nav');
  const categoryNavSpacer = document.getElementById('category-nav-spacer');
  var lastScrollY = 0;
  const scrollThreshold = 80;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      if (topNav) topNav.classList.add('hidden-nav');
      if (categoryNav) categoryNav.classList.add('is-sticky');
      if (categoryNavSpacer) categoryNavSpacer.classList.add('active');
    } else {
      if (topNav) topNav.classList.remove('hidden-nav');
      if (categoryNav) categoryNav.classList.remove('is-sticky');
      if (categoryNavSpacer) categoryNavSpacer.classList.remove('active');
    }

    lastScrollY = currentScrollY;
  }

  // Throttled scroll handler
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  handleScroll();

  // Mega menu functionality
  const categoryItems = document.querySelectorAll('.category-nav-item');
  var activeMenu = null;
  var hideTimeout = null;

  categoryItems.forEach(function(item) {
    const trigger = item.querySelector('.category-trigger');
    const categorySlug = item.getAttribute('data-category');
    const megaMenu = document.querySelector('.mega-menu-dropdown[data-category="' + categorySlug + '"]');

    if (!trigger || !megaMenu) return;

    function showMenu() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      if (activeMenu && activeMenu !== megaMenu) {
        activeMenu.classList.remove('active');
        const otherTrigger = document.querySelector('.category-nav-item[data-category="' + activeMenu.getAttribute('data-category') + '"] .category-trigger');
        if (otherTrigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      }

      megaMenu.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      activeMenu = megaMenu;
    }

    function hideMenu() {
      hideTimeout = setTimeout(function() {
        megaMenu.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        if (activeMenu === megaMenu) {
          activeMenu = null;
        }
      }, 150);
    }

    trigger.addEventListener('mouseenter', showMenu);
    trigger.addEventListener('focus', showMenu);
    trigger.addEventListener('mouseleave', hideMenu);
    trigger.addEventListener('blur', hideMenu);

    megaMenu.addEventListener('mouseenter', function() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    });

    megaMenu.addEventListener('mouseleave', hideMenu);

    trigger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          hideMenu();
        } else {
          showMenu();
        }
      } else if (e.key === 'Escape') {
        hideMenu();
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', function(e) {
    const target = e.target;
    if (!target.closest('.category-nav-item') && !target.closest('.mega-menu-dropdown')) {
      if (activeMenu) {
        activeMenu.classList.remove('active');
        const activeTrigger = document.querySelector('.category-nav-item[data-category="' + activeMenu.getAttribute('data-category') + '"] .category-trigger');
        if (activeTrigger) {
          activeTrigger.setAttribute('aria-expanded', 'false');
        }
        activeMenu = null;
      }
    }
  });
});
