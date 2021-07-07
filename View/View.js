class TodoView {
    static View(list) {
        console.log(`\n                 ╔🧡 💛 💚 💙 💙 💜 🧡 ╗\n                 ║  To Do List  ║\n                 ╚══════════════╝`);
        console.log('🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧');
        console.table(list);
    }
    static save () {
        console.log(`🌈 ⭐️ task baru berhasi di tambahkan ⭐️ 🌈`);
    }
    static delete (data) {
        console.log(`😭 Deleted 🏵  ${data} 🏵 from your TODO list 😭`);
    }
    static complete(list) {
        console.log(`\n                 ╔🧡 💛 💚 💙 💙 💜 🧡 ╗\n                 ║  To Do List  ║\n                 ╚══════════════╝`);
        console.log('🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 \n');
        console.log('🌈 🌈  CONGRATULATION FOR COMPLETE THE TASK 🌈 🌈 ');    
        console.table(list);
    }
    static uncomplete(list) {
        console.log(`\n                 ╔🧡 💛 💚 💙 💙 💜 🧡 ╗\n                 ║  To Do List  ║\n                 ╚══════════════╝`);
        console.log('🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 \n');
        console.log('😥 😥  PLEASE COMPLETE YOUR TASK 😥 😥 ');    
        console.table(list);
    }
}
module.exports = TodoView;