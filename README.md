Development of dashboard

Drizzle has native support for Neon connections with the neon-http and neon-websockets drivers. These use the neon-serverless driver under the hood.

With the neon-http and neon-websockets drivers, you can access a Neon database from serverless environments over HTTP or WebSockets instead of TCP. Querying over HTTP is faster for single, non-interactive transactions.

If you need session or interactive transaction support, or a fully compatible drop-in replacement for the pg driver, you can use the WebSocket-based neon-serverless driver. You can connect to a Neon database directly using Postgres