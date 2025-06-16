// --- DATOS PARA PERSONALIZACIÓN ---
const personalizationData = {
    saludos: {
        Polaca: "Dzień dobry! Jak miło was widzieć! Wsiadajcie do Tuk-Tuka, zaczynamy wspaniałą wycieczkę po Madrycie!",
        Rusa: "Здравствуйте! Очень рад вас видеть! Садитесь в Тук-Тук, мы начинаем увлекательную прогулку по Мадриду!",
        Japonesa: "こんにちは！マドリードへようこそ！トゥクトゥクに乗って、素晴らしいツアーを始めましょう！",
        Neerlandesa: "Hallo! Wat leuk jullie hier te hebben! Stap in de Tuk-Tuk, we beginnen aan een geweldige tour door Madrid!",
        Mexicana: "¡Órale, qué padre que andan por acá! Súbanse al Tuk-Tuk, ¡vamos a darle una vuelta chida por Madrid!",
        Argentina: "¡Che, qué bueno tenerlos! ¿Todo en orden? ¡Mandale mecha que arrancamos el Tuk-Tuk por Madrí!",
        Colombiana: "¡Quiubo, parceros! ¿Todo bien? ¡Acomódense en el Tuk-Tuk que nos vamos de ruta bacana por Madrid!",
        Española: "¡Muy buenas! ¿Qué tal todo? ¡Pues al lío, que este Tuk-Tuk no espera! ¡Vamos a descubrir Madrid!",
        Venezolana: "¡Epa, panas! ¿Cómo está la vaina? ¡Súbanse al Tuk-Tuk que nos vamos a recorrer Madrid bien chévere!",
        default: "¡Hola! Bienvenidos a Madrid desde mi Tuk-Tuk. Soy su guía particular y estoy listo para empezar."
    },
    despedidas: {
        Polaca: "Do zobaczenia! Mam nadzieję, że wycieczka się podobała. Bawcie się dobrze w Madrycie!",
        Rusa: "До свидания! Надеюсь, вам понравился тур. Наслаждайтесь Мадридом!",
        Japonesa: "ありがとうございました！マドリードでの滞在を楽しんでください！",
        Neerlandesa: "Tot ziens! Ik hoop dat jullie van de tour genoten hebben. Veel plezier nog in Madrid!",
        Mexicana: "¡Ahí nos vidrios! Espero que les haya latido el tour. ¡A echar mucho ambiente!",
        Argentina: "¡Bueno, un gustazo! Espero que les haya copado Madrid. ¡A disfrutar!",
        Colombiana: "¡Listo, todo bien! Espero que la hayan pasado una chimba. ¡Nos pillamos!",
        Española: "¡Bueno, fenomenal! Espero que les haya molado el garbeo. ¡Ahora a tomarse unas cañitas!",
        Venezolana: "¡Bueno, mis panas, se acabó el recorrido! ¡Ahora a echarse unas buenas arepas!",
        default: "¡Y hasta aquí nuestro paseo! Espero que les haya encantado. ¡Disfruten mucho de Madrid!"
    },
    viajeros: {
        general: "¡Qué bien que estén aquí! He preparado un recorrido completo y ameno con los datos más interesantes y las mejores anécdotas de la ciudad para que todos disfruten.",
        familia: "Veo que vienen en familia, ¡genial! Adaptaré el recorrido para que sea entretenido para todos, con las anécdotas más curiosas y los lugares perfectos para una foto de familia inolvidable.",
        pareja: "¡Perfecto, un viaje romántico! Haré de este un paseo especial, destacando los rincones con más encanto, las vistas más espectaculares y quizás algún secreto para que su escapada en Madrid sea mágica.",
        individual: "¡Un explorador en solitario! Me encanta. Tendremos la libertad de profundizar en lo que más te llame la atención. Prepárate para descubrir Madrid a tu propio ritmo, con datos que no todos conocen.",
        negocios: "Entendido, una escapada de la rutina de negocios. Me aseguraré de que este tour sea eficiente, interesante y relajante. Les mostraré los puntos clave de la ciudad de una forma amena para que aprovechen su tiempo al máximo."
    }
};

