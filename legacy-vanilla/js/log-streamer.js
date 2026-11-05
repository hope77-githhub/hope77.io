/**
 * ==========================================================================
 * HOPE77 Portfolio — Log Streamer & Telemetry Bootstrapping Engine
 * ==========================================================================
 * Demonstrates high-throughput log processing, telemetry parsing,
 * and data pipeline engineering workflows on initial page load.
 */

(function (window) {
    'use strict';

    // Realistic log sequences reflecting Jahoon Jang's real data engineering & tool-building projects
    const LOG_SEQUENCE = [
        {
            level: 'INFO',
            tag: 'sys:kernel',
            msg: 'Starting <span class="highlight">장자훈\'s Log (HOPE77 Data &amp; Tooling Pipeline)</span> v2.5.0...',
            duration: 280,
            progress: 12,
            events: 1850
        },
        {
            level: 'DEBUG',
            tag: 'alloc:buffer',
            msg: 'Initializing ring-buffer telemetry pool [<span class="accent">capacity: 65,536 slots</span>, lock-free queue ready].',
            duration: 300,
            progress: 25,
            events: 3920
        },
        {
            level: 'INGEST',
            tag: 'stream:riot-api',
            msg: 'Ingesting LOL match dataset &amp; telemetry (<span class="highlight">arXiv:2512.20116</span>)... <span class="success-text">2,400 match nodes indexed</span>.',
            duration: 350,
            progress: 42,
            events: 6410
        },
        {
            level: 'INGEST',
            tag: 'telemetry:f1-udp',
            msg: 'Binding UDP socket [<span class="accent">PORT 20777</span>] for Race Engineer real-time parser (tire wear, fuel, telemetry deltas)... <span class="success-text">STREAM READY</span>.',
            duration: 320,
            progress: 58,
            events: 8940
        },
        {
            level: 'FILTER',
            tag: 'engine:cel',
            msg: 'Compiling Common Expression Language (CEL) AST filter tree for <span class="highlight">Unknown QA Pipeline</span>... <span class="success-text">128 filter conditions validated</span>.',
            duration: 360,
            progress: 72,
            events: 10830
        },
        {
            level: 'PIPELINE',
            tag: 'etl:sanitizer',
            msg: 'Verifying client-side SheetJS memory sandbox (NEIS letter counter, zero server data leakage)... <span class="success-text">PRIVACY SAFE</span>.',
            duration: 300,
            progress: 84,
            events: 12450
        },
        {
            level: 'PIPELINE',
            tag: 'sync:arch',
            msg: 'Ingesting 4 Core Architecture Pillars: <span class="highlight">[Log Viz, Video Sync Pipeline, Test Tools, CEL Filters]</span>.',
            duration: 320,
            progress: 94,
            events: 13900
        },
        {
            level: 'METRIC',
            tag: 'perf:benchmark',
            msg: 'Benchmark synced: <span class="accent">54,200 logs/sec</span> | Latency p99: <span class="accent">3.4ms</span> | Dropped packets: <span class="success-text">0</span>.',
            duration: 280,
            progress: 98,
            events: 14200
        },
        {
            level: 'SUCCESS',
            tag: 'render:dom',
            msg: '<span class="success-text">✔ All logs ingested successfully!</span> System initialized. Ready to explore <span class="highlight">장자훈\'s Project Logs</span>.',
            duration: 400,
            progress: 100,
            events: 14200
        }
    ];

    class LogStreamer {
        constructor() {
            this.overlay = document.getElementById('log-stream-overlay');
            this.body = document.getElementById('terminal-log-body');
            this.progressFill = document.getElementById('term-progress-fill');
            this.progressPct = document.getElementById('term-progress-pct');
            this.eventCounter = document.getElementById('term-event-counter');
            this.statusTag = document.getElementById('term-status-tag');
            this.skipBtn = document.getElementById('btn-term-skip');
            this.enterBtn = document.getElementById('btn-term-enter');
            this.closeBtn = document.getElementById('btn-term-close');
            this.replayBtn = document.getElementById('btn-term-replay');

            this.currentIndex = 0;
            this.timer = null;
            this.isCompleted = false;

            this.initEvents();
        }

        initEvents() {
            if (this.skipBtn) {
                this.skipBtn.addEventListener('click', () => this.skipAndEnter());
            }

            if (this.enterBtn) {
                this.enterBtn.addEventListener('click', () => this.hideOverlay());
            }

            if (this.closeBtn) {
                this.closeBtn.addEventListener('click', () => this.hideOverlay());
            }

            if (this.replayBtn) {
                this.replayBtn.addEventListener('click', () => this.start(true));
            }

            // Click outside the terminal window to enter main page
            if (this.overlay) {
                this.overlay.addEventListener('click', (e) => {
                    if (e.target === this.overlay) {
                        this.hideOverlay();
                    }
                });
            }

            // Keyboard shortcut: ESC or Enter to enter/skip
            window.addEventListener('keydown', (e) => {
                if (this.overlay && !this.overlay.classList.contains('hidden')) {
                    if (e.key === 'Escape' || e.key === 'Enter') {
                        if (!this.isCompleted) {
                            this.skipAndEnter();
                        } else {
                            this.hideOverlay();
                        }
                    }
                }
            });
        }

        getFormattedTimestamp() {
            const now = new Date();
            const pad = (n, width = 2) => String(n).padStart(width, '0');
            const h = pad(now.getHours());
            const m = pad(now.getMinutes());
            const s = pad(now.getSeconds());
            const ms = pad(now.getMilliseconds(), 3);
            return `${h}:${m}:${s}.${ms}`;
        }

        start(force = false) {
            if (this.overlay) {
                this.overlay.classList.remove('hidden');
            }

            if (this.enterBtn) {
                this.enterBtn.classList.remove('show');
            }

            this.currentIndex = 0;
            this.isCompleted = false;
            if (this.body) this.body.innerHTML = '';
            this.updateMetrics(0, 0, 'STREAMING');

            this.streamNextRow();
        }

        streamNextRow() {
            if (this.currentIndex >= LOG_SEQUENCE.length) {
                this.onComplete();
                return;
            }

            const item = LOG_SEQUENCE[this.currentIndex];
            this.renderRow(item);
            this.updateMetrics(item.progress, item.events, item.progress === 100 ? 'READY' : 'STREAMING');

            this.currentIndex++;
            this.timer = setTimeout(() => {
                this.streamNextRow();
            }, item.duration);
        }

        renderRow(item) {
            if (!this.body) return;

            const row = document.createElement('div');
            row.className = 'log-row';

            const ts = document.createElement('span');
            ts.className = 'log-ts';
            ts.textContent = this.getFormattedTimestamp();

            const lvl = document.createElement('span');
            lvl.className = `log-lvl lvl-${item.level}`;
            lvl.textContent = item.level;

            const tag = document.createElement('span');
            tag.className = 'log-tag';
            tag.textContent = `[${item.tag}]`;

            const msg = document.createElement('span');
            msg.className = 'log-msg';
            msg.innerHTML = item.msg;

            row.appendChild(ts);
            row.appendChild(lvl);
            row.appendChild(tag);
            row.appendChild(msg);

            this.body.appendChild(row);

            // Auto-scroll to bottom of terminal
            this.body.scrollTop = this.body.scrollHeight;
        }

        updateMetrics(progress, events, status) {
            if (this.progressFill) {
                this.progressFill.style.width = `${progress}%`;
            }
            if (this.progressPct) {
                this.progressPct.textContent = `${progress}%`;
            }
            if (this.eventCounter) {
                this.eventCounter.textContent = Number(events).toLocaleString();
            }
            if (this.statusTag) {
                this.statusTag.textContent = status;
                if (status === 'READY') {
                    this.statusTag.style.color = '#34d399';
                } else {
                    this.statusTag.style.color = '#58a6ff';
                }
            }
        }

        skipAndEnter() {
            clearTimeout(this.timer);
            // Render remaining rows quickly
            while (this.currentIndex < LOG_SEQUENCE.length) {
                const item = LOG_SEQUENCE[this.currentIndex];
                this.renderRow(item);
                this.currentIndex++;
            }
            const lastItem = LOG_SEQUENCE[LOG_SEQUENCE.length - 1];
            this.updateMetrics(100, lastItem.events, 'READY');
            this.onComplete(false); // Do not auto-close, let user see or click
            setTimeout(() => {
                this.hideOverlay();
            }, 300);
        }

        onComplete(autoClose = false) {
            this.isCompleted = true;

            // Show interactive Enter CTA button
            if (this.enterBtn) {
                this.enterBtn.classList.add('show');
            }

            // Add final ready prompt line
            if (this.body && !this.body.querySelector('.term-cursor-row')) {
                const cursorRow = document.createElement('div');
                cursorRow.className = 'term-cursor-row';
                cursorRow.innerHTML = '<span class="log-tag" style="color: #4ade80;">hope77@jang-log:~$</span> <span style="color: #cbd5e1;">ready --open-portfolio</span> <span class="term-cursor"></span>';
                this.body.appendChild(cursorRow);
                this.body.scrollTop = this.body.scrollHeight;
            }

            // NOTE: Do NOT automatically close! Let user view the logs and click or press Enter.
            if (autoClose) {
                setTimeout(() => {
                    this.hideOverlay();
                }, 1000);
            }
        }

        hideOverlay() {
            if (!this.overlay) return;
            this.overlay.classList.add('hidden');
        }

        showModal() {
            if (!this.overlay) return;
            this.overlay.classList.remove('hidden');
            if (!this.isCompleted || (this.body && this.body.children.length === 0)) {
                this.start(true);
            }
        }
    }

    // Expose LogStreamer instance to global scope
    window.LogStreamer = LogStreamer;

})(window);
