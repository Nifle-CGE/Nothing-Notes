import { notesRef } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, content, title } = await request.json();

	await notesRef.updateOne(
		{ id },
		{ $set: { title, content, lastModified: new Date() } },
		{ upsert: true }
	);

	return new Response('OK');
}
