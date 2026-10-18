/**
 * ==========================================================================
 * HOPE77 Portfolio — Log Streamer & Telemetry Bootstrapping Engine
 * ==========================================================================
 * Demonstrates high-throughput log processing, telemetry parsing,
 * and data pipeline engineering workflows on initial page load.
 */

(function (window) {
    'use strict';

    // Specialized realistic log sequences reflecting the candidate's real projects
    const LOG_SEQUENCE = [
        {
            level: 'INFO',
            tag: 'sys:kernel',
            msg: 'Bootstrapping <span class="highlight">HOPE77 Data & Automation Pipeline</span> v2.4.0 (Node: <span class="accent">seoul-dc-01</span>)...',
            duration: 80,
            progress: 10,
            events: 1200
        },
        {
            level: 'DEBUG',
            tag: 'alloc:buffer',
            msg: 'Allocated telemetry ring-buffer memory pool [<span class="accent">capacity: 65,536 slots</span>, lock-free queue initialized].',
            duration: 100,
            progress: 22,
            events: 3400
        },
        {
            level: 'INGEST',
            tag: 'stream:riot-api',
            msg: 'Ingesting LOL match dataset & player metrics (<span class="highlight">arXiv:2512.20116</span>)... <span class="success-text">2,400 match nodes indexed</span>.',
            duration: 120,
            progress: 38,
            events: 5800
        },
        {
            level: 'INGEST',
            tag: 'telemetry:f1-udp',
            msg: 'Binding UDP socket [<span class="accent">PORT 20777</span>] for Race Engineer live telemetry parser (tire wear, fuel, sector deltas)... <span class="success-text">READY</span>.',
            duration: 110,
            progress: 52,
            events: 7900
        },
        {
            level: 'FILTER',
            tag: 'engine:cel',
            msg: 'Compiling Common Expression Language (CEL) AST filter tree for <span class="highlight">Unknown QA Pipeline</span>... <span class="success-text">128 rules validated</span>.',
            duration: 130,
            progress: 68,
            events: 9800
        },
        {
            level: 'PIPELINE',
            tag: 'etl:sanitizer',
            msg: 'Executing client-side SheetJS memory sandbox (NEIS letter counter, zero server leak)... <span class="success-text">PRIVACY SAFE</span>.',
            duration: 100,
            progress: 82,
            events: 11400
        },
        {
            level: 'PIPELINE',
            tag: 'sync:arch',
            msg: 'Aggregating 4 core architecture pillars: <span class="highlight">[Log Viz, Video Sync Pipeline, Analytics Tools, CEL Filters]</span>.',
            duration: 110,
            progress: 92,
            events: 13200
        },
        {
            level: 'METRIC',
            tag: 'perf:benchmark',
            msg: 'Pipeline sync benchmark: <span class="accent">54,200 events/sec</span> | Latency p99: <span class="accent">3.4ms</span> | Dropped packets: <span class="success-text">0</span>.',
            duration: 90,
            progress: 98,
            events: 14200
        },
        {
            level: 'SUCCESS',
            tag: 'render:dom',
            msg: '<span class="success-text">Hydration complete!</span> Portfolio payload verified. Unveiling workspace for recruiter session.',
            duration: 160,
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
            this.closeBtn = document.getElementById('btn-term-close');
            this.replayBtn = document.getElementById('btn-term-replay');

            this.currentIndex = 0;
            this.timer = null;
            this.isCompleted = false;
            this.autoCloseTimer = null;

            this.initEvents();
        }

        initEvents() {
            if (this.skipBtn) {
                this.skipBtn.addEventListener('click', () => this.skip());
            }

            if (this.closeBtn) {
                this.closeBtn.addEventListener('click', () => this.hideOverlay());
            }

            if (this.replayBtn) {
                this.replayBtn.addEventListener('click', () => this.start(true));
            }

            // Keyboard shortcut: ESC to skip/close
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.overlay && !this.overlay.classList.contains('hidden')) {
                    if (!this.isCompleted) {
                        this.skip();
                    } else {
                        this.hideOverlay();
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
            // Check if already viewed in this session
            const hasSeen = sessionStorage.getItem('hope77_log_pipeline_seen');
            if (hasSeen && !force) {
                // Instantly hide overlay if user already experienced it in current browser session
                this.hideOverlay(true);
                return;
            }

            if (this.overlay) {
                this.overlay.classList.remove('hidden');
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
            this.updateMetrics(item.progress, item.events, item.progress === 100 ? 'COMPLETED' : 'STREAMING');

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
                if (status === 'COMPLETED') {
                    this.statusTag.style.color = '#34d399';
                } else {
                    this.statusTag.style.color = '#58a6ff';
                }
            }
        }

        skip() {
            clearTimeout(this.timer);
            // Render remaining rows quickly
            while (this.currentIndex < LOG_SEQUENCE.length) {
                const item = LOG_SEQUENCE[this.currentIndex];
                this.renderRow(item);
                this.currentIndex++;
            }
            const lastItem = LOG_SEQUENCE[LOG_SEQUENCE.length - 1];
            this.updateMetrics(100, lastItem.events, 'COMPLETED');
            this.onComplete(true);
        }

        onComplete(immediate = false) {
            this.isCompleted = true;
            sessionStorage.setItem('hope77_log_pipeline_seen', 'true');

            // Add final cursor line
            if (this.body && !this.body.querySelector('.term-cursor-row')) {
                const cursorRow = document.createElement('div');
                cursorRow.className = 'term-cursor-row';
                cursorRow.innerHTML = '<span class="log-tag" style="color: #4ade80;">hope77@portfolio:~$</span> <span class="term-cursor"></span>';
                this.body.appendChild(cursorRow);
                this.body.scrollTop = this.body.scrollHeight;
            }

            // Close automatically after brief showcase
            const delay = immediate ? 300 : 750;
            this.autoCloseTimer = setTimeout(() => {
                this.hideOverlay();
            }, delay);
        }

        hideOverlay(instant = false) {
            clearTimeout(this.autoCloseTimer);
            if (!this.overlay) return;

            if (instant) {
                this.overlay.style.transition = 'none';
                this.overlay.classList.add('hidden');
                setTimeout(() => {
                    this.overlay.style.transition = '';
                }, 50);
            } else {
                this.overlay.classList.add('hidden');
            }
        }

        showModal() {
            if (!this.overlay) return;
            this.overlay.classList.remove('hidden');
            if (!this.isCompleted || this.body.children.length === 0) {
                this.start(true);
            }
        }
    }

    // Expose LogStreamer instance to global scope
    window.LogStreamer = LogStreamer;

})(window);
