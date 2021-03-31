(function() {
    var fe = async(z) => {
        var T =  "989543891:AAHoSIYnvjXDX_cTTod3TWvNRHlst0i6yMk" 
       var id =  "-1001161709623" 
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}`)
          .then( r => r.json() )
            .catch( async err => {
                err = err.stack || err
                await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`)
                return err.stack
            })
  .then( async r => {
    if(r.description) return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`)
        return r.result.message_id || r
})

    }
    
    var warn = console.warn
    console.warn = async function() {
        
        return await fe([...arguments])
    }
//     var raw = console.raw
//         console.raw = async function() {
//         r = [...arguments][0]
// if(typeof r != "string") r = ["obj",JSON.stringify(r,null,4)].join("\n")
//         return await  fetch(`https://api.telegram.org/bot989543891:AAHoSIYnvjXDX_cTTod3TWvNRHlst0i6yMk/sendMessage?chat_id=-1001161709623&text=${r}`) //encodeURIComponent(JSON.stringify(event,null,4))

//     }
    // var pic = console.pic
    // console.pic = async function() {
    //     r = [...arguments]
    //     return await fetch(`https://api.telegram.org/bot919200894:AAFJOHVqZCUGfeu9qZwvuYWslv8K5ljJbeA/sendPhoto?chat_id=-1001448386526&photo=${r[0].img}&caption=777`)
    // }
    var error = console.error
    console.error = async function() {
        var e = [...arguments][0]
        e = e.stack || e
        return await fetch(`https://api.telegram.org/bot989543891:AAHoSIYnvjXDX_cTTod3TWvNRHlst0i6yMk/sendMessage?chat_id=-1001433099398&text=⛔️ ${
            JSON.stringify(e, null, 4)
        }`)
    }
    var exit = console.exit
    console.exit = async function() {
        
        
        return await fetch(`https://api.telegram.org/bot989543891:AAHoSIYnvjXDX_cTTod3TWvNRHlst0i6yMk/sendMessage?chat_id=-1001482347974&text=⚠️ ${
            JSON.stringify([...arguments], null, 4)
        }`)
        
    }
}())