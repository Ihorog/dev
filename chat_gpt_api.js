// chat_gpt_api.js
async function sendMessageToGPT(message) {
  // Тут ми будемо використовувати API OpenAI для відправки повідомлення
    // та отримання відповіді.

      // 1. Підготовка даних для запиту:
        const messages = [
            { role: "system", content: "Ви помічник ШІ." }, // Системне повідомлення
                { role: "user", content: message } // Повідомлення користувача
                  ];

                    // 2. Відправка запиту до API OpenAI:
                      const response = await fetch("https://api.openai.com/v1/chat/completions", {
                          method: "POST",
                              headers: {
                                    "Content-Type": "application/json",
                                          "Authorization": `Bearer ${YOUR_API_KEY}` // Ваш ключ API OpenAI
                                              },
                                                  body: JSON.stringify({
                                                        model: "gpt-3.5-turbo", // Модель GPT, яку ви хочете використовувати
                                                              messages: messages
                                                                  })
                                                                    });

                                                                      // 3. Отримання та обробка відповіді:
                                                                        const data = await response.json();
                                                                          return data.choices[0].message.content; // Повертаємо відповідь GPT
                                                                          }

                                                                          // Функція для відображення повідомлення в чаті
                                                                          function displayMessage(role, message) {
                                                                            const chatContainer = document.getElementById("chat-container");
                                                                              const messageElement = document.createElement("div");
                                                                                messageElement.classList.add("message", role);
                                                                                  messageElement.textContent = message;
                                                                                    chatContainer.appendChild(messageElement);
                                                                                    }

                                                                                    // Обробник події для відправки повідомлення
                                                                                    document.getElementById("message-form").addEventListener("submit", async (event) => {
                                                                                      event.preventDefault();
                                                                                        const messageInput = document.getElementById("message-input");
                                                                                          const message = messageInput.value;
                                                                                            displayMessage("user", message); // Відображаємо повідомлення користувача
                                                                                              messageInput.value = ""; // Очищаємо поле вводу

                                                                                                // Відправляємо повідомлення до GPT та отримуємо відповідь
                                                                                                  const response = await sendMessageToGPT(message);
                                                                                                    displayMessage("gpt", response); // Відображаємо відповідь GPT
                                                                                                    });
                                                                                                    