let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ • Gopay [089687033380]
│ • -
│ • -
╰────
╭─「 Hubungi 」
│ > Ingin donasi? wa.me/6289687033380
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
