#!/usr/bin/env -S bash -x -e

if [ ! -d node_modules ]; then
    npm install
    npx astro telemetry disable
fi

npm run dev