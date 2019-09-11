class View {
    static ViewData ( data ) {
        console.log ( "======================" );
        console.table ( data );
        console.log ( '======================' );
    }
    static addData ( name ) {
        console.log ( "======================" );
        console.log ( name )
        console.log ( `--Berhasil di Simpan--${String.fromCodePoint(0X1F917)}` );
        console.log ( "======================" );
    }
    static viewFind ( num ) {
        console.log ( ` ID yang di cari => ${num} ` );
    }
    static viewDelete ( numm ) {
        console.log ( `Deleted ${numm[0].task} from your TODO list... ${String.fromCodePoint(0X1F614)}`)
    }
    static viewComplete ( num ) {
        console.log ( 'Berhasil status target telah menjadi True')
        console.table ( num );
    }
    static viewUncomplete ( num ) {
        console.log ( 'Berhasil status target telah menjadi False')
        console.table ( num );
    }
    static viewListDesc ( data ) {
        console.table ( data );
    }
    static viewAddTags ( data ) {
        console.log ( '====sucess add====' );
        console.log ( `Tagged task ${data.task} with tags: ${data.tags} ${String.fromCodePoint(0X1F4AF)}`)
        console.log ( '--check list to see the changes--' );
    }
    static viewFilterTag ( data ) {
        console.log ( '======FilterByTag======' );
        console.log ( data )
    }
    static viewFilterStatus ( data ) {
        console.log ( '========StatusByFilter=========');
        console.log ( 'Status True ==>' + ` ${data}` );
    }
}

module.exports = View;