import historyInstance from"./historyInstance"

export function saveHistory(status, confidence) {
  return historyInstance.post("/api/user/history", {
    status,
    confidence,
  });
}
