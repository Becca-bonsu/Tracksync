import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRCodeScanner({ onScan }) {
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      try {
        const scannedData = JSON.parse(result?.text);
        console.log('Scanned data:', scannedData);
        onScan(scannedData);
      } catch (err) {
        console.error('QR Code parsing error:', err);
        setError('Invalid QR Code format');
      }
    }
  };

  const handleError = (err) => {
    console.error('Camera error:', err);
    setError('Error accessing camera');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Scan Attendance QR Code
        </h3>
        
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={handleScan}
            onError={handleError}
            className="w-full h-full"
            scanDelay={500}
          />
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
        
        <p className="mt-4 text-sm text-gray-500">
          Position the QR code within the frame to scan
        </p>
      </div>
    </div>
  );
}

export default QRCodeScanner;
