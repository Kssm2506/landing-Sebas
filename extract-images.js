const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'landing_krasinski-3 (1).html'), 'utf8');

// Extract author photo (jpeg)
const authorMatch = html.match(/src="data:image\/jpeg;base64,([^"]+)" alt="Sebastián Jara Krasinski"/);
if (authorMatch) {
  const buf = Buffer.from(authorMatch[1], 'base64');
  fs.writeFileSync(path.join(__dirname, 'public', 'author.jpg'), buf);
  console.log('Author photo saved:', buf.length, 'bytes');
} else {
  console.log('Author photo not found');
}

// Extract book cover (png) - id="bookImg"
const bookMatch = html.match(/id="bookImg"[^>]*src="data:image\/png;base64,([^"]+)"/);
if (bookMatch) {
  const buf2 = Buffer.from(bookMatch[1], 'base64');
  fs.writeFileSync(path.join(__dirname, 'public', 'book-cover.png'), buf2);
  console.log('Book cover saved:', buf2.length, 'bytes');
} else {
  // Try alternate pattern
  const bookMatch2 = html.match(/src="data:image\/png;base64,([^"]+)"[^>]*id="bookImg"/);
  if (bookMatch2) {
    const buf2 = Buffer.from(bookMatch2[1], 'base64');
    fs.writeFileSync(path.join(__dirname, 'public', 'book-cover.png'), buf2);
    console.log('Book cover saved (alt pattern):', buf2.length, 'bytes');
  } else {
    console.log('Book cover not found');
  }
}
