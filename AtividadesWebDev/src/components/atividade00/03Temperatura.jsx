export const CelsiusParaFarenheit = ({celcius}) => {
    
    return (
        <div>
            <h1>A temperatura em farenheit é: {celcius*1.8 + 32}ºF</h1>
        </div>
    )
}

export const FarenheitParaCelsius = ({farenheit}) => {
    
    return (
        <div>
            <h1>A temperatura em celsius é: {(farenheit -32)/1.8}ºC</h1>
        </div>
    )
}

export const KelvinParaFarenheitECelsius = ({kelvin}) => {
    
    return (
        <div>
            <h1>A temperatura em celsius e farenheit são: {(kelvin - 273)}ºC e {(kelvin*1.8 - 459.4)}ºF</h1>
        </div>
    )
}