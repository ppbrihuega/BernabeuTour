// Este es código del lado del servidor. No será visible para los usuarios.

export default async function handler(req, res) {
  // 1. Comprobar que el método de la petición es POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // 2. Obtener la clave de API secreta de las variables de entorno (NUNCA la escribas directamente aquí)
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'La clave de API no está configurada en el servidor' });
  }

  // 3. Obtener los datos que envió tu frontend (ej: el prompt para Gemini)
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'El prompt es obligatorio' });
  }
  
  const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    // 4. Llamar de forma segura a la API de Google desde el servidor
    const googleResponse = await fetch(googleApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text();
      console.error("Error de la API de Google:", errorText);
      throw new Error(`La API de Google respondió con el estado: ${googleResponse.status}`);
    }

    const data = await googleResponse.json();
    
    // 5. Enviar el resultado de vuelta a tu frontend
    res.status(200).json(data);

  } catch (error) {
    console.error('Error en la función sin servidor:', error);
    res.status(500).json({ error: 'Fallo al obtener datos de la API de Google' });
  }
}
