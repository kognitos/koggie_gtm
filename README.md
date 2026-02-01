# Kognitos AI Sales Assistant

An AI-powered chat interface that acts as a knowledgeable sales representative for the Kognitos platform. Built with Next.js, Claude API, and styled with the Kognitos brand identity.

## Features

- **Intelligent Sales Conversations**: Powered by Claude, trained on Kognitos marketing content
- **Streaming Responses**: Real-time message streaming for a natural chat experience
- **Rate Limiting**: IP-based throttling (50 messages/hour) to prevent abuse
- **Chat Session Recording**: All conversations saved to Supabase for analytics
- **Kognitos Branding**: Dark theme with signature yellow accents, IBM Plex Mono typography
- **Mobile Responsive**: Works seamlessly on all device sizes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **AI**: Anthropic Claude SDK
- **Styling**: Tailwind CSS v4
- **Rate Limiting**: Supabase (Postgres)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Anthropic API key

### Installation

1. Clone the repository:
   ```bash
   cd koggie_gtm
   npm install
   ```

2. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Add your Anthropic API key to `.env.local`:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Adding Marketing Content

Place markdown files in the `/content` directory. The AI will use this content as its knowledge base when answering questions.

Example content files:
- `about-kognitos.md` - Company overview
- `features.md` - Product features
- `pricing.md` - Pricing information
- `use-cases.md` - Customer use cases
- `faq.md` - Frequently asked questions

The content is automatically loaded and injected into Claude's context.

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `ANTHROPIC_API_KEY`: Your Anthropic API key

### 3. Add Supabase (for rate limiting)

1. In your Vercel project dashboard, go to **Storage**
2. Click **Create Database** → Select **Supabase** from Marketplace
3. Follow the setup wizard to create a Postgres database
4. The `SUPABASE_URL` and `SUPABASE_ANON_KEY` will be automatically added
5. Go to your Supabase dashboard → **SQL Editor**
6. Run the SQL from `supabase/schema.sql` to create the rate_limits table

## Rate Limiting

The application limits users to **50 messages per hour** per IP address. This is handled by Supabase in production.

In development (without Supabase configured), rate limiting is disabled and all requests are allowed.

## Chat Session Analytics

All chat sessions are recorded in Supabase with:
- **chat_sessions**: Session metadata (IP, user agent, timestamps, message count)
- **chat_messages**: Individual messages with role, content, and timestamps

Query examples:
```sql
-- Recent sessions with message counts
SELECT * FROM chat_sessions ORDER BY started_at DESC LIMIT 50;

-- All messages from a session
SELECT * FROM chat_messages WHERE session_id = 'uuid-here' ORDER BY created_at;

-- Daily session counts
SELECT DATE(started_at), COUNT(*) FROM chat_sessions GROUP BY DATE(started_at);
```

## Customization

### Updating the System Prompt

Edit the `SALES_SYSTEM_PROMPT` in `/lib/claude.ts` to adjust the AI's personality and behavior.

### Changing Rate Limits

Modify the `RATE_LIMIT` constant in `/lib/rate-limiter.ts`.

### Brand Colors

All brand colors are defined as CSS custom properties in `/app/globals.css`.

## Project Structure

```
koggie_gtm/
├── app/
│   ├── api/chat/route.ts    # Claude streaming endpoint
│   ├── globals.css          # Kognitos theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main chat page
├── components/
│   ├── chat/
│   │   ├── ChatContainer.tsx
│   │   ├── ChatInput.tsx
│   │   ├── MessageBubble.tsx
│   │   └── MessageList.tsx
│   └── ui/
│       └── Logo.tsx
├── content/                  # Marketing content (markdown)
├── lib/
│   ├── claude.ts            # Claude client & prompts
│   ├── content-loader.ts    # Loads marketing content
│   └── rate-limiter.ts      # Vercel KV rate limiting
└── public/
    └── favicon.svg          # Kognitos logo
```

## License

Proprietary - Kognitos, Inc.
