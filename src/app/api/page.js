import axios from 'axios';

const API_KEY = 'your_openai_api_key'; // 🔐 Keep this secret!
const API_URL = 'https://api.openai.com/v1/chat/completions';

const sendMessageToChatGPT = async (userMessage) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo', // or "gpt-4" if you have access
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    console.log('ChatGPT says:', reply);
    return reply;

  } catch (error) {
    console.error('Error talking to ChatGPT:', error.response?.data || error.message);
  }
};

// Example usage:
sendMessageToChatGPT('What is the capital of France?');
