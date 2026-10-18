/**
 * ==========================================================================
 * HOPE77 Portfolio — Application Main Entry Point
 * ==========================================================================
 * Orchestrates LogStreamer, NavigationModule, and I18nModule.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Initialize Log Streamer Engine & Telemetry Console
    const streamer = new window.LogStreamer();

    // Start initial ingestion stream
    streamer.start(false);

    // Header Terminal Toggle Button
    const headerLogBtn = document.getElementById('btn-header-log-console');
    if (headerLogBtn) {
        headerLogBtn.addEventListener('click', () => {
            streamer.showModal();
        });
    }

    // 2. Initialize Navigation & Preview Module
    const navigation = new window.NavigationModule();

    // 3. Initialize i18n & Translation Module
    const i18n = new window.I18nModule((newLang) => {
        // Refresh active preview panel text on language switch
        navigation.refreshActivePreview();
    });

    // Make streamer globally accessible for user interactions or debugging
    window.appStreamer = streamer;
});
