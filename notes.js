const { Client } = require('pg')
const xss = require('xss');

const connectionString = process.env.DATABASE_URL || 'postgres://:@localhost/notes';

const express = require('express');
const router = express.Router();

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

router.get('/admin', ensureLoggedIn, async (req, res) => {
  const notes = await fetchNotes();

  console.log(notes);

  res.render('notes', { notes });
});

async function fetchNotes() {
  const client = new Client({ connectionString });
  await client.connect();
  const result = await client.query('SELECT * FROM notes');
  await client.end();

  return result.rows;
}

async function addNote(note) {
  const client = new Client({ connectionString });
  await client.connect();
  await client.query('INSERT INTO notes (note) VALUES ($1)', [note]);
  await client.end();
}

router.post('/addnote', ensureLoggedIn, async (req, res) => {
  const { note } = req.body;

  await addNote(xss(note));

  res.redirect('/admin');
});

module.exports = router;
