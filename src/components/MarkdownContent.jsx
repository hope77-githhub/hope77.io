import React from 'react';

/**
 * Lightweight & secure markdown inline parser for **bold** and `code`.
 */
function renderInline(text) {
  if (!text) return null;
  const tokens = [];
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      tokens.push(text.slice(lastIdx, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      tokens.push(
        <strong key={match.index} className="cs-md-strong">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      tokens.push(
        <code key={match.index} className="cs-md-code">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    tokens.push(text.slice(lastIdx));
  }

  return tokens.length > 0 ? tokens : text;
}

/**
 * Parses markdown hierarchy (H3, H4, blockquote, bullet list, ordered list, paragraphs)
 * for case study section content.
 */
export function MarkdownContent({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null; // 'ul' or 'ol'

  const flushList = (key) => {
    if (currentList.length > 0) {
      if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${key}`} className="cs-md-ol">
            {currentList.map((item, idx) => (
              <li key={idx} className="cs-md-li">
                {renderInline(item)}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${key}`} className="cs-md-ul">
            {currentList.map((item, idx) => (
              <li key={idx} className="cs-md-li">
                {renderInline(item)}
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(idx);
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList(idx);
      elements.push(
        <h4 key={idx} className="cs-md-h3">
          <i className="fas fa-chevron-right cs-md-h3-arrow"></i>
          <span>{renderInline(trimmed.replace(/^###\s+/, ''))}</span>
        </h4>
      );
    } else if (trimmed.startsWith('#### ')) {
      flushList(idx);
      elements.push(
        <h5 key={idx} className="cs-md-h4">
          <span>{renderInline(trimmed.replace(/^####\s+/, ''))}</span>
        </h5>
      );
    } else if (trimmed.startsWith('> ')) {
      flushList(idx);
      elements.push(
        <blockquote key={idx} className="cs-md-quote">
          {renderInline(trimmed.replace(/^>\s+/, ''))}
        </blockquote>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      if (listType !== 'ul') {
        flushList(idx);
        listType = 'ul';
      }
      currentList.push(trimmed.replace(/^[-•*]\s+/, ''));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (listType !== 'ol') {
        flushList(idx);
        listType = 'ol';
      }
      currentList.push(trimmed.replace(/^\d+\.\s+/, ''));
    } else {
      flushList(idx);
      elements.push(
        <p key={idx} className="cs-md-p">
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushList('end');

  return <div className="cs-md-rendered-body">{elements}</div>;
}

export default MarkdownContent;
