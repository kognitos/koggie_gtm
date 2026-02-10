// Canned suggestion button texts shown on the welcome screen.
// Used by the chat widget and the admin dashboard to identify "custom start" sessions.
export const SUGGESTION_TEXTS = [
  "How can I trust AI to not make mistakes?",
  "How can AI help reduce costs?",
  "What finance processes can you automate?",
  "How is this different from RPA?",
] as const;

// Minimum message count to consider a session "engaged"
export const ENGAGED_MESSAGE_THRESHOLD = 6;
