import React, { useEffect, useState, useId, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
    curve: 'basis'
  }
});

export default function MermaidViewer({ chart, title, defaultScale = 1.0 }) {
  const uniqueId = useId().replace(/:/g, '_');
  const [svgHtml, setSvgHtml] = useState('');
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(defaultScale);
  const [isWide, setIsWide] = useState(false);
  const scrollerRef = useRef(null);

  // Synchronize scale when chart or defaultScale prop changes
  useEffect(() => {
    setScale(defaultScale);
  }, [chart, defaultScale]);

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      if (!chart) return;
      try {
        const id = `mermaid_svg_${uniqueId}_${Math.random().toString(36).substring(2, 7)}`;
        const { svg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvgHtml(svg);
          setError(null);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setError(err.message);
        }
      }
    }

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, uniqueId]);

  const handleZoomIn = () => setScale((prev) => Math.min(2.0, +(prev + 0.10).toFixed(2)));
  const handleZoomOut = () => setScale((prev) => Math.max(0.4, +(prev - 0.10).toFixed(2)));
  const handlePreset = (val) => setScale(val);
  const handleReset = () => setScale(defaultScale);
  const toggleWide = () => setIsWide((prev) => !prev);

  if (error) {
    return (
      <div className="mermaid-error-fallback">
        <div className="mermaid-error-head">
          <i className="fas fa-triangle-exclamation"></i>
          <span>Mermaid 다이어그램 렌더링 오류</span>
        </div>
        <pre>{chart}</pre>
      </div>
    );
  }

  return (
    <div className={`cs-mermaid-diagram-card ${isWide ? 'is-wide-mode' : ''}`}>
      {/* Top Subheading & Zoom Controls Toolbar */}
      <div className="cs-mermaid-diagram-header">
        <div className="cs-mermaid-meta-left">
          {title && (
            <h4 className="mermaid-card-title">
              <span>{title}</span>
            </h4>
          )}
        </div>

        {/* Size & Zoom Controller Toolbar */}
        <div className="cs-mermaid-zoom-toolbar">
          <span className="zoom-label">크기 조절:</span>

          <div className="zoom-btn-group">
            <button
              type="button"
              className="btn-zoom-ctrl"
              onClick={handleZoomOut}
              title="축소 (Zoom Out)"
              disabled={scale <= 0.4}
            >
              <i className="fas fa-minus"></i>
            </button>

            <span className="zoom-percent-display">{Math.round(scale * 100)}%</span>

            <button
              type="button"
              className="btn-zoom-ctrl"
              onClick={handleZoomIn}
              title="확대 (Zoom In)"
              disabled={scale >= 2.0}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div className="zoom-presets">
            <button
              type="button"
              className={`btn-zoom-preset ${Math.round(scale * 100) === 60 ? 'is-active' : ''}`}
              onClick={() => handlePreset(0.60)}
              title="60% 크기"
            >
              60%
            </button>
            <button
              type="button"
              className={`btn-zoom-preset ${Math.round(scale * 100) === 100 ? 'is-active' : ''}`}
              onClick={() => handlePreset(1.0)}
              title="100% 크기"
            >
              100%
            </button>
            <button
              type="button"
              className={`btn-zoom-preset ${Math.round(scale * 100) === 110 ? 'is-active' : ''}`}
              onClick={() => handlePreset(1.10)}
              title="110% 크기"
            >
              110%
            </button>
          </div>

          <button
            type="button"
            className="btn-zoom-reset"
            onClick={handleReset}
            title={`기본 크기 (${Math.round(defaultScale * 100)}%)로 복원`}
          >
            <i className="fas fa-rotate-left"></i>
            <span>리셋</span>
          </button>

          <button
            type="button"
            className={`btn-zoom-wide ${isWide ? 'is-active' : ''}`}
            onClick={toggleWide}
            title={isWide ? '기본 너비로 복원' : '화면 전체 너비로 확장'}
          >
            <i className={`fas ${isWide ? 'fa-compress' : 'fa-expand'}`}></i>
            <span>{isWide ? '기본 너비' : '넓게 보기'}</span>
          </button>
        </div>
      </div>

      {/* Diagram Canvas Scroller with Grid Background */}
      <div className="mermaid-canvas-scroller" ref={scrollerRef}>
        <div
          className="mermaid-viewport-container"
          style={{
            width: `${Math.round(scale * 100)}%`,
            maxWidth: `${Math.round(scale * 100)}%`,
            minWidth: `${Math.min(500, Math.round(scale * 800))}px`,
            transition: 'width 0.16s ease, max-width 0.16s ease, min-width 0.16s ease'
          }}
          dangerouslySetInnerHTML={{ __html: svgHtml }}
        />
      </div>
    </div>
  );
}
