// This script can be run in browser console to test login
// Navigate to: https://3000-ik42fmtqtmwq0aujcjat3-6532622b.e2b.dev/admin/login

// Fill in the form fields
document.getElementById('username').value = 'admin';
document.getElementById('password').value = 'clabs2024';

// Simulate form submission
const form = document.getElementById('loginForm');
const event = new Event('submit', { bubbles: true, cancelable: true });
form.dispatchEvent(event);