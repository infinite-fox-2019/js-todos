class View {
    static ViewData ( data ) {
        console.log ( "======================" );
        console.table ( data );
        console.log ( '======================' );
    }
    static addData ( name ) {
        console.log ( "======================" );
        console.log ( name )
        console.log ( "--Berhasil di Simpan--" );
        console.log ( "======================" );
    }
    static viewFind ( num ) {
        console.log ( ` ID yang di cari => ${num} ` );
    }
    static viewDelete ( numm ) {
        console.log ( `Deleted ${numm[0].task} from your TODO list...`)
    }
    static viewComplete ( num ) {
        console.table ( num );
    }
    static viewUncomplete ( num ) {
        console.table ( num );
    }
    static viewListDesc ( data ) {
        console.table ( data );
    }
    static viewAddTags (  ) {
        console.log ( '====sucess add====' );
        // console.log ( `Tagged task ${record[0]} with tags: ${record[0]}`)
        console.log ( '--check list to see the changes--' );
    }
    static viewFilterTag ( data ) {
        console.log ( '======FilterByTag======' );
        console.log ( data )
    }
}

module.exports = View;