(function () {
  'use strict';

  if (window.__grpSiteEnhancements) return;
  window.__grpSiteEnhancements = true;

  var root = document.documentElement;
  var reducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealObserver = null;
  var summaryObserver = null;
  var refreshQueued = false;

  root.classList.add('js-enhanced');

  function createRevealObserver() {
    if (reducedMotion || !('IntersectionObserver' in window)) return null;

    return new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });
  }

  function enhanceReveal() {
    if (!revealObserver) revealObserver = createRevealObserver();

    var targets = document.querySelectorAll(
      'main > section:not([data-site-reveal]), ' +
      'main > article:not([data-site-reveal]), ' +
      'main > div:not([data-site-reveal])'
    );

    targets.forEach(function (target) {
      target.setAttribute('data-site-reveal', '');
      target.classList.add('site-reveal');

      var isInitiallyVisible = target.getBoundingClientRect().top < window.innerHeight * 0.92;
      if (reducedMotion || !revealObserver || isInitiallyVisible) {
        target.classList.add('is-visible');
      } else {
        revealObserver.observe(target);
      }
    });
  }

  function enhanceSummaryNavigation() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('nav[aria-label] a[href^="#"]')
    );

    if (!links.length || !('IntersectionObserver' in window)) return;
    if (summaryObserver) summaryObserver.disconnect();

    var targets = links.map(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      var section = document.getElementById(id);
      return section ? { link: link, section: section } : null;
    }).filter(Boolean);

    summaryObserver = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

      if (!visible.length) return;
      links.forEach(function (link) { link.classList.remove('is-current'); });

      var current = targets.find(function (item) {
        return item.section === visible[0].target;
      });
      if (current) current.link.classList.add('is-current');
    }, {
      rootMargin: '-18% 0px -68% 0px',
      threshold: 0
    });

    targets.forEach(function (item) { summaryObserver.observe(item.section); });
  }

  function markCurrentPage() {
    var currentPath = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('header nav a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href === '#' || href.indexOf('{{') !== -1) return;

      try {
        var url = new URL(href, window.location.href);
        if (url.pathname.replace(/\/$/, '') === currentPath && !url.hash) {
          link.setAttribute('aria-current', 'page');
        }
      } catch (error) {
        // Um link incompleto no editor nao impede as outras melhorias.
      }
    });
  }

  function createBackToTop() {
    if (!document.body || document.querySelector('.site-back-to-top')) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'site-back-to-top';
    button.setAttribute('aria-label', 'Voltar ao topo');
    button.setAttribute('title', 'Voltar ao topo');
    button.textContent = '↑';
    document.body.appendChild(button);

    var ticking = false;
    function updateVisibility() {
      button.classList.toggle('is-visible', window.scrollY > 640);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    }, { passive: true });

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });

    updateVisibility();
  }


  function enhanceDemoForm() {
    var form = document.querySelector('form.demonstracao-style-007, form[action="#"]');
    if (!form || form.__grpDemoEnhanced) return;

    var storageKey = 'grp_demo_form_v2';
    var fieldSelector = 'input[name], select[name], textarea[name]';
    var successBox = document.querySelector('.demonstracao-style-015');
    form.__grpDemoEnhanced = true;

    function getFields() {
      return Array.prototype.slice.call(form.querySelectorAll(fieldSelector));
    }

    function readStored() {
      try {
        return JSON.parse(window.localStorage.getItem(storageKey) || '{}');
      } catch (error) {
        return {};
      }
    }

    function writeStored(data) {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(data));
      } catch (error) {
        // Sem persistencia, o formulario continua funcional.
      }
    }

    function restoreValues() {
      var data = readStored();
      getFields().forEach(function (field) {
        if (!field.name || data[field.name] == null) return;
        field.value = data[field.name];
      });
    }

    function persistField(field) {
      if (!field || !field.name) return;
      var data = readStored();
      data[field.name] = field.value;
      writeStored(data);
    }

    function clearError(field) {
      if (!field) return;
      field.classList.remove('is-invalid');
      var msg = field.parentElement && field.parentElement.querySelector('.demonstracao-style-011');
      if (msg) msg.style.display = 'none';
    }

    function markError(field, show) {
      if (!field) return false;
      if (show) field.classList.add('is-invalid');
      var msg = field.parentElement && field.parentElement.querySelector('.demonstracao-style-011');
      if (msg) msg.style.display = show ? '' : 'none';
      return show;
    }

    function validate() {
      var ok = true;
      var byName = {};
      getFields().forEach(function (field) { if (field.name) byName[field.name] = field; });

      ok = !markError(byName.nome, !byName.nome || !byName.nome.value.trim()) && ok;
      ok = !markError(byName.email, !byName.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(byName.email.value.trim())) && ok;
      ok = !markError(byName.whatsapp, !byName.whatsapp || byName.whatsapp.value.replace(/\D/g, '').length < 10) && ok;
      ok = !markError(byName.empresa, !byName.empresa || !byName.empresa.value.trim()) && ok;
      ['perfil','porte','situacao','interesse','contato'].forEach(function(name){
        ok = !markError(byName[name], !byName[name] || !String(byName[name].value || '').trim()) && ok;
      });
      return ok;
    }

    function ensureSuccessBox() {
      if (successBox) return successBox;
      successBox = document.createElement('div');
      successBox.className = 'demonstracao-style-015';
      successBox.style.display = 'none';
      successBox.innerHTML = '<div class="demonstracao-style-016">Recebemos sua solicitação.</div>' +
        '<p class="demonstracao-style-017">Retornamos em até um dia útil no e-mail e no WhatsApp informados.</p>';
      form.parentNode.insertBefore(successBox, form.nextSibling);
      return successBox;
    }

    restoreValues();
    getFields().forEach(function(field){
      ['input','change','blur'].forEach(function(evt){
        field.addEventListener(evt, function(){
          persistField(field);
          clearError(field);
        });
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!validate()) return;
      var box = ensureSuccessBox();
      form.style.display = 'none';
      box.style.display = '';
      var data = readStored();
      data.__submittedAt = new Date().toISOString();
      writeStored(data);
    }, true);
  }

  function enhancePage() {
    refreshQueued = false;
    enhanceReveal();
    enhanceSummaryNavigation();
    markCurrentPage();
    createBackToTop();
    enhanceDemoForm();
  }

  function queueEnhancement() {
    if (refreshQueued) return;
    refreshQueued = true;
    window.requestAnimationFrame(enhancePage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhancePage, { once: true });
  } else {
    enhancePage();
  }

  var contentObserver = new MutationObserver(queueEnhancement);
  contentObserver.observe(document.documentElement, { childList: true, subtree: true });
}());
