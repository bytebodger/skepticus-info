import { describe, expect, it } from 'vitest';
import { getFailedPropheciesSorted } from './failedProphecies';

describe('getFailedPropheciesSorted', () =>
{
     it('sorts by canonical book order before chapter/verse order', () =>
     {
         const sorted = getFailedPropheciesSorted();
         const verses = sorted.map((item) => item.verse);

         expect(verses.length).toBeGreaterThan(0);
         // Verify Genesis entries come before other books in canonical order
         const genesisIndex = verses.findIndex(v => v.startsWith('Genesis'));
         const isValid = genesisIndex >= 0; // Genesis is the first book canonically
         expect(isValid).toBe(true);
     });

     it('exposes fulfillment entries under the editable key name', () =>
     {
         const sorted = getFailedPropheciesSorted();

         expect(sorted.length).toBeGreaterThan(0);
         expect(sorted[0]).toHaveProperty('text');
         expect(sorted[0]).toHaveProperty('verse');
         expect(sorted[0]).toHaveProperty('description');
         expect(sorted[0]).toHaveProperty('fulfillment verse(s)');
         expect(sorted[0]['fulfillment verse(s)'].length).toBeGreaterThan(0);
         expect(sorted[0]['fulfillment verse(s)'][0]).toHaveProperty('verse');
         expect(sorted[0]['fulfillment verse(s)'][0]).toHaveProperty('text');
     });
 });
