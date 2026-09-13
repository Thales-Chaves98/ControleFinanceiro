export function get(key){
    const valorBruto = localStorage.getItem(key);

    if(!valorBruto) return null;

    try{
        const valorParse = JSON.parse(valorBruto);
        return valorParse;
    } catch (erro){
        console.error("Erro ao ler dados de ", key,erro);
        return null;
    }
}

export function set(key){
    
}