/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key tersebut dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.

Penjelasan selanjutnya adalah untuk mengisi variabel global.mongo, yang merupakan konfigurasi untuk menghubungkan dengan database MongoDB. Jika kamu tidak memerlukan koneksi database atau tidak memiliki akses ke MongoDB, maka variabel ini bisa diisi dengan nilai null atau tidak perlu diisi sama sekali. Namun, jika kamu ingin menggunakan database, variabel global.mongo harus diisi dengan nilai yang benar agar script bisa berjalan dengan baik.  
**/


global.owner = ['6281524154183']  
global.read = True // ubah ke true jika ingin autoread 
global.mongo = '' //isi dengan link mongodb kamu jika tidak punya biarkan saja kosong
global.mods = ['6281524154183'] 
global.prems = ['6281524154183']
global.nameowner = 'ZannGamtenk'
global.numberowner = '6281395861695' 
global.mail = 'support@tioprm.my.id' 
global.dana = '6282292361777'
global.pulsa = '6282292361777'
global.gopay = '6282292361777'
global.namebot = 'BOTZann'
global.gc = 'https://chat.whatsapp.com/HeOR9Xv5gTUDr6VVCKeXch'
global.web = 'Ga ada min'
global.instagram = 'https://instagram.com/zannncuy?igshid=MzNlNGNkZWQ4Mg=='
global.wm = '© Zann'
global.watermark = wm
global.wm2 = '⫹⫺ Zann'
global.wm3 = '© Zann'
global.wm4 = '© ZannBot'
global.wait = '_*Tunggu sayang sedang di proses...*_'
global.eror = '_*Server Error sayang*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker dibuat sabar ya syang...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'Ga ada',
  alpis: 'Ga ada'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
