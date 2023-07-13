const DataAtual = () =>{

    const pegaDataAtual = () =>{
        let data = new Date();
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let ano = data.getFullYear();
        let dataAtual = dia + '/' + mes + '/' + ano;
        return dataAtual;
    }

    return (
        <span>
            <p>{pegaDataAtual()}</p>
        </span>
    )
}
export default DataAtual;