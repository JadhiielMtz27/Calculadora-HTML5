let limpiar = '';

function AñadirPantalla(value)
{
    limpiar += value;
    document.getElementById('pantalla').value = limpiar;
}

function LimpiarPantalla()
{
    limpiar = '';
    document.getElementById('pantalla').value = limpiar;
}

function Calculadora()
{
    try 
    {
        const resultado = eval(limpiar);
        limpiar = resultado.toString();
        document.getElementById('pantalla').value = limpiar;
    }
    catch(error)
    {
        limpiar = "ERROR";
        document.getElementById('pantalla').value = limpiar;
    }
}
