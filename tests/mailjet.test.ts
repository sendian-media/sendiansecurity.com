import assert from 'node:assert/strict';
import test from 'node:test';
import { isAllowedFormOrigin } from '../src/lib/form-origin.ts';
import { escapeHtml, parseRecipients } from '../src/lib/mailjet.ts';

test('escapes visitor text and ignores invalid recipients', () => {
  assert.equal(escapeHtml(`<b>O'Reilly & "Co"</b>`), '&lt;b&gt;O&#39;Reilly &amp; &quot;Co&quot;&lt;/b&gt;');
  assert.deepEqual(parseRecipients('team@example.com, invalid, , bcc@example.com'), [
    { Email: 'team@example.com' },
    { Email: 'bcc@example.com' },
  ]);
});

test('accepts the configured public origin behind a reverse proxy', () => {
  assert.equal(isAllowedFormOrigin('https://sendiansecurity.com', 'http://127.0.0.1:4321/api/forms', 'https://sendiansecurity.com'), true);
  assert.equal(isAllowedFormOrigin('https://attacker.example', 'http://127.0.0.1:4321/api/forms', 'https://sendiansecurity.com'), false);
});
