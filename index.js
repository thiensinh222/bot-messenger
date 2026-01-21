const rules = require("./rules");

// Giả lập tin nhắn nhóm
const fakeMessages = [
  "xin chào",
  "vào link này https://abc.com",
  "@mọi người họp gấp",
  "chat bình thường"
];

console.log("🤖 Bot Messenger Cảnh Báo đang chạy...\n");

fakeMessages.forEach((msg) => {
  const warnings = rules.checkMessage(msg);

  if (warnings.length > 0) {
    console.log("📩 Tin nhắn:", msg);
    warnings.forEach(w => console.log(w));
    console.log("----");
  }
});

