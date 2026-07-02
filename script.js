// Password eye
// Ambil semua tombol mata menggunakan selector class (pastikan di HTML ditambahkan class "toggle-btn")
const toggleButtons = [
    { button: 'togglePassword', input: 'password', icon: 'eyeIcon' },
    { button: 'toggleConfirmPassword', input: 'confirmPassword', icon: 'eyeIconConfirm' }
];

toggleButtons.forEach(item => {
    const btn = document.getElementById(item.button);
    const input = document.getElementById(item.input);
    const icon = document.getElementById(item.icon);

    if (btn && input && icon) {
        btn.addEventListener('click', function () {
            const isPassword = input.type === 'password';

            // Ubah tipe input
            input.type = isPassword ? 'text' : 'password';

            // Ubah SVG Icon Mata
            icon.innerHTML = isPassword
                ? `<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />`
                : `<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />`;

            // Ubah Aksesibilitas
            this.setAttribute('aria-label', isPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
        });
    }
});
