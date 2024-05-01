import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	if (browser) locale.set(window.navigator.language);
	await waitLocale();
}
