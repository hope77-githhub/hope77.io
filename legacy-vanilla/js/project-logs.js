/**
 * ==========================================================================
 * HOPE77 Portfolio — "장자훈's Log" Timeline Registry & Payload Inspector
 * ==========================================================================
 * Manages accordion expand/collapse, filter tabs, and payload inspection.
 */

(function (window) {
    'use strict';

    class ProjectLogsModule {
        constructor() {
            this.cards = document.querySelectorAll('.log-stream-card');
            this.filterButtons = document.querySelectorAll('.log-filter-btn');
            this.expandAllBtn = document.getElementById('btn-logs-expand-all');
            this.collapseAllBtn = document.getElementById('btn-logs-collapse-all');

            this.initEvents();
        }

        initEvents() {
            // 1. Accordion Toggle on Expand Button Click
            this.cards.forEach((card) => {
                const expandBtn = card.querySelector('.log-expand-btn');
                if (expandBtn) {
                    expandBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleCard(card);
                    });
                }
            });

            // 2. Expand All & Collapse All Controls
            if (this.expandAllBtn) {
                this.expandAllBtn.addEventListener('click', () => {
                    this.cards.forEach(card => {
                        if (card.style.display !== 'none') {
                            card.classList.add('is-expanded');
                        }
                    });
                });
            }

            if (this.collapseAllBtn) {
                this.collapseAllBtn.addEventListener('click', () => {
                    this.cards.forEach(card => card.classList.remove('is-expanded'));
                });
            }

            // 3. Filter Category Buttons
            this.filterButtons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const category = btn.getAttribute('data-filter') || 'all';
                    this.applyFilter(category, btn);
                });
            });
        }

        toggleCard(card) {
            const isCurrentlyExpanded = card.classList.contains('is-expanded');
            if (isCurrentlyExpanded) {
                card.classList.remove('is-expanded');
            } else {
                card.classList.add('is-expanded');
            }
        }

        applyFilter(category, activeBtn) {
            this.filterButtons.forEach(b => b.classList.remove('active'));
            activeBtn.classList.add('active');

            this.cards.forEach((card) => {
                const cardCategory = card.getAttribute('data-category') || '';
                const categories = cardCategory.split(' ');

                if (category === 'all' || categories.includes(category)) {
                    card.style.display = 'flex';
                    card.style.animation = 'row-fade-in 0.25s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        openAndScrollTo(targetSelector) {
            const targetEl = document.querySelector(targetSelector);
            if (!targetEl) return;

            // If it's a log stream card, expand it
            if (targetEl.classList.contains('log-stream-card')) {
                // Ensure it's not hidden by current filter
                targetEl.style.display = 'flex';
                targetEl.classList.add('is-expanded');

                this.cards.forEach(c => c.classList.remove('highlighted'));
                targetEl.classList.add('highlighted');
            }

            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    window.ProjectLogsModule = ProjectLogsModule;

})(window);
