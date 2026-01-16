function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

module.exports = { formatDate, generateId };
