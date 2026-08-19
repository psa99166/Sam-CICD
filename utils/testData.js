function generateEmail() {
  return `qa_${Date.now()}@example.com`;
}

module.exports = { generateEmail };