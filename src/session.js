
import { writable } from 'svelte/store';

export const username = writable(localStorage.getItem("username") || "");
username.subscribe(val => localStorage.setItem("username", val));
export const avatarURL = writable(localStorage.getItem("avatarURL") || "");
avatarURL.subscribe(val => localStorage.setItem("avatarURL", val));

