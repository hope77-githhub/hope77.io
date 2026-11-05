export const LOG_SEQUENCE = [
  {
    level: 'INFO',
    tag: 'sys:kernel',
    msg: 'Starting <span class="highlight">장자훈\'s Log (HOPE77 Data &amp; Tooling Pipeline)</span> v2.5.0...',
    duration: 260,
    progress: 12,
    events: 1850
  },
  {
    level: 'DEBUG',
    tag: 'alloc:buffer',
    msg: 'Initializing ring-buffer telemetry pool [<span class="accent">capacity: 65,536 slots</span>, lock-free queue ready].',
    duration: 280,
    progress: 25,
    events: 3920
  },
  {
    level: 'INGEST',
    tag: 'stream:riot-api',
    msg: 'Ingesting LOL match dataset &amp; telemetry (<span class="highlight">arXiv:2512.20116</span>)... <span class="success-text">2,400 match nodes indexed</span>.',
    duration: 320,
    progress: 42,
    events: 6410
  },
  {
    level: 'FILTER',
    tag: 'engine:qa-suite',
    msg: 'Verifying one-click video-log sync &amp; schema validator for <span class="highlight">Unknown QA Pipeline</span>... <span class="success-text">ONLINE</span>.',
    duration: 340,
    progress: 58,
    events: 8940
  },
  {
    level: 'INGEST',
    tag: 'telemetry:f1-udp',
    msg: 'Binding UDP socket [<span class="accent">PORT 20777</span>] for Race Engineer real-time parser (tire wear, AI voice)... <span class="success-text">STREAM READY</span>.',
    duration: 300,
    progress: 72,
    events: 10830
  },
  {
    level: 'PIPELINE',
    tag: 'sync:arch',
    msg: 'Ingesting Core Tooling &amp; Pipelines: <span class="highlight">[LoL SNA, Unknown QA Suite, Race Engineer, NEIS Counter]</span>.',
    duration: 300,
    progress: 84,
    events: 12450
  },
  {
    level: 'PIPELINE',
    tag: 'etl:sanitizer',
    msg: 'Verifying client-side SheetJS memory sandbox (NEIS letter counter, zero server data leakage)... <span class="success-text">PRIVACY SAFE</span>.',
    duration: 280,
    progress: 94,
    events: 13900
  },
  {
    level: 'METRIC',
    tag: 'perf:benchmark',
    msg: 'Benchmark synced: <span class="accent">54,200 logs/sec</span> | Latency p99: <span class="accent">3.4ms</span> | Dropped packets: <span class="success-text">0</span>.',
    duration: 260,
    progress: 98,
    events: 14200
  },
  {
    level: 'SUCCESS',
    tag: 'render:dom',
    msg: '<span class="success-text">✔ All logs ingested successfully!</span> System initialized. Ready to explore <span class="highlight">장자훈\'s Project Logs</span>.',
    duration: 350,
    progress: 100,
    events: 14200
  }
];
