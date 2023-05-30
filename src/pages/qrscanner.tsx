import React, { useEffect, useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner';

const QRScanner = () => {

    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    return (
        <div>
            <QrScanner
                onDecode={(result) => setResult(result)}
                onError={(error) => setError(error?.message)}
            // onDecode={(result) => console.log(result)}
            // onError={(error) => console.log(error?.message)}
            />

            <h1>result : {result}</h1>

            <h1>Error : {error}</h1>
        </div>
    )
}

export default QRScanner