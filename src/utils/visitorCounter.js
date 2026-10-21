// ==========================================================================
// Persistent Visitor Sequence Counter
// Specification: 새로고침 및 새 창(탭) 열렸을 때만 정확히 1씩 카운팅
// ==========================================================================

const STORAGE_KEY = 'hope77_persistent_visitor_seq';

// In-memory cache for the current browser page load
let cachedVisitorSequence = null;

/**
 * Returns the visitor sequence number.
 * - Increments exactly once per fresh page load (window open or reload).
 * - Subsequent calls within the same page session return the cached value.
 */
export function getVisitorSequence() {
  if (cachedVisitorSequence !== null) {
    return cachedVisitorSequence;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    let currentCount = parseInt(stored, 10);

    if (isNaN(currentCount) || currentCount < 1) {
      currentCount = 1;
    } else {
      currentCount += 1;
    }

    localStorage.setItem(STORAGE_KEY, currentCount.toString());
    cachedVisitorSequence = currentCount;
    return currentCount;
  } catch (e) {
    console.warn('localStorage not available for visitor counter:', e);
    cachedVisitorSequence = 1;
    return 1;
  }
}
