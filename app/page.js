'use client';
import { useState } from 'react';

export default function Home() {
  const [cliente, setCliente] = useState('');
  const [costos, setCostos] = useState({ pub: 0, reel: 0, story: 0 });
  const [cantidades, setCantidades] = useState({ pub: 0, reel: 0, story: 0 });
  const [history, setHistory] = useState([]);

  const total =
    costos.pub * cantidades.pub +
    costos.reel * cantidades.reel +
    costos.story * cantidades.story;

  const guardar = () => {
    const nueva = {
      cliente,
      total,
      fecha: new Date().toLocaleString(),
    };
    setHistory([nueva, ...history]);
  };

  return (
    <main className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="space-y-6">
        <h1 className="text-2xl font-bold">Cotizador Publicitario</h1>
        <div>
          <label className="font-semibold">Cliente</label>
          <input
            type="text"
            className="w-full border rounded p-2 mt-1"
            placeholder="Nombre del cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>
        {[
          { key: 'pub', label: 'Publicaciones' },
          { key: 'reel', label: 'Reels' },
          { key: 'story', label: 'Historias' },
        ].map(({ key, label }) => (
          <div key={key} className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium">{label} - Costo unitario</label>
              <input
                type="number"
                className="w-full border rounded p-2 mt-1"
                value={costos[key]}
                onChange={(e) =>
                  setCostos({ ...costos, [key]: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
            <div>
              <label className="font-medium">{label} - Cantidad</label>
              <input
                type="number"
                className="w-full border rounded p-2 mt-1"
                value={cantidades[key]}
                onChange={(e) =>
                  setCantidades({ ...cantidades, [key]: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
          </div>
        ))}
        <div className="text-right text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button
          onClick={guardar}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar cotización
        </button>
      </section>
      <section className="bg-gray-50 p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Historial</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No hay cotizaciones aún.</p>
        ) : (
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
            {history.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <div className="font-bold">{item.cliente || '(Sin cliente)'}</div>
                <div className="text-sm text-gray-600">{item.fecha}</div>
                <div className="text-sm">Total: ${item.total.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
