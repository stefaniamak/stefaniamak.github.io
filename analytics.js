/**
 * Firebase Analytics Event Tracking Helper
 * Provides a safe wrapper around Firebase Analytics for tracking user interactions
 */

// Import Firebase Analytics logEvent function
let logEventFn = null;

async function initializeLogEvent() {
    if (logEventFn) return logEventFn;
    
    try {
        const { logEvent } = await import("https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js");
        const analytics = window.analytics;
        
        if (analytics) {
            logEventFn = (eventName, eventParams) => logEvent(analytics, eventName, eventParams);
            return logEventFn;
        }
    } catch (error) {
        console.warn('Firebase Analytics not available:', error);
    }
    return null;
}

/**
 * Track an analytics event
 * @param {string} eventName - The event name in snake_case
 * @param {Object} params - Event parameters
 */
async function trackEvent(eventName, params = {}) {
    // Validate event name
    if (!eventName || typeof eventName !== 'string') {
        console.warn('Invalid event name:', eventName);
        return;
    }

    // Sanitize parameters
    const sanitizedParams = {};
    for (const [key, value] of Object.entries(params)) {
        if (value !== null && value !== undefined && value !== '') {
            // Convert to string and limit length (GA4 has parameter value limits)
            const stringValue = String(value);
            if (stringValue.length <= 100) {
                sanitizedParams[key] = stringValue;
            } else {
                sanitizedParams[key] = stringValue.substring(0, 100);
            }
        }
    }

    // Initialize and use logEvent
    const logEvent = await initializeLogEvent();
    if (logEvent) {
        try {
            logEvent(eventName, sanitizedParams);
        } catch (error) {
            console.warn('Failed to log analytics event:', eventName, error);
        }
    }
}

// Make trackEvent available globally
if (typeof window !== 'undefined') {
    window.trackEvent = trackEvent;
}
