const login = require("facebook-chat-api");

login(
  { appState: require("./appstate.json") },
  (err, api) => {
    if (err) return console.error(err);

    api.setOptions({ listenEvents: true });

    api.listenMqtt((err, event) => {
      if (err) return console.error(err);

      if (event.type === "message" && event.body) {
        const msg = event.body.toLowerCase();

        // cảnh báo gửi link
        if (msg.includes("http://") || msg.includes("https://")) {
          api.sendMessage(
            "⚠️ Cảnh báo: Không gửi link trong nhóm!",
            event.threadID
          );
        }

        // cảnh báo tag everyone
        if (msg.includes("@everyone") || msg.includes("@mọi người")) {
          api.sendMessage(
            "⚠️ Vui lòng không tag toàn bộ nhóm!",
            event.threadID
          );
        }

        // lệnh menu
        if (msg === ".menu") {
          api.sendMessage(
            "📜 MENU CẢNH BÁO\n- Gửi link → cảnh báo\n- Tag @mọi người → cảnh báo",
            event.threadID
          );
        }
      }
    });
  }
);
