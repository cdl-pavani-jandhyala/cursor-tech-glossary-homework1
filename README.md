# Tech Glossary

A minimal static Tech Glossary project built with TypeScript, Tailwind CSS, and semantic HTML.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Compile TypeScript to JavaScript:

```bash
npm run build
```

3. Open `index.html` in your browser.

## Development

- **Build once**: `npm run build`
- **Watch mode** (auto-compile on changes): `npm run watch`

## Project Structure

- `index.html` - Main HTML file with semantic structure
- `glossary.ts` - TypeScript source with glossary data and rendering logic
- `glossary.js` - Compiled JavaScript (generated after build)
- `styles.css` - Custom CSS styles
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## Adding New Entries

Edit the `glossaryEntries` array in `glossary.ts`. Each entry should follow the `GlossaryEntry` interface:

```typescript
{
    term: string;
    description: string;
    tags: string[];
}
```

After making changes, run `npm run build` to compile the TypeScript.

## Testing

This project uses Vitest for unit testing. Tests are located in `glossary.test.ts`.

### Running Tests

```bash
# Run tests in watch mode (recommended for development)
npm test

# Run tests once
npm run test:run

# Open interactive test UI
npm run test:ui
```

### Test Coverage

The test suite covers the `filterGlossaryEntries` function with the following scenarios:

- Empty query returns all entries
- Filtering by term (case-insensitive)
- Filtering by description
- Filtering by tags
- No matches returns empty array