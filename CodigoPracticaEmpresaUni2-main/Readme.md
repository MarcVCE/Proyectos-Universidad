# 🤖 Telegram AI Bot — Email Sending with AI

A Telegram bot that uses **OpenAI GPT** to interpret natural language messages and automatically execute actions, such as drafting and sending emails.

---

## 📋 Table of contents

- [What does it do?](#what-does-it-do)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Next steps](#next-steps)

---

## What does it do?

You write a message in Telegram as if you were talking to a person, for example:

> *"Send an email to juan@company.com telling him the meeting is on Monday at 10"*

The bot will:
1. Interpret the intent with GPT (Function Calling)
2. Draft the full email with subject and body using AI
3. Send it via SMTP and confirm back in Telegram ✅

---

## Architecture

```
Telegram message
      ↓
 analyze_message()
      ↓
 choose_function()  ← GPT decides which function to call (Function Calling)
      ↓
 send_email()       ← prepares the sending
      ↓
 draft_email_with_ai()  ← GPT drafts subject + body as JSON
      ↓
 SMTP → email sent
      ↓
 Telegram confirmation
```

---

## Tech stack

| Library | Role |
|---------|------|
| [python-telegram-bot](https://python-telegram-bot.org/) | Receive and send Telegram messages |
| [OpenAI Python SDK](https://github.com/openai/openai-python) | Function Calling + email drafting with GPT-3.5 |
| [smtplib](https://docs.python.org/3/library/smtplib.html) | Send emails via SMTP (Python stdlib) |
| [python-dotenv](https://github.com/theskumar/python-dotenv) | Environment variable management |

---

## Requirements

- Python 3.10+
- Telegram bot token → [@BotFather](https://t.me/BotFather)
- OpenAI API key → [platform.openai.com](https://platform.openai.com/api-keys)
- Email account with SMTP enabled (Gmail, Outlook, etc.)

---

## Installation

```bash
pip install python-telegram-bot openai python-dotenv requests
```

---

## Configuration

Create a `.env` file at the project root:

```env
BOT_TOKEN=xxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
API_KEY_OPENAI=sk-xxxxxxxxxxxxxxxxxxxx

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=youremail@gmail.com
SMTP_PASSWORD=your_app_password
```

> ⚠️ For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your regular account password.

The project also requires a `functions.json` file with the OpenAI Function Calling definitions:

```json
[
  {
    "name": "send_email",
    "description": "Sends an email to the specified recipient",
    "parameters": {
      "type": "object",
      "properties": {
        "email_user": {
          "type": "string",
          "description": "Recipient email address"
        },
        "message": {
          "type": "string",
          "description": "Content or instructions to draft the email"
        }
      },
      "required": ["email_user", "message"]
    }
  }
]
```

---

## Usage

```bash
python bot.py
```

Once running, send instructions to the bot in natural language:

| Example message | Action |
|-----------------|--------|
| `"Send an email to ana@work.com to let her know the meeting is on Friday"` | Drafts and sends the email |

The bot will reply with ✅ if the email was sent successfully or ❌ if an error occurred.

---

## Project structure

```
.
├── bot.py            # Main bot logic
├── functions.json    # OpenAI Function Calling definitions
├── .env              # Environment variables (do not commit)
└── requirements.txt  # Dependencies
```

> 💡 Add `.env` to your `.gitignore`.

---

## Next steps

| Improvement | Benefit |
|-------------|---------|
| Add more functions (create events, search info...) | Expand bot capabilities |
| Migrate to `gpt-4o` | Better Function Calling accuracy |
| Conversation history | Context across messages in the same chat |
| More robust error handling | Avoid crashes in production |

---

