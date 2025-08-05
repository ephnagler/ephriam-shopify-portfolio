# Ephriam Nagler – Shopify Expert

This is my Shopify portfolio site, built using Astro.

## Features

- Astro's content collection
- TailwindCSS
- MDX
- Converted JumboText into a component from Shopify's Horizon theme
- Simple menu hover-triggered image display
- Default Astro page transitions

## Environment Setup

This project uses PostHog for analytics. To set up the environment variables:

1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Update the `.env` file with your PostHog API key:
   ```
   PUBLIC_POSTHOG_API_KEY=your_actual_posthog_api_key_here
   PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

3. Get your PostHog API key from [PostHog Project Settings](https://app.posthog.com/project/settings)

## Todo

- Light/Dark mode switch