// --- PLANTILLA DEL RECORRIDO CON HISTORIA AMPLIADA ---
const tourScriptData = [
    { id: "neptuno", icon: "fas fa-water", title: {es: "Fuente de Neptuno"}, text_base: {es: "Empezamos nuestro recorrido en la Plaza de Neptuno, un lugar lleno de arte e historia."}, historia_rapida: {es: "Esta magnífica fuente fue diseñada por el arquitecto ilustrado Ventura Rodríguez en 1782. Forma parte del gran proyecto del 'Salón del Prado' del rey Carlos III, quien quería dotar a Madrid de un eje monumental y científico al estilo de las grandes capitales europeas. Neptuno, dios del mar, simboliza el poderío naval español de la época."}, anecdota: {es: "Más allá del fútbol, la plaza ha sido testigo de innumerables desfiles y eventos históricos. Durante la Guerra Civil, tanto esta fuente como la de Cibeles fueron protegidas con sacos de arena y construcciones de ladrillo para evitar que los bombardeos las destruyeran, un esfuerzo de los madrileños por salvar su patrimonio."}, curiosidad: {es: "Originalmente, la fuente no miraba hacia el centro de la plaza como ahora, sino que estaba de lado, mirando hacia la Carrera de San Jerónimo. Fue en 1898 cuando se decidió girarla para que presidiera la plaza de frente."} },
    { id: "cibeles", icon: "fas fa-goddess", title: {es: "Fuente de Cibeles"}, text_base: {es: "Nos dirigimos ahora a la emblemática Plaza de Cibeles, presidida por la diosa de la tierra y la fecundidad. Fíjense en los cuatro edificios monumentales que la custodian: el Palacio de Buenavista (Cuartel General del Ejército), el Banco de España, el Palacio de Linares (Casa de América) y el imponente Palacio de Comunicaciones, hoy Ayuntamiento de Madrid."}, historia_rapida: {es: "Fue la primera fuente monumental del eje Prado-Recoletos, encargada por Carlos III en 1777 y también diseñada por Ventura Rodríguez. La diosa, los leones y la carroza fueron esculpidos por distintos artistas, convirtiéndola en una obra colectiva. Simboliza la tierra y la fertilidad, un poder generador para la capital."}, anecdota: {es: "La tradición de las celebraciones del Real Madrid empezó de forma espontánea en los años 80, cuando el jugador Emilio Butragueño y la 'Quinta del Buitre' ganaron una liga y los aficionados se congregaron aquí. Antes de eso, era el lugar de celebración de todos los equipos madrileños, incluido el Atlético."}, curiosidad: {es: "¿Sabías que bajo la fuente se encuentra una cámara acorazada del Banco de España? Se dice que, en caso de intento de robo, un sistema de seguridad inundaría el foso que rodea las reservas de oro con el agua de la propia fuente. ¡Más seguro que Fort Knox!"} },
    { id: "colon", icon: "fas fa-flag-usa", title: {es: "Plaza de Colón"}, text_base: {es: "Continuamos por el Paseo de Recoletos hasta la Plaza de Colón, un homenaje al descubrimiento de América. La plaza está dominada por el monumento neogótico a Colón y una bandera de España de dimensiones espectaculares."}, historia_rapida: {es: "El monumento a Cristóbal Colón que preside la plaza se inauguró en 1885 para conmemorar el matrimonio del rey Alfonso XII. Su estilo neogótico, con influencias isabelinas, fue obra de Arturo Mélida. Los relieves de la base narran escenas de la vida del descubridor."}, anecdota: {es: "Bajo la plaza, y extendiéndose por los Jardines del Descubrimiento, se encuentra el Centro Cultural de la Villa Fernán Gómez, un gran teatro y espacio de exposiciones subterráneo que mucha gente no sabe que está ahí. ¡Madrid está llena de sorpresas bajo tierra!"}, curiosidad: {es: "La enorme bandera de España que ondea en la plaza es una de las más grandes del mundo, mide 294 metros cuadrados (21x14 metros) y el mástil tiene 50 metros de altura. Su instalación en 2001 generó un gran debate ciudadano."} },
    { id: "azca", icon: "fas fa-building-columns", title: {es: "Corazón Financiero: AZCA"}, text_base: {es: "Nos adentramos ahora en el distrito financiero. Primero pasaremos por AZCA, cuyo nombre completo es Asociación Mixta de Compensación de la Manzana A de la Zona Comercial de la Avenida del Generalísimo. Un laberinto de oficinas, comercios y rascacielos."}, historia_rapida: {es: "Proyectado en los años 60 e inspirado en el Rockefeller Center de Nueva York, AZCA fue el intento de crear un moderno centro de negocios separado del centro histórico. Su diseño, con distintos niveles y pasarelas, nunca se completó del todo, lo que le da su particular aspecto laberíntico."}, anecdota: {es: "La Torre Windsor, uno de los primeros rascacielos de Madrid y emblema de AZCA, fue devorada por un espectacular incendio en 2005. Su esqueleto calcinado permaneció visible durante meses, un recuerdo fantasmagórico en el corazón financiero de la ciudad. Hoy, en su lugar, se levanta la Torre Titania."}, curiosidad: {es: "La Torre Picasso, diseñada por Minoru Yamasaki (el mismo arquitecto de las Torres Gemelas de Nueva York), fue el edificio más alto de España durante 15 años, hasta la llegada de las Cuatro Torres."} },
    { id: "bernabeu", icon: "fas fa-futbol", title: {es: "Estadio Santiago Bernabéu"}, text_base: {es: "Y para los aficionados al fútbol, a nuestra vista, el Estadio Santiago Bernabéu, hogar del Real Madrid. Una auténtica leyenda del deporte, ahora con una piel de acero futurista."}, historia_rapida: {es: "Inaugurado en 1947 como 'Nuevo Estadio de Chamartín', no adoptó el nombre de su visionario presidente, Santiago Bernabéu, hasta 1955. Ha sido sede de la final de la Copa del Mundo de 1982, de la Eurocopa de 1964 y de cuatro finales de la Copa de Europa, más que ningún otro estadio."}, anecdota: {es: "Durante su construcción en los años 40, en plena posguerra y con escasez de materiales, se encontraron restos de un elefante prehistórico. ¡Así que se puede decir que el Madrid tiene una afición 'de peso' desde sus cimientos!"}, curiosidad: {es: "Tras su última y espectacular remodelación, el césped del Bernabéu es retráctil. Se guarda en un complejo sistema de bandejas en un 'invernadero' subterráneo de 30 metros de profundidad, lo que permite celebrar conciertos y otros eventos masivos sin dañar el terreno de juego."} },
    { id: "delfines", icon: "fas fa-fish", title: {es: "Plaza de los Delfines"}, text_base: {es: "Continuamos por la Castellana hasta la Plaza de la República Argentina, más conocida por los madrileños como la Plaza de los Delfines, por su fuente central."}, historia_rapida: {es: "Esta zona se urbanizó en los años 30, pero la fuente central que le da su nombre popular es de 1960. La plaza es un importante nudo de comunicaciones y está rodeada por el complejo gubernamental de Nuevos Ministerios, un imponente ejemplo de la arquitectura racionalista de la posguerra."}, anecdota: {es: "El nombre popular de 'los Delfines' es tan fuerte que durante décadas muchos taxistas veteranos ni siquiera conocían su nombre real, Plaza de la República Argentina. Si un cliente pedía ir al nombre oficial, ¡a veces no sabían dónde estaba!"}, curiosidad: {es: "Aunque se le conoce como 'Plaza de los Delfines', los animales esculpidos en la fuente por el famoso escultor Mariano Benlliure son en realidad una mezcla de delfines y criaturas marinas mitológicas, dándole un toque de fantasía a este cruce de caminos."} },
    { id: "serrano", icon: "fas fa-gem", title: {es: "Calle Serrano ('Milla de Oro')"}, text_base: {es: "Descendemos por la Calle Serrano, la 'Milla de Oro' de Madrid. Es una de las calles más elegantes y exclusivas de la ciudad, famosa por sus tiendas de lujo, joyerías y boutiques de diseñadores internacionales."}, historia_rapida: {es: "La calle debe su nombre al General Serrano, figura política clave del siglo XIX. Se convirtió en el eje del nuevo y prestigioso Barrio de Salamanca, proyectado por el Marqués de Salamanca, donde la aristocracia y la alta burguesía construyeron sus palacetes para alejarse del bullicio del centro."}, anecdota: {es: "Durante la posguerra, tener una dirección en la Calle Serrano era el máximo símbolo de estatus social. Las familias importantes 'recibían' en sus casas para mostrar su posición y organizar eventos sociales. Era el epicentro de la vida social de la élite madrileña."}, curiosidad: {es: "Antes de ser la calle del lujo, Serrano fue una de las primeras calles de Madrid en tener aceras, lo que en el siglo XIX era una modernidad absoluta. ¡Imaginen poder caminar sin mancharse los zapatos de barro!"} },
    { id: "alcala", icon: "fas fa-archway", title: {es: "Puerta de Alcalá"}, text_base: {es: "Y llegamos a uno de los monumentos más icónicos y queridos de Madrid, ¡la majestuosa Puerta de Alcalá! Un verdadero símbolo de la ciudad, 'ahí está, viendo pasar el tiempo'."}, historia_rapida: {es: "Fue la primera puerta de entrada monumental construida en Europa tras la caída del Imperio Romano, inaugurada en 1778 por orden de Carlos III, el 'rey alcalde'. Es anterior incluso al Arco del Triunfo de París o la Puerta de Brandeburgo en Berlín, y representa la entrada a una capital moderna y reformada."}, anecdota: {es: "Fíjense bien y verán impactos de proyectiles de diferentes época. Los más visibles son de los Cien Mil Hijos de San Luis en 1823. ¡Este monumento ha sobrevivido a batallas, revoluciones y al tráfico infernal de Madrid!"}, curiosidad: {es: "Tiene dos fachadas diferentes porque el rey Carlos III no se decidía entre dos diseños de su arquitecto, Francesco Sabatini. Para complacerle y evitar problemas, el arquitecto construyó ambos: la fachada que mira a la ciudad es más barroca y triunfal, mientras que la que miraba al exterior era más sobria y de estilo neoclásico."} },
    { id: "retiro", icon: "fas fa-leaf", title: {es: "Parque del Retiro"}, text_base: {es: "Ahora bordeamos el maravilloso Parque del Retiro. Este es el gran pulmón verde de Madrid, declarado Patrimonio de la Humanidad por la UNESCO junto al Paseo del Prado."}, historia_rapida: {es: "Nació como un jardín para el uso y disfrute exclusivo de la familia real en el siglo XVII, bajo el reinado de Felipe IV. No se abrió al público de forma general hasta 1868, tras la revolución de 'La Gloriosa', convirtiéndose desde entonces en el parque del pueblo de Madrid."}, anecdota: {es: "Dentro del parque se encontraba la 'Casa de Fieras', el antiguo zoológico de Madrid, inaugurado en el siglo XVIII. Todavía se pueden ver algunas de las antiguas jaulas y fosos cerca de la entrada de la Puerta de Sáinz de Baranda."}, curiosidad: {es: "El gran estanque no siempre fue para pasear en barcas de recreo. En el siglo XVII se usaba para representar espectaculares batallas navales (naumaquias) con barcos a escala y miles de figurantes para entretener a la corte. ¡Imaginen los fuegos artificiales!"} },
    { id: "bolsa", icon: "fas fa-chart-line", title: {es: "Edificio de la Bolsa"}, text_base: {es: "Antes de finalizar, observamos el imponente Edificio de la Bolsa de Madrid, en la Plaza de la Lealtad."}, historia_rapida: {es: "Inaugurado en 1893 por la Reina Regente María Cristina, es el centro de la actividad bursátil española desde entonces. Su arquitecto, Enrique María Repullés y Vargas, lo diseñó en un elegante estilo neoclásico, buscando transmitir la solidez y confianza de la institución."}, anecdota: {es: "El salón de contratación, conocido como el 'parquet', tiene una acústica tan perfecta que se dice que un susurro en una esquina se puede oír claramente en la opuesta. ¡Ideal para los secretos financieros de la época, cuando las órdenes se daban a viva voz!"}, curiosidad: {es: "El edificio se construyó sobre el solar de un antiguo convento. Durante las obras, aparecieron restos de un cementerio, lo que generó todo tipo de leyendas sobre fantasmas de monjes que vagaban por los pasillos de la Bolsa."} },
    { id: "hoteles", icon: "fas fa-hotel", title: {es: "Hoteles Ritz y Palace"}, text_base: {es: "Y para terminar, mientras regresamos hacia Neptuno, destacamos dos hoteles legendarios: el Hotel Ritz (hoy Mandarin Oriental Ritz) y el Hotel Palace (The Westin Palace)."}, historia_rapida: {es: "Fueron construidos a principios del siglo XX por expreso deseo del rey Alfonso XIII, quien quería dotar a Madrid de hoteles de gran lujo para acoger a la realeza y dignatarios que asistieron a su boda con Victoria Eugenia de Battenberg. El Ritz era el más exclusivo y el Palace, el más grande y moderno."}, anecdota: {es: "El Hotel Palace fue un famoso nido de espías durante la Primera y Segunda Guerra Mundial. La mismísima Mata Hari fue una de sus huéspedes más célebres, y fue aquí donde fue detenida. También era el lugar favorito de Ernest Hemingway para escribir y beber sus cócteles."}, curiosidad: {es: "El Palace fue uno de los primeros edificios de Europa construido íntegramente con hormigón armado, una técnica revolucionaria para la época. Y su famoso bar, bajo la cúpula, fue el primer 'bar americano' de España, popularizando los cócteles y una forma más informal de socializar."} }
];

