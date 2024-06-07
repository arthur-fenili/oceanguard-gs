'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: -23.854373,
    lng: -46.016817
};

export default function Monitor() {
    const [markers, setMarkers] = useState<{ lat: number; lng: number; }[]>([]);

    useEffect(() => {
        async function fetchMarkers() {
            try {
                const response = await axios.get('http://localhost:8088/coletores');
                setMarkers(response.data);
            } catch (error) {
                console.error('Erro ao buscar coletores:', error);
            }
        }

        fetchMarkers();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-[#f5f0e1] py-8 px-4">
            <div className="max-w-5xl w-full">
                <h1 className="text-3xl text-center mb-6 text-[#1e3d59]">Monitoramento dos Coletores de Lixo</h1>
                <p className="text-xl text-center mb-8 text-[#1e3d59]">
                    Acompanhe a localização em tempo real dos coletores de lixo da CleanSea.
                </p>
                <div className="border-2 border-blue-100 rounded-xl shadow-2xl bg-blue-50 p-4 w-full overflow-hidden">
                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            {markers.map((marker, index) => (
                                <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
}