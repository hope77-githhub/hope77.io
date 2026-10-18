/**
 * ==========================================================================
 * HOPE77 Portfolio — Hybrid i18n & Translation Engine
 * ==========================================================================
 * Supports static preset translations with automatic Google GTX API fallback
 * for user-edited content blocks.
 */

(function (window) {
    'use strict';

    class I18nModule {
        constructor(onLanguageChangeCallback) {
            this.currentLang = 'ko';
            this.onLanguageChange = onLanguageChangeCallback;
            this.langToggleBtn = document.getElementById('lang-toggle-btn');
            this.langKoBadge = document.getElementById('lang-ko');
            this.langEnBadge = document.getElementById('lang-en');

            this.translatableElements = document.querySelectorAll('[data-en], .needs-content-placeholder, .release-body');

            this.cacheOriginalKo();
            this.initEvents();
        }

        cacheOriginalKo() {
            this.translatableElements.forEach((el) => {
                el.dataset.originalKo = el.innerHTML.trim();
            });
        }

        initEvents() {
            if (this.langToggleBtn) {
                this.langToggleBtn.addEventListener('click', () => {
                    const nextLang = this.currentLang === 'ko' ? 'en' : 'ko';
                    this.applyLanguage(nextLang);
                });
            }
        }

        async translateKoreanToEnglish(text) {
            try {
                const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=en&dt=t&q=' + encodeURIComponent(text);
                const res = await fetch(url);
                const data = await res.json();
                return data[0].map(item => item[0]).join('');
            } catch (e) {
                console.warn('[i18n] Translation fallback triggered:', e);
                return text;
            }
        }

        async applyLanguage(lang) {
            this.currentLang = lang;
            document.documentElement.lang = lang;

            if (this.langKoBadge) this.langKoBadge.classList.toggle('active', lang === 'ko');
            if (this.langEnBadge) this.langEnBadge.classList.toggle('active', lang === 'en');

            for (const el of this.translatableElements) {
                if (lang === 'ko') {
                    el.innerHTML = el.dataset.originalKo || el.innerHTML;
                } else {
                    const rawKoText = el.textContent.trim();
                    const presetEn = el.getAttribute('data-en');

                    // If candidate replaced "내용 필요" with custom Korean text, auto-translate it via Google GTX API
                    const isEditedPlaceholder =
                        (el.classList.contains('needs-content-placeholder') || el.classList.contains('release-body')) &&
                        rawKoText !== '내용 필요' &&
                        presetEn === 'Content needed';

                    if (isEditedPlaceholder) {
                        if (!el.dataset.cachedAutoEn) {
                            el.textContent = 'Translating...';
                            el.dataset.cachedAutoEn = await this.translateKoreanToEnglish(rawKoText);
                        }
                        el.textContent = el.dataset.cachedAutoEn;
                    } else if (presetEn) {
                        // Preserve leading icons if present
                        const iconEl = el.querySelector('i');
                        if (iconEl) {
                            el.innerHTML = iconEl.outerHTML + ' ' + presetEn;
                        } else {
                            el.innerHTML = presetEn;
                        }
                    }
                }
            }

            if (typeof this.onLanguageChange === 'function') {
                this.onLanguageChange(lang);
            }
        }
    }

    window.I18nModule = I18nModule;

})(window);