// --- LÓGICA DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guide-form');
    const formContainer = document.getElementById('form-container');
    const guideContainer = document.getElementById('guide-container');
    const guideContent = document.getElementById('guide-content');
    const resetButton = document.getElementById('reset-button');
    const speechSupportMsg = document.getElementById('speech-support-msg');
    const translationControls = document.getElementById('translation-controls');

    let contentStore = {};
    let currentLanguage = 'es';
    let wakeLock = null;

    // --- Wake Lock (Mantener pantalla encendida) ---
    const requestWakeLock = async () => {
        if ('wakeLock' in navigator) {
            try {
                wakeLock = await navigator.wakeLock.request('screen');
                console.log('Wake Lock está activo.');
                wakeLock.addEventListener('release', () => {
                    console.log('Wake Lock fue liberado.');
                });
            } catch (err) {
                console.error(`${err.name}, ${err.message}`);
            }
        } else {
            console.warn('La API de Wake Lock no es soportada en este navegador.');
        }
    };

    const releaseWakeLock = () => {
        if (wakeLock !== null) {
            wakeLock.release();
            wakeLock = null;
        }
    };

    /**
     * ROBUST AUDIO PLAYER MODULE - CORREGIDO
     */
    const AudioPlayer = {
        synth: window.speechSynthesis,
        voices: [],
        utteranceQueue: [],
        currentIndex: 0,
        isPlaying: false,
        isPaused: false,

        init() {
            if (!this.synth) {
                speechSupportMsg.classList.remove('hidden');
                this.updateUI();
                return;
            }
            // Cargar las voces disponibles
            this.loadVoices();
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = this.loadVoices.bind(this);
            }
        },
        
        loadVoices() {
            this.voices = this.synth.getVoices();
        },

        play(startIndex = this.currentIndex) {
            requestWakeLock(); // Solicitar mantener la pantalla encendida
            
            if (this.isPaused) {
                this.synth.resume();
            } else {
                this.stop(false); 
                this.currentIndex = startIndex;
                if (this.currentIndex >= this.utteranceQueue.length) {
                    this.currentIndex = 0;
                }
                this.speakCurrentUtterance();
            }
            this.isPlaying = true;
            this.isPaused = false;
            this.updateUI();
        },

        pause() {
            if (this.synth.speaking) {
                this.synth.pause();
                this.isPaused = true;
                releaseWakeLock(); // Liberar el bloqueo al pausar
            }
            this.updateUI();
        },

        stop(resetIndex = true) {
            this.synth.cancel();
            this.isPlaying = false;
            this.isPaused = false;
            if (resetIndex) {
                this.currentIndex = 0;
            }
            removeHighlighting();
            releaseWakeLock(); // Liberar el bloqueo al detener
            this.updateUI();
        },
        
        playSegment(index) {
            this.play(index);
        },

        speakCurrentUtterance() {
            if (this.currentIndex >= this.utteranceQueue.length) {
                this.stop(true);
                return;
            }
            
            const utteranceData = this.utteranceQueue[this.currentIndex];
            const utterance = new SpeechSynthesisUtterance(utteranceData.text);
            
            utterance.onstart = () => {
                this.isPlaying = true;
                this.isPaused = false;
                highlightSegment(document.getElementById(utteranceData.segmentId));
                this.updateUI();
            };

            utterance.onend = () => {
                removeHighlighting();
                if (this.isPlaying && !this.isPaused) {
                    // Si no es el último elemento, esperar 2 segundos antes de continuar
                    if (this.currentIndex < this.utteranceQueue.length - 1) {
                        setTimeout(() => {
                            this.currentIndex++;
                            this.speakCurrentUtterance();
                        }, 2000); // 2 segundos de pausa
                    } else {
                        // Si es el último, simplemente detener
                        this.stop(true);
                    }
                }
            };

            utterance.onerror = (e) => {
                console.error("SpeechSynthesis Error", e);
                this.stop();
            };
            
            // Mapeo de códigos de idioma para la API de voz
            const langCode = { en: 'en-US', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', it: 'it-IT', pt: 'pt-PT', zh: 'zh-CN', pl: 'pl-PL', ru: 'ru-RU', ja: 'ja-JP', nl: 'nl-NL' }[currentLanguage] || 'es-ES';
            utterance.lang = langCode;
            
            // Intentar encontrar una voz que coincida exactamente
            let voice = this.voices.find(v => v.lang === langCode);
            // Si no se encuentra, buscar una que empiece con el código de idioma (ej. 'en-GB' para 'en')
            if (!voice) {
                voice = this.voices.find(v => v.lang.startsWith(currentLanguage));
            }
            if (voice) {
                utterance.voice = voice;
            }

            this.synth.speak(utterance);
        },
        
        setQueue(queue) {
            this.stop();
            this.utteranceQueue = queue;
            this.updateUI();
        },

        updateUI() {
            const canPlay = this.utteranceQueue.length > 0;
            document.getElementById('play-button').disabled = (this.isPlaying && !this.isPaused) || !canPlay;
            document.getElementById('pause-button').disabled = !this.isPlaying || this.isPaused || !canPlay;
            document.getElementById('stop-button').disabled = !this.isPlaying;
        }
    };

    AudioPlayer.init();
    
    // --- EVENT LISTENERS ---
    
    document.getElementById('play-button').addEventListener('click', () => AudioPlayer.play());
    document.getElementById('pause-button').addEventListener('click', () => AudioPlayer.pause());
    document.getElementById('stop-button').addEventListener('click', () => AudioPlayer.stop(true));
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = `<span class="spinner"></span> Generando...`;
        
        await generateAndRenderGuide('es');
        translationControls.classList.remove('hidden');
        translationControls.querySelectorAll('.btn-lang').forEach(b => {
            b.classList.remove('active');
            if (b.dataset.lang === 'es') b.classList.add('active');
        });

        submitButton.disabled = false;
        submitButton.innerHTML = `<i class="fas fa-rocket"></i> ¡Generar Tour para Cliente!`;
    });
    
    resetButton.addEventListener('click', function() {
        AudioPlayer.stop(true);
        guideContainer.classList.add('hidden');
        translationControls.classList.add('hidden');
        formContainer.style.display = 'block';
        form.reset();
        guideContent.innerHTML = '';
        contentStore = {};
    });

    translationControls.addEventListener('click', async function(event) {
        const button = event.target.closest('.btn-lang');
        if (!button || button.disabled || button.classList.contains('active')) return;
        const targetLang = button.dataset.lang;

        AudioPlayer.stop(true);
        const originalText = button.innerHTML;
        button.innerHTML = `<span class="spinner !border-l-blue-500 !border-t-transparent !border-r-transparent !border-b-transparent"></span>`;
        document.querySelectorAll('.btn-lang').forEach(b => b.disabled = true);

        await translateContentStore(targetLang);
        renderGuide(targetLang);
        buildUtteranceQueue(targetLang);
        AudioPlayer.setQueue(utteranceQueue);

        this.querySelector('.btn-lang.active').classList.remove('active');
        button.classList.add('active');
        button.innerHTML = originalText;
        document.querySelectorAll('.btn-lang').forEach(b => b.disabled = false);
    });
    
    // --- UI & CONTENT FUNCTIONS ---

    function highlightSegment(segmentElement) {
        removeHighlighting();
        if (segmentElement) {
             segmentElement.classList.add('speaking-segment');
             segmentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function removeHighlighting() {
        const highlighted = guideContent.querySelector('.speaking-segment');
        if (highlighted) highlighted.classList.remove('speaking-segment');
    }
    
    async function generateAndRenderGuide(lang) {
        const travelerType = document.getElementById('traveler-type').value;
        const nationality = document.getElementById('nationality').value;
        const travelerProfileText = document.querySelector('#traveler-type option:checked').textContent;

        const geminiPromises = tourScriptData.map(segment => callGeminiAPI(segment.title.es, travelerProfileText));
        const geminiFacts = await Promise.all(geminiPromises);

        contentStore.segments = JSON.parse(JSON.stringify(tourScriptData)); 
        contentStore.segments.forEach((segment, index) => {
            // Limpiar el texto de Gemini por si acaso incluye asteriscos de markdown
            const cleanFact = geminiFacts[index].replace(/\*/g, '');
            segment.geminiFact = { es: cleanFact };
        });

        contentStore.intro = {
            saludo: { es: personalizationData.saludos[nationality] || personalizationData.saludos.default },
            perfil: { es: personalizationData.viajeros[travelerType] }
        };
        contentStore.outro = {
            despedida: { es: personalizationData.despedidas[nationality] || personalizationData.despedidas.default }
        };

        renderGuide(lang);
        buildUtteranceQueue(lang);
        AudioPlayer.setQueue(utteranceQueue);
        
        formContainer.style.display = 'none';
        guideContainer.classList.remove('hidden');
        guideContainer.classList.add('fade-in');
    }

    function renderGuide(lang) {
        currentLanguage = lang;
        let guideHTML = `<div id="segment-intro" class="tour-segment">`;
        guideHTML += `<h3 class="tour-segment-title"><span class="title-text"><i class="fas fa-comment-dots"></i> ${contentStore.intro.saludo[lang] || contentStore.intro.saludo.es}</span> <button class="btn-play-segment" data-index="0"><i class="fas fa-play-circle"></i></button></h3>`;
        guideHTML += `<span class="personalized-comment traveler-type-comment">${contentStore.intro.perfil[lang] || contentStore.intro.perfil.es}</span>`;
        guideHTML += `</div><hr>`;

        contentStore.segments.forEach((segment, index) => {
            const segmentId = `segment-${segment.id}`;
            guideHTML += `<div id="${segmentId}" class="tour-segment">`;
            guideHTML += `<h3 class="tour-segment-title"><span class="title-text"><i class="${segment.icon}"></i> ${segment.title[lang] || segment.title.es}</span> <button class="btn-play-segment" data-index="${index + 1}"><i class="fas fa-play-circle"></i></button></h3>`;
            
            guideHTML += `<p class="base-text">${segment.text_base[lang] || segment.text_base.es}</p>`;
            guideHTML += `<div class="segment-detail"><strong>${contentStore.labels?.historia[lang] || 'Historia Rápida'}:</strong> ${segment.historia_rapida[lang] || segment.historia_rapida.es}</div>`;
            guideHTML += `<div class="segment-detail"><strong>${contentStore.labels?.anecdota[lang] || 'Anécdota'}:</strong> ${segment.anecdota[lang] || segment.anecdota.es}</div>`;
            guideHTML += `<div class="segment-detail"><strong>${contentStore.labels?.curiosidad[lang] || 'Curiosidad'}:</strong> ${segment.curiosidad[lang] || segment.curiosidad.es}</div>`;
            guideHTML += `<div class="gemini-fact-container"><strong><i class="fas fa-brain"></i> ${contentStore.labels?.ia[lang] || 'Dato de la IA'}:</strong> ${segment.geminiFact[lang] || segment.geminiFact.es}</div>`;
            guideHTML += `</div>`;
            if (contentStore.segments.indexOf(segment) < contentStore.segments.length - 1) guideHTML += `<hr>`;
        });

        guideHTML += `<hr><div id="segment-outro" class="tour-segment">`;
        guideHTML += `<h3 class="tour-segment-title"><span><i class="fas fa-flag-checkered"></i> ${contentStore.labels?.fin[lang] || 'Fin del Recorrido'}</span> <button class="btn-play-segment" data-index="${contentStore.segments.length + 1}"><i class="fas fa-play-circle"></i></button></h3>`;
        guideHTML += `<p class="base-text"><strong>${contentStore.outro.despedida[lang] || contentStore.outro.despedida.es}</strong></p>`;
        guideHTML += `</div>`;
        guideContent.innerHTML = guideHTML;

         guideContent.querySelectorAll('.btn-play-segment').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index, 10);
                AudioPlayer.playSegment(index);
            });
        });
    }

    function buildUtteranceQueue(lang) {
        const queue = [];
        if (!contentStore.intro) return;

        queue.push({ 
            text: `${contentStore.intro.saludo[lang] || contentStore.intro.saludo.es}. ${contentStore.intro.perfil[lang] || contentStore.intro.perfil.es}`, 
            segmentId: `segment-intro` 
        });
        
        contentStore.segments.forEach(segment => {
            let textToSpeak = [
                segment.title[lang] || segment.title.es,
                segment.text_base[lang] || segment.text_base.es,
                `${contentStore.labels?.historia[lang] || 'Historia Rápida'}: ${segment.historia_rapida[lang] || segment.historia_rapida.es}`,
                `${contentStore.labels?.anecdota[lang] || 'Anécdota'}: ${segment.anecdota[lang] || segment.anecdota.es}`,
                `${contentStore.labels?.curiosidad[lang] || 'Curiosidad'}: ${segment.curiosidad[lang] || segment.curiosidad.es}`,
                `${contentStore.labels?.ia[lang] || 'Dato de la IA'}: ${segment.geminiFact[lang] || segment.geminiFact.es}`
            ].join('. ');
            queue.push({ text: textToSpeak, segmentId: `segment-${segment.id}` });
        });

        queue.push({ 
            text: `${contentStore.outro.despedida[lang] || contentStore.outro.despedida.es}`, 
            segmentId: `segment-outro` 
        });
        utteranceQueue = queue;
    }

    async function translateContentStore(targetLang) {
        if (contentStore.segments[0].title[targetLang]) return;

        const langName = {en: "English", fr: "French", de: "German", it: "Italian", pt: "Portuguese", zh: "Chinese", pl: "Polish", ru: "Russian", ja: "Japanese", nl: "Dutch"}[targetLang];
        const toTranslate = [];

        const labels = { historia: "Historia Rápida", anecdota: "Anécdota", curiosidad: "Curiosidad", ia: "Dato de la IA", fin: "Fin del Recorrido"};
        for(const key in labels) toTranslate.push(labels[key]);

        for (const key in contentStore.intro) toTranslate.push(contentStore.intro[key].es);
        for (const key in contentStore.outro) toTranslate.push(contentStore.outro[key].es);
        contentStore.segments.forEach(s => {
            Object.values(s).forEach(val => { if(val?.es) toTranslate.push(val.es); });
        });

        const translatedTexts = await callGeminiForTranslation(toTranslate, langName);
        
        let i = 0;
        if(!contentStore.labels) contentStore.labels = { historia: {}, anecdota: {}, curiosidad: {}, ia: {}, fin: {} };
        for (const key in contentStore.labels) contentStore.labels[key][targetLang] = translatedTexts[i++];
        
        for (const key in contentStore.intro) contentStore.intro[key][targetLang] = translatedTexts[i++];
        for (const key in contentStore.outro) contentStore.outro[key][targetLang] = translatedTexts[i++];
        contentStore.segments.forEach(s => {
            Object.values(s).forEach(val => { if(val?.es) val[targetLang] = translatedTexts[i++]; });
        });
    }

    async function callGeminiForTranslation(texts, langName) {
        const prompt = `Translate each of the following Spanish texts to ${langName}. Return the result as a JSON array of strings, with each string being a translation. Maintain the order. Texts:\n${JSON.stringify(texts)}`;
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });
            
            if (!response.ok) {
                throw new Error(`API translation error: ${response.statusText}`);
            }
            
            const result = await response.json();
            const jsonString = result.candidates[0].content.parts[0].text.replace(/^```json\n/, '').replace(/\n```$/, '');
            return JSON.parse(jsonString);

        } catch (e) {
            console.error("Translation failed", e);
            return texts.map(t => `[Error de traducción para: ${t}]`);
        }
    }
    
    async function callGeminiAPI(stopTitle, travelerProfile) {
        const prompt = `Eres un guía turístico muy carismático para un tour en Tuk-Tuk por Madrid. Genera un dato curioso o anécdota poco conocida sobre '${stopTitle}' en Madrid. Adáptalo para: ${travelerProfile}. Sé breve (2-3 frases), amigable y sorprendente. No uses asteriscos ni markdown.`;
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            
            const result = await response.json();
            if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                return result.candidates[0].content.parts[0].text;
            }
        } catch (error) {
            console.error("Error llamando al backend:", error);
        }
        return getMockFact(stopTitle);
    }

    function getMockFact(stopTitle) {
        const mockFacts = {
            "Fuente de Neptuno": "Aunque es el ídolo del Atleti, Neptuno fue propuesto originalmente para presidir la plaza... ¡de Cibeles!",
            "Fuente de Cibeles": "Los leones del carro de Cibeles son en realidad los personajes mitológicos Hipómenes y Atalanta, castigados a no poder mirarse nunca.",
            "Plaza de Colón": "La estatua de Colón no señala a América, como muchos creen. En realidad, su dedo apunta hacia el Este.",
            "Corazón Financiero: AZCA": "Este laberinto de hormigón se inspiró en el Rockefeller Center de Nueva York.",
            "Estadio Santiago Bernabéu": "Durante su construcción en los años 40, se encontraron restos de un elefante prehistórico.",
            "Plaza de los Delfines": "El nombre popular de 'los Delfines' es tan fuerte que muchos taxistas mayores ni conocen su nombre real, Plaza de la República Argentina.",
            "Calle Serrano ('Milla de Oro')": "Antes de ser la calle del lujo, Serrano fue de las primeras de Madrid en tener aceras.",
            "Puerta de Alcalá": "Tiene cinco arcos, pero solo los tres centrales eran para la realeza; los dos de los lados eran para el pueblo y el ganado.",
            "Parque del Retiro": "El Palacio de Cristal no fue diseñado para arte, sino como un invernadero gigante para plantas exóticas de Filipinas en 1887.",
            "Edificio de la Bolsa": "Se dice que el 'parquet', el salón de contratación, tiene una acústica tan perfecta que un susurro en una esquina se oye en la opuesta.",
            "Hoteles Ritz y Palace": "El bar del Palace fue el primer 'bar americano' de España, popularizando los cócteles."
        };
        return mockFacts[stopTitle] || "Aquí ha pasado de todo, ¡si estas paredes hablaran!";
    }
});
