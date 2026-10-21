/**
 * ==========================================================================
 * HOPE77 Portfolio — Navigation & Preview Module
 * ==========================================================================
 * Handles module button states, dynamic preview panel synchronization,
 * and smooth scrolling to portfolio sections.
 */

(function (window) {
    'use strict';

    class NavigationModule {
        constructor() {
            this.moduleButtons = document.querySelectorAll('.module-btn');
            this.headerActivePill = document.getElementById('header-active-pill');
            this.previewModuleName = document.getElementById('preview-module-name');
            this.previewModuleDesc = document.getElementById('preview-module-desc');
            this.previewJumpBtn = document.getElementById('preview-jump-btn');

            this.initEvents();
        }

        initEvents() {
            this.moduleButtons.forEach((btn) => {
                btn.addEventListener('mouseenter', () => this.updatePreview(btn));

                btn.addEventListener('click', () => {
                    this.setActiveButton(btn);
                    this.scrollToTarget(btn);
                });
            });
        }

        setActiveButton(btn) {
            this.moduleButtons.forEach((b) => {
                b.classList.remove('active');
                const chip = b.querySelector('.chip');
                if (chip && chip.textContent.trim() === 'ON') {
                    chip.className = 'chip chip-neutral';
                    chip.textContent = 'INFO';
                }
            });

            btn.classList.add('active');
            const activeChip = btn.querySelector('.chip');
            if (activeChip && activeChip.textContent.trim() === 'INFO') {
                activeChip.className = 'chip chip-info';
                activeChip.textContent = 'ON';
            }

            if (this.headerActivePill) {
                const moduleName = btn.getAttribute('data-module') || 'Overview';
                this.headerActivePill.textContent = `SECTION: ${moduleName}`;
            }

            this.updatePreview(btn);
        }

        updatePreview(btn) {
            if (!this.previewModuleName || !this.previewModuleDesc) return;

            const titleEl = btn.querySelector('.module-btn-title');
            if (titleEl) {
                this.previewModuleName.textContent = titleEl.textContent;
            }

            const currentLang = document.documentElement.lang || 'ko';
            const desc = currentLang === 'en'
                ? btn.getAttribute('data-desc-en')
                : btn.getAttribute('data-desc-ko');

            this.previewModuleDesc.textContent = desc || '';

            if (this.previewJumpBtn) {
                this.previewJumpBtn.setAttribute('href', btn.getAttribute('data-target') || '#');
            }
        }

        scrollToTarget(btn) {
            const targetSelector = btn.getAttribute('data-target');
            if (!targetSelector) return;

            const targetEl = document.querySelector(targetSelector);
            if (targetEl) {
                document.querySelectorAll('.project-card, .log-stream-card').forEach(c => c.classList.remove('highlighted'));
                
                // If targeting a log card, expand it automatically so details are visible
                if (targetEl.classList.contains('log-stream-card')) {
                    targetEl.style.display = 'flex';
                    targetEl.classList.add('is-expanded');
                    targetEl.classList.add('highlighted');
                } else if (targetEl.classList.contains('project-card')) {
                    targetEl.classList.add('highlighted');
                }
                
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        refreshActivePreview() {
            const activeBtn = document.querySelector('.module-btn.active');
            if (activeBtn) {
                this.updatePreview(activeBtn);
            }
        }
    }

    window.NavigationModule = NavigationModule;

})(window);
