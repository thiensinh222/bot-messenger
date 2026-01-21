module.exports = {
  checkMessage(message) {
    const warnings = [];

    if (!message) return warnings;

    const msg = message.toLowerCase();

    if (msg.includes("http://") || msg.includes("https://")) {
      warnings.push("⚠️ Cảnh báo: Không gửi link trong nhóm");
    }

    if (msg.includes("@mọi người") || msg.includes("@everyone")) {
      warnings.push("⚠️ Cảnh báo: Không tag toàn bộ nhóm");
    }

    return warnings;
  }
};
