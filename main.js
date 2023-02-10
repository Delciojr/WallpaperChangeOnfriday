


const isSexta = async () => {
    let hoje = dayjs().format()
    let hojeEsexta = dayjs(hoje).get("day")

    return hojeEsexta == 6
}


const start = async () => {
    
    let eSexta = await isSexta()
    if (eSexta) {
        document.getElementById('wallpaper-1').hidden = false;
        document.getElementById('wallpaper-2').hidden = true;
    } else {
        document.getElementById('wallpaper-1').hidden = true;
        document.getElementById('wallpaper-2').hidden = false;
    }
}


start()