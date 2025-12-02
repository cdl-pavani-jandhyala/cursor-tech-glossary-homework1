import { describe, it, expect } from 'vitest';
import { filterGlossaryEntries, glossaryEntries } from './glossary';
describe('filterGlossaryEntries', () => {
    it('should return all entries when query is empty', () => {
        const result = filterGlossaryEntries('');
        expect(result).toHaveLength(glossaryEntries.length);
        expect(result).toEqual(glossaryEntries);
    });
    it('should filter by term (case-insensitive)', () => {
        const result = filterGlossaryEntries('api');
        expect(result.length).toBeGreaterThan(0);
        // At least one result should match the term
        expect(result.some(entry => entry.term.toLowerCase().includes('api'))).toBe(true);
        // Test case-insensitivity
        const upperResult = filterGlossaryEntries('API');
        expect(upperResult).toEqual(result);
    });
    it('should filter by description', () => {
        const result = filterGlossaryEntries('protocols');
        expect(result.length).toBeGreaterThan(0);
        expect(result.some(entry => entry.description.toLowerCase().includes('protocols'))).toBe(true);
    });
    it('should filter by tags', () => {
        const result = filterGlossaryEntries('devops');
        expect(result.length).toBeGreaterThan(0);
        expect(result.some(entry => entry.tags.some(tag => tag.toLowerCase().includes('devops')))).toBe(true);
    });
    it('should return empty array when no matches found', () => {
        const result = filterGlossaryEntries('nonexistentterm12345');
        expect(result).toHaveLength(0);
    });
});
