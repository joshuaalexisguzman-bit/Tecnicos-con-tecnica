(function(){
    // banco de preguntas por materia
    const bank = {
        // 1er semestre: Álgebra (50 preguntas)
        algebra: [
            {q: '¿Cuánto vale x en: 2x + 4 = 10?', a: ['3','2','4','-3'], correct: 0},
            {q: 'Resuelve: 5x − 15 = 0', a: ['3','0','-3','5'], correct: 0},
            {q: 'Resuelve: 3x = 27', a: ['9','3','6','27'], correct: 0},
            {q: 'Resuelve: 10 − x = 4', a: ['6','-6','4','14'], correct: 0},
            {q: 'Resuelve: 4x + 2 = 14', a: ['3','2','4','6'], correct: 0},
            {q: 'Resuelve: 6x − 8 = 10', a: ['3','2','-3','4'], correct: 0},
            {q: 'Resuelve: 9x = 81', a: ['9','8','81','3'], correct: 0},
            {q: 'Resuelve: 2(x + 5) = 20', a: ['5','10','15','20'], correct: 0},
            {q: 'Resuelve: x/3 = 7', a: ['21','7','3','14'], correct: 0},
            {q: 'Resuelve: 5(x − 2) = 15', a: ['5','3','-5','10'], correct: 0},
            {q: 'Resuelve: 3x + 4 = 2x + 10', a: ['6','-6','2','4'], correct: 0},
            {q: 'Resuelve: 7x − 3 = 4x + 12', a: ['5','-5','3','4'], correct: 0},
            {q: 'Resuelve: 6 − 2x = x + 9', a: ['-1','1','3','0'], correct: 0},
            {q: 'Resuelve: 4(x + 1) = 3x + 10', a: ['6','5','4','-6'], correct: 0},
            {q: 'Resuelve: 8x − 5 = 3(2x + 1)', a: ['4','3','2','-4'], correct: 0},
            {q: 'Resuelve: 2x + 3 = 3x − 4', a: ['7','-7','1','-1'], correct: 0},
            {q: 'Resuelve: 10x + 2 = 8x + 12', a: ['5','2','-5','10'], correct: 0},
            {q: 'Resuelve: 9 − x = 2x + 3', a: ['2','-2','3','4'], correct: 0},
            {q: 'Resuelve: 12 − 4x = 2x', a: ['2','-2','4','6'], correct: 0},
            {q: 'Resuelve: 5 − (x − 3) = 10', a: ['-2','2','5','-5'], correct: 0},
            {q: '(x + 5)² = ?', a: ['x² + 10x + 25','x² + 5x + 25','x² + 25','x² + 10x'], correct: 0},
            {q: '(x − 3)(x − 3) =', a: ['x² − 6x + 9','x² − 3x + 9','x² − 9','x² + 6x + 9'], correct: 0},
            {q: '(x + 4)(x − 4) =', a: ['x² − 16','x² + 16','x² − 8x','x² + 0'], correct: 0},
            {q: '(2x + 3)(2x − 3) =', a: ['4x² − 9','4x² + 9','4x² − 6x','4x² + 6x'], correct: 0},
            {q: '(x + 1)(x + 2) =', a: ['x² + 3x + 2','x² + x + 2','x² + 2x + 1','x² + 4x + 2'], correct: 0},
            {q: '(3x − 2)(x + 4) =', a: ['3x² + 10x − 8','3x² + 12x − 8','3x² + 4x − 8','3x² + 8x − 8'], correct: 0},
            {q: '(x − 5)(x + 7) =', a: ['x² + 2x − 35','x² + 12x − 35','x² − 2x − 35','x² + 35'], correct: 0},
            {q: '(2x + 1)² =', a: ['4x² + 4x + 1','4x² + 1 + 2x','4x² + 2x + 1','4x² + 2x'], correct: 0},
            {q: '(x − 6)(x + 6) =', a: ['x² − 36','x² + 36','x² − 12x','x² + 6'], correct: 0},
            {q: '(4x − 1)(4x + 1) =', a: ['16x² − 1','16x² + 1','8x² − 1','16x² − 4'], correct: 0},
            {q: 'Factoriza: x² − 9', a: ['(x − 3)(x + 3)','(x − 9)(x + 1)','(x − 1)(x + 9)','(x − 3)²'], correct: 0},
            {q: 'Factoriza: x² + 7x + 10', a: ['(x + 5)(x + 2)','(x + 10)(x + 1)','(x + 2)(x + 5)','(x + 4)(x + 3)'], correct: 0},
            {q: 'Factoriza: x² − 5x + 6', a: ['(x − 2)(x − 3)','(x − 1)(x − 6)','(x − 3)(x − 2)','(x + 2)(x + 3)'], correct: 0},
            {q: 'Factoriza: 2x² + 8x', a: ['2x(x + 4)','2(x + 4)x','x(2x + 8)','2x(x + 8)'], correct: 0},
            {q: 'Factoriza: 3x² − 12', a: ['3(x − 2)(x + 2)','3(x² − 4)','(3x − 2)(x + 6)','3x(x − 4)'], correct: 0},
            {q: 'Factoriza: x² − x − 6', a: ['(x − 3)(x + 2)','(x + 3)(x − 2)','(x − 6)(x + 1)','(x + 6)(x − 1)'], correct: 0},
            {q: 'Factoriza: 4x² − 25', a: ['(2x − 5)(2x + 5)','(4x − 5)(x + 5)','(2x − 25)(2x + 1)','(4x − 25)(x + 1)'], correct: 0},
            {q: 'Factoriza: x² + 3x − 10', a: ['(x + 5)(x − 2)','(x + 2)(x − 5)','(x − 5)(x + 2)','(x + 10)(x − 1)'], correct: 0},
            {q: 'Factoriza: x² − 4x', a: ['x(x − 4)','(x − 2)(x − 2)','(x + 4)(x − 0)','(x − 1)(x − 3)'], correct: 0},
            {q: 'Factoriza: 5x² + 10x', a: ['5x(x + 2)','5(x + 2)x','x(5x + 10)','5x(x + 10)'], correct: 0},
            {q: 'Simplifica: 3x + 4x', a: ['7x','12x','1x','x7'], correct: 0},
            {q: 'Simplifica: 10x − 6x', a: ['4x','16x','-4x','6x'], correct: 0},
            {q: 'Simplifica: 2(x + 3) + x', a: ['3x + 6','2x + 3','x + 6','4x + 6'], correct: 0},
            {q: 'Simplifica: 5(x − 2) − 3x', a: ['2x − 10','2x + 10','-2x -10','2x - 6'], correct: 0},
            {q: 'Simplifica: (3x² + 2x) − (x² − x)', a: ['2x² + 3x','4x² + x','2x² + x','x² + 3x'], correct: 0},
            {q: 'Simplifica: 4x(2x + 1)', a: ['8x² + 4x','4x² + x','8x² + x','2x² + 4x'], correct: 0},
            {q: 'Simplifica: (x + 5) − (2x − 3)', a: ['-x + 8','x + 8','-x -8','-2x + 2'], correct: 0},
            {q: 'Simplifica: 6(x − 1) + 2x', a: ['8x − 6','6x − 6','8x + 6','4x − 6'], correct: 0},
            {q: 'Simplifica: (3x − 2x²) + (x² − x)', a: ['-x² + 2x','x² + x','-2x² + x','x - x²'], correct: 0},
            {q: 'Simplifica: 7x − 3(2x − 4)', a: ['x + 12','x - 12','-x + 12','x + 4'], correct: 0}
        ],

        // Inglés I (50 preguntas proporcionadas por el usuario)
        ingles1: [
            {q: 'What is the verb “to be” in the form of “yo”?', a: ['Am','Is','Are','Be'], correct: 0},
            {q: 'Complete: She ___ a student.', a: ['Is','Am','Are','Be'], correct: 0},
            {q: 'Complete: They ___ friends.', a: ['Are','Is','Am','Be'], correct: 0},
            {q: 'Complete: I ___ from Mexico.', a: ['Am','Is','Are','Be'], correct: 0},
            {q: 'Negative form: He is tall → He ___ tall.', a: ['Is not','Is','Are','Does not'], correct: 0},
            {q: 'Question: You are happy → ___ you happy?', a: ['Are','Is','Am','Do'], correct: 0},
            {q: 'Short answer: Are they here? → Yes, ___ ___.', a: ['They are','They aren\'t','Yes, they','They'], correct: 0},
            {q: 'Short answer: Is she your sister? → No, ___ ___.', a: ['She isn\'t','She is','No, she','She aren\'t'], correct: 0},
            {q: 'Complete: We ___ not tired.', a: ['Are','Is','Am','Do'], correct: 0},
            {q: 'Complete: My name ___ Carlos.', a: ['Is','Are','Am','Be'], correct: 0},
            {q: 'What is the third-person singular of “play”?', a: ['Plays','Play','Played','Playing'], correct: 0},
            {q: 'Complete: She ___ English every day. (study)', a: ['Studies','Study','Studys','Studied'], correct: 0},
            {q: 'Complete: They ___ soccer on weekends. (play)', a: ['Play','Plays','Played','Playing'], correct: 0},
            {q: 'Negative: He likes pizza → He ___ like pizza.', a: ['Doesn\'t','Don\'t','Isn\'t','Does'], correct: 0},
            {q: 'Negative: They work here → They ___ work here.', a: ['Don\'t','Doesn\'t','Isn\'t','Do'], correct: 0},
            {q: 'Question: ___ you speak English?', a: ['Do','Does','Are','Is'], correct: 0},
            {q: 'Question: ___ he live in Mexico?', a: ['Does','Do','Is','Are'], correct: 0},
            {q: 'Complete: The sun ___ in the east. (rise)', a: ['Rises','Rise','Rised','Is rising'], correct: 0},
            {q: 'Complete: My mom ___ dinner at 7 pm. (cook)', a: ['Cooks','Cook','Cooked','Is cooking'], correct: 0},
            {q: 'Correct the sentence: He don\'t like music.', a: ['He doesn\'t like music.','He not like music.','He didn\'t like music.','He no like music.'], correct: 0},
            {q: 'Choose the correct article: ___ apple', a: ['An','A','The','No article'], correct: 0},
            {q: 'Choose the correct article: ___ dog', a: ['A','An','The','No article'], correct: 0},
            {q: 'Choose: I have ___ umbrella.', a: ['An','A','The','No article'], correct: 0},
            {q: 'Choose: She is ___ best student.', a: ['The','A','An','No article'], correct: 0},
            {q: 'Choose: I want ___ new phone.', a: ['A','An','The','No article'], correct: 0},
            {q: 'Replace the noun: María = ___', a: ['She','He','They','It'], correct: 0},
            {q: 'Replace the noun: The dogs = ___', a: ['They','Them','He','It'], correct: 0},
            {q: 'Replace the noun: Juan and I = ___', a: ['We','Us','They','He'], correct: 0},
            {q: 'Replace the noun: The book = ___', a: ['It','They','He','She'], correct: 0},
            {q: 'Replace the noun: Carlos = ___', a: ['He','She','They','It'], correct: 0},
            {q: 'What does “Where?” ask for?', a: ['A place','A person','A reason','A time'], correct: 0},
            {q: 'What does “When?” ask for?', a: ['A time / date','A place','A person','A reason'], correct: 0},
            {q: 'What does “Who?” ask for?', a: ['A person','A place','A time','A reason'], correct: 0},
            {q: 'What does “Why?” ask for?', a: ['A reason','A place','A person','A time'], correct: 0},
            {q: 'What does “What?” ask for?', a: ['Information','A person','A place','A reason'], correct: 0},
            {q: 'Complete: ___ is your name?', a: ['What','When','Who','Where'], correct: 0},
            {q: 'Complete: ___ do you live?', a: ['Where','What','When','Who'], correct: 0},
            {q: 'Complete: ___ is the exam?', a: ['When','Where','Who','Why'], correct: 0},
            {q: 'Complete: ___ is your teacher?', a: ['Who','What','When','Where'], correct: 0},
            {q: 'Complete: ___ are you sad?', a: ['Why','When','Who','Where'], correct: 0},
            {q: 'Meaning of “house”?', a: ['Casa','Home','Lugar','Hogar'], correct: 0},
            {q: 'Meaning of “teacher”?', a: ['Maestro(a)','Profesor','Alumno','Estudiante'], correct: 0},
            {q: 'Meaning of “homework”?', a: ['Tarea','Casa','Trabajo','Deber'], correct: 0},
            {q: 'Meaning of “bookstore”?', a: ['Librería','Biblioteca','Tienda','Escuela'], correct: 0},
            {q: 'Meaning of “library”?', a: ['Biblioteca','Librería','Casa','Tienda'], correct: 0},
            {q: 'Opposite of “big”?', a: ['Small','Large','Huge','Tiny'], correct: 0},
            {q: 'Opposite of “hot”?', a: ['Cold','Warm','Cool','Boiling'], correct: 0},
            {q: 'Opposite of “early”?', a: ['Late','Soon','Ahead','Timely'], correct: 0},
            {q: 'Synonym of “happy”?', a: ['Glad','Sad','Angry','Tired'], correct: 0},
            {q: 'Synonym of “correct”?', a: ['Right','Wrong','Incorrect','False'], correct: 0}
        ],
geometria_trigonometria: [
            {q: '¿Cuántos grados tiene un ángulo recto?', a: ['45°','60°','90°','180°'], correct: 2},
            {q: '¿Cuántos grados tiene un ángulo llano?', a: ['90°','180°','360°','270°'], correct: 1},
            {q: '¿Cuántos grados tiene un ángulo completo?', a: ['180°','90°','360°','270°'], correct: 2},
            {q: 'Ángulos que suman 90° se llaman…', a: ['Suplementarios','Complementarios','Opuestos','Adyacentes'], correct: 1},
            {q: 'Ángulos que suman 180° se llaman…', a: ['Complementarios','Suplementarios','Consecutivos','Congruentes'], correct: 1},
            {q: 'Ángulos opuestos por el vértice son…', a: ['Suplementarios','Complementarios','Iguales','Congruentes'], correct: 2},
            {q: 'Si dos ángulos son alternos internos, son…', a: ['Suplementarios','Iguales','Congruentes','Adyacentes'], correct: 2},
            {q: 'Si un ángulo mide 50°, su ángulo complementario mide…', a: ['35°','40°','50°','130°'], correct: 1},
            {q: 'Si un ángulo mide 120°, su ángulo suplementario mide…', a: ['60°','70°','90°','120°'], correct: 0},
            {q: 'La suma de ángulos internos de un triángulo es…', a: ['90°','360°','180°','270°'], correct: 2},
            {q: 'Triángulo con tres lados iguales:', a: ['Isósceles','Escaleno','Equilátero','Rectángulo'], correct: 2},
            {q: 'Triángulo con dos lados iguales:', a: ['Isósceles','Equilátero','Escaleno','Rectángulo'], correct: 0},
            {q: 'Triángulo con todos sus lados diferentes:', a: ['Equilátero','Isósceles','Escaleno','Rectángulo'], correct: 2},
            {q: 'Triángulo con un ángulo de 90°:', a: ['Equilátero','Isósceles','Rectángulo','Escaleno'], correct: 2},
            {q: 'Si un triángulo tiene lados 3, 4 y 5, es…', a: ['Isósceles','Equilátero','Rectángulo (pitagórico)','Escaleno'], correct: 2},
            {q: 'Suma de ángulos externos de cualquier polígono:', a: ['360°','180°','540°','720°'], correct: 0},
            {q: 'En un triángulo equilátero, cada ángulo mide…', a: ['60°','90°','45°','120°'], correct: 0},
            {q: 'Lado opuesto al ángulo recto en un triángulo rectángulo:', a: ['Cateto','Hipotenusa','Lado','Base'], correct: 1},
            {q: 'Si los catetos miden 6 y 8, la hipotenusa mide…', a: ['8','10','12','14'], correct: 1},
            {q: 'Si un ángulo agudo mide 35°, el otro mide como máximo…', a: ['55°','35°','90°','45°'], correct: 0},
            {q: 'Perímetro de un cuadrado de lado 5:', a: ['10','15','20','25'], correct: 2},
            {q: 'Área de un cuadrado de lado 5:', a: ['10','20','25','30'], correct: 2},
            {q: 'Área de un rectángulo de base 8 y altura 3:', a: ['11','24','40','22'], correct: 1},
            {q: 'Perímetro de un triángulo equilátero de lado 10:', a: ['10','20','30','40'], correct: 2},
            {q: 'Área de un triángulo de base 12 y altura 5:', a: ['17','30','60','25'], correct: 1},
            {q: 'Área de un círculo con radio 7:', a: ['153.94 (aprox)','49π','14π','98π'], correct: 1},
            {q: 'Circunferencia de un círculo con radio 10:', a: ['10π','20π','40π','200π'], correct: 1},
            {q: 'Área de un rombo con diagonales de 6 y 10:', a: ['16','30','60','10'], correct: 1},
            {q: 'Perímetro de un pentágono regular de lado 8:', a: ['32','36','40','48'], correct: 2},
            {q: 'Área de un trapecio con bases 10 y 6, y altura 4:', a: ['32','24','40','16'], correct: 0},
            {q: 'Sen 30°=', a: ['1/2','1','0','√3/2'], correct: 0},
            {q: 'Cos60°=', a: ['1/2','1','0','√3/2'], correct: 0},
            {q: 'Tan 45°=', a: ['0','1','√3','Indefinido'], correct: 1},
            {q: 'Sen 0°=', a: ['0','1','-1','Indefinido'], correct: 0},
            {q: 'Cos 0°=', a: ['0','1','-1','Indefinido'], correct: 1},
            {q: 'Sen 90°=', a: ['0','1','-1','Indefinido'], correct: 1},
            {q: 'Cos 90°=', a: ['0','1','-1','Indefinido'], correct: 0},
            {q: 'Tan 0°=', a: ['0','1','Indefinido','-1'], correct: 0},
            {q: 'Razón trigonométrica = lado opuesto / hipotenusa:', a: ['Coseno','Seno','Tangente','Cotangente'], correct: 1},
            {q: 'Razón trigonométrica = lado adyacente / hipotenusa:', a: ['Coseno','Seno','Tangente','Secante'], correct: 0},
            {q: 'Fórmula del Teorema de Pitágoras:', a: ['a + b = c','a^2 + b^2 = c^2','a^2 - b^2 = c','(a+b)^2 = c^2'], correct: 1},
            {q: 'Si los catetos miden 9 y 12, la hipotenusa mide…', a: ['13','15','18','21'], correct: 1},
            {q: 'Triángulo 30°-60°-90°, relación corta–hipotenusa:', a: ['Hipotenusa = cateto corto','Hipotenusa = 2 × cateto corto','Hipotenusa = cateto corto × √2','Hipotenusa = cateto corto / 2'], correct: 1},
            {q: 'Triángulo 45°-45°-90°, relación de lados:', a: ['Catetos iguales','Hipotenusa = cateto·√2','Catetos iguales, hipotenusa = cateto·√2','Ninguna'], correct: 2},
            {q: 'Cateto opuesto mide 8 y la hipotenusa 16:  =', a: ['1/4','1/2','2','8'], correct: 1},
            {q: 'Un polígono de 8 lados se llama…', a: ['Octágono','Heptágono','Decágono','Hexágono'], correct: 0},
            {q: 'Un polígono de 10 lados se llama…', a: ['Decágono','Hexágono','Octágono','Heptágono'], correct: 0},
            {q: 'Suma de ángulos internos de un cuadrado:', a: ['180°','90°','360°','270°'], correct: 2},
            {q: 'Suma de ángulos internos de un pentágono:', a: ['360°','540°','720°','900°'], correct: 1},
            {q: 'Suma de ángulos internos de un hexágono:', a: ['540°','720°','900°','1080°'], correct: 1}
        ],
        historia_mexico: [
            {q: 'Presidente que impulsó la industrialización por sustitución de importaciones (ISI):', a: ['Manuel Ávila Camacho','Miguel Alemán Valdés','Lázaro Cárdenas','Gustavo Díaz Ordaz'], correct: 0},
            {q: 'Presidente conocido por el “Desarrollo Estabilizador”:', a: ['Adolfo Ruiz Cortines','Miguel de la Madrid','Carlos Salinas','Vicente Fox'], correct: 0},
            {q: 'Periodo económico con crecimiento alto y estabilidad de precios (1954–1970):', a: ['La Depresión','El Milagro Mexicano','La Reconstrucción','La Estabilidad'], correct: 1},
            {q: 'Presidente que nacionalizó la industria eléctrica:', a: ['Adolfo López Mateos','Lázaro Cárdenas','Enrique Peña Nieto','Carlos Salinas'], correct: 0},
            {q: 'Acontecimiento estudiantil clave de 1968:', a: ['Matanza de Tlatelolco','Movimiento Zapatista','Reforma Universitaria','Toma del Zócalo'], correct: 0},
            {q: 'Presidente en el poder durante el movimiento del 68:', a: ['Gustavo Díaz Ordaz','Luis Echeverría','Adolfo López Mateos','Miguel Alemán'], correct: 0},
            {q: 'Presidente durante los Juegos Olímpicos de 1968:', a: ['Gustavo Díaz Ordaz','Luis Echeverría','Adolfo Ruiz Cortines','Vicente Fox'], correct: 0},
            {q: 'Política económica del desarrollo estabilizador se basó en…', a: ['Apertura total','Control de inflación y crecimiento industrial','Autarquía','Déficit fiscal elevado'], correct: 1},
            {q: 'Objetivo principal del desarrollo estabilizador:', a: ['Aumentar la inflación','Estabilidad económica sin inflación','Reducir la industria','Desindustrializar'], correct: 1},
            {q: 'Presidente que impulsó el crecimiento industrial y construyó Ciudad Universitaria:', a: ['Miguel Alemán Valdés','Lázaro Cárdenas','Carlos Salinas','Adolfo López Mateos'], correct: 0},
            {q: 'Presidente que inició la fase conocida como Desarrollo Compartido:', a: ['Luis Echeverría Álvarez','Miguel de la Madrid','José López Portillo','Vicente Fox'], correct: 0},
            {q: 'Presidente que nacionalizó la banca en 1982:', a: ['José López Portillo','Carlos Salinas','Miguel de la Madrid','Enrique Peña Nieto'], correct: 0},
            {q: 'Principal causa de la crisis de 1982:', a: ['Hiperinflación interna','Endeudamiento externo y caída del petróleo','Aumento de inversiones','Superávit comercial'], correct: 1},
            {q: 'Presidente que impulsó la apertura económica y privatizaciones:', a: ['Miguel de la Madrid','Luis Echeverría','Adolfo López Mateos','Gustavo Díaz Ordaz'], correct: 0},
            {q: 'Presidente que firmó el TLCAN (NAFTA):', a: ['Carlos Salinas de Gortari','Vicente Fox','Enrique Peña Nieto','Felipe Calderón'], correct: 0},
            {q: 'Año en que entró en vigor el TLCAN:', a: ['1992','1994','1996','2000'], correct: 1},
            {q: 'Movimiento indígena que surgió en Chiapas en 1994:', a: ['EZLN','PRI','PAN','PRD'], correct: 0},
            {q: 'Candidato presidencial asesinado en 1994:', a: ['Luis Donaldo Colosio','Carlos Salinas','Diego Fernández','Andrés Manuel López Obrador'], correct: 0},
            {q: 'Crisis económica del fin de 1994–1995 se conoce como…', a: ['Efecto Tequila','Gran Depresión','Crisis del 82','Bolsa Mexicana'], correct: 0},
            {q: 'Primer presidente del PAN en México:', a: ['Vicente Fox Quesada','Felipe Calderón','Carlos Salinas','Andrés Manuel López Obrador'], correct: 0},
            {q: 'Presidente en México durante 2000–2006:', a: ['Vicente Fox','Felipe Calderón','Enrique Peña Nieto','Carlos Salinas'], correct: 0},
            {q: 'Presidente en México durante 2006–2012:', a: ['Felipe Calderón','Enrique Peña Nieto','Vicente Fox','Andrés Manuel López Obrador'], correct: 0},
            {q: 'Política más conocida del sexenio de Calderón:', a: ['Reforma educativa','Guerra contra el narcotráfico','Nacionalización','Apertura comercial'], correct: 1},
            {q: 'Presidente de México en 2012–2018:', a: ['Enrique Peña Nieto','Felipe Calderón','Vicente Fox','Andrés Manuel López Obrador'], correct: 0},
            {q: 'Reforma educativa, energética y fiscal forman parte de…', a: ['Pacto por México','Plan Nacional','Acuerdo Fiscal','Ninguna'], correct: 0},
            {q: 'Presidente de México desde 2018:', a: ['Enrique Peña Nieto','Andrés Manuel López Obrador','Vicente Fox','Felipe Calderón'], correct: 1},
            {q: 'Programa social emblemático del actual gobierno:', a: ['Jóvenes Construyendo el Futuro','Progresa','Oportunidades','Seguro Popular'], correct: 0},
            {q: 'Proyecto ferroviario del sureste iniciado en 2019:', a: ['Tren Maya','Tren Transversal','Tren Rápido','Tren del Norte'], correct: 0},
            {q: 'Nueva aerolínea del gobierno mexicano (2023):', a: ['Mexicana de Aviación','Aeroméxico','Volaris','Interjet'], correct: 0},
            {q: 'Nuevo aeropuerto construido en 2022:', a: ['Aeropuerto Internacional Felipe Ángeles (AIFA)','NAIM','Aeropuerto Benito Juárez','Aeropuerto del Pacífico'], correct: 0},
            {q: 'La película mexicana ganadora del Óscar a Mejor Director en 2014 (Cuarón):', a: ['Roma','Gravity','Amores Perros','El Laberinto del Fauno'], correct: 1},
            {q: 'Movimiento universitario de 2012 contra Televisa:', a: ['#YoSoy132','Movimiento del 68','#NoalINAI','Movimiento Estudiantil'], correct: 0},
            {q: 'Evento cultural masivo que celebra el libro en Guadalajara:', a: ['FIL','Feria del Libro de México','Feria del Cine','Festival del Libro de Oaxaca'], correct: 0},
            {q: 'Institución responsable del patrimonio arqueológico:', a: ['CONACULTA','INE','INAH','SEP'], correct: 2},
            {q: 'Declaración emblemática del patrimonio cultural mexicano por la UNESCO:', a: ['La comida mexicana tradicional','El mariachi','La pintura mural','El cine mexicano'], correct: 0},
            {q: 'Celebración reconocida mundialmente como símbolo de México:', a: ['Navidad','Día de Muertos','Independencia','Revolución'], correct: 1},
            {q: 'Muralistas mexicanos más importantes:', a: ['Frida Kahlo, Rufino Tamayo','Diego Rivera, José Clemente Orozco, David Alfaro Siqueiros','Octavio Paz, Juan Rulfo','Carlos Fuentes, Elena Poniatowska'], correct: 1},
            {q: 'Ciudad conocida por el Festival Internacional Cervantino:', a: ['Guadalajara','Guanajuato','Monterrey','Puebla'], correct: 1},
            {q: 'Premio Nobel de Literatura mexicano:', a: ['Carlos Fuentes','Juan Rulfo','Octavio Paz','Laura Esquivel'], correct: 2},
            {q: 'Obra literaria famosa de Juan Rulfo:', a: ['Pedro Páramo','La región más transparente','El laberinto de la soledad','Como agua para chocolate'], correct: 0},
            {q: 'Institución autónoma encargada de controlar la inflación:', a: ['Banco de México','Secretaría de Hacienda','Banamex','Cámara de Diputados'], correct: 0},
            {q: 'Indicador económico que mide el crecimiento del país:', a: ['IPC','Tasa de interés','PIB','Inflación'], correct: 2},
            {q: 'Proceso mediante el cual el PRI perdió la hegemonía presidencial:', a: ['Golpe de Estado','Alternancia en el 2000','Revolución Mexicana','Crisis del 82'], correct: 1},
            {q: 'Organismo encargado de elecciones en México:', a: ['INE (antes IFE)','Tribunal Electoral','Cámara de Diputados','Corte Suprema'], correct: 0},
            {q: 'Periodo de un presidente en México:', a: ['4 años','5 años','6 años (sexenio)','8 años'], correct: 2},
            {q: 'Documento que establece las leyes supremas del país:', a: ['Carta Magna 1810','Constitución de 1917','Código Civil','Declaración de Independencia'], correct: 1},
            {q: 'Sistema político que tuvo dominio hegemónico por más de 70 años:', a: ['PAN','PRI','PRD','MORENA'], correct: 1},
            {q: 'Tratado comercial que reemplazó al TLCAN en 2020:', a: ['TLCAN II','T-MEC (USMCA)','Pacto del Pacífico','Tratado del Siglo'], correct: 1},
            {q: 'Cámara del Congreso encargada de aprobar el presupuesto:', a: ['Senado','Cámara de Diputados','Corte Suprema','Tribunal Fiscal'], correct: 1},
            {q: 'Ciudad donde se ubica la sede del gobierno federal:', a: ['Guadalajara','Ciudad de México','Monterrey','Puebla'], correct: 1}
        ],
geometria_analitica: [
            {q: '¿Cuál es la fórmula de la pendiente?', a: ['M=(y2-y1)/(x2-x1)','M=(x2+x1)/(y2+y1)','M=(y1-y2)/(x1-x2)','M=x1/y1'], correct: 0},
            {q: 'Pendiente de la recta entre (2, 3) y (5, 9):', a: ['2','3','4','5'], correct: 0},
            {q: 'Pendiente de la recta horizontal:', a: ['0','1','Indefinida','No existe'], correct: 0},
            {q: 'Pendiente de la recta vertical:', a: ['No existe / indefinida','0','1','-1'], correct: 0},
            {q: 'Si dos rectas tienen la misma pendiente, son…', a: ['Paralelas','Perpendiculares','Oblicuas','Coincidentes'], correct: 0},
            {q: 'Si el producto de pendientes es -1, las rectas son…', a: ['Perpendiculares','Paralelas','Oblicuas','Paralela'], correct: 0},
            {q: 'Pendiente de la recta que pasa por (0,4) y (4,0):', a: ['-1','0','1','4'], correct: 0},
            {q: 'Ecuación de la recta con pendiente 3 y ordenada al origen 2:', a: ['Y=3x+2','Y=2x+3','Y=3x-2','Y=x+2'], correct: 0},
            {q: 'Forma punto–pendiente de la recta:', a: ['Y-y1 = m(x-x1)','Y = mx+b','Ax+By+C=0','Y-y1 = (x-x1)'], correct: 0},
            {q: 'Recta con pendiente -2 y que pasa por (1,5):', a: ['Y-5=-2(x-1)','Y-5=2(x-1)','Y+5=-2(x+1)','Y-5=-2(x+1)'], correct: 0},
            {q: '¿Cuál es la fórmula de distancia entre dos puntos?', a: ['D=√[(x2-x1)²+(y2-y1)²]','D=√(x2-x1)²+√(y2-y1)²','D=(x2-x1)²+(y2-y1)²','D=|x2-x1|+|y2-y1|'], correct: 0},
            {q: 'Distancia entre (0,0) y (3,4):', a: ['5','7','6','3'], correct: 0},
            {q: 'Punto medio entre (2, 4) y (6, 10):', a: ['(4, 7)','(3, 5)','(5, 8)','(4, 6)'], correct: 0},
            {q: 'Punto medio entre (-2, 8) y (4, -4):', a: ['(1, 2)','(0, 0)','(2, 2)','(1, 4)'], correct: 0},
            {q: 'Distancia entre (5,2) y (1,2):', a: ['4','3','5','6'], correct: 0},
            {q: 'Forma general de una recta:', a: ['Ax+By+C=0','Y=mx+b','Y-y1=m(x-x1)','Y=ax²+bx+c'], correct: 0},
            {q: 'Pendiente en forma general:', a: ['M=-A/B','M=A/B','M=-B/A','M=B/A'], correct: 0},
            {q: 'Forma explícita de la recta:', a: ['Y=mx+b','Ax+By+C=0','Y-y1=m(x-x1)','Y=x+b'], correct: 0},
            {q: 'Ordenada al origen:', a: ['Valor de y cuando x = 0','Valor de x cuando y = 0','Intersección con x','Pendiente de la recta'], correct: 0},
            {q: 'Abscisa al origen:', a: ['Valor de x cuando y = 0','Valor de y cuando x = 0','Intersección con y','Pendiente de la recta'], correct: 0},
            {q: 'Ecuación de la circunferencia con centro (0,0) y radio r:', a: ['X²+y²=r²','X²-y²=r²','(X-r)²+(y-r)²=1','X+y=r'], correct: 0},
            {q: 'Centro de la circunferencia (X-3)²+(y+1)²=25:', a: ['(3, -1)','(-3, 1)','(3, 1)','(-3, -1)'], correct: 0},
            {q: 'Radio de la circunferencia (X-3)²+(y+1)²=25:', a: ['5','25','3','10'], correct: 0},
            {q: 'Forma general de la circunferencia:', a: ['X²+y²+Dx+Ey+F=0','(X-h)²+(y-k)²=r²','X²+y²=r²','Ax+By+C=0'], correct: 0},
            {q: 'Para hallar el centro en forma general se usa…', a: ['Completación de cuadrados','Factorización','Fórmula cuadrática','Regla de Cramer'], correct: 0},
            {q: 'Circunferencia con centro (2,4) y radio 3:', a: ['(X-2)²+(y-4)²=9','(X+2)²+(y+4)²=9','(X-2)²+(y-4)²=3','(X-4)²+(y-2)²=9'], correct: 0},
            {q: 'Radio de x²+y²=49:', a: ['7','49','14','7²'], correct: 0},
            {q: 'Si una circunferencia tiene radio 0, representa…', a: ['Un punto','Una línea','Un círculo','Nada'], correct: 0},
            {q: 'Eje de la parábola y=ax²+bx+c:', a: ['Vertical','Horizontal','Oblicuo','Ninguno'], correct: 0},
            {q: 'Fórmula del vértice (parábola vertical):', a: ['(-b/2a, c -b²/4a)','(-b/2a, b²/4a)','(b/2a, c -b²/4a)','(-b/2a, -c -b²/4a)'], correct: 0},
            {q: 'Vértice de y=x²:', a: ['(0, 0)','(1, 1)','(0, 1)','(-1, 1)'], correct: 0},
            {q: 'Parábola con vértice en (0,0) y foco (0,3):', a: ['X²=12y','X²=6y','X²=3y','X²=9y'], correct: 0},
            {q: 'Foco de y=1/4x²:', a: ['(0, 1)','(1, 0)','(0, 0)','(1, 1)'], correct: 0},
            {q: 'Ecuación de la parábola horizontal:', a: ['Y²=4px','X²=4py','X²+Y²=r²','X=4py'], correct: 0},
            {q: 'Directriz de la parábola x²=8y:', a: ['Y=-2','Y=2','X=-2','X=2'], correct: 0},
            {q: 'Ecuación de la elipse con centro en el origen:', a: ['X²/a² + y²/b²=1','X²+y²=r²','X²/a² - y²/b²=1','X²/a + y²/b=1'], correct: 0},
            {q: 'En una elipse, el eje mayor es el de…', a: ['A (si a > b)','B (si b > a)','Siempre el eje x','Siempre el eje y'], correct: 0},
            {q: 'Si a > b, la elipse es…', a: ['Horizontal','Vertical','Circular','Oblicua'], correct: 0},
            {q: 'Relación en elipse:', a: ['C²=a²-b²','C²=a²+b²','C=a-b','C=a+b'], correct: 0},
            {q: 'Elipse con a = 5 y b = 3, valor de c:', a: ['4','5','3','6'], correct: 0},
            {q: 'Ecuación de hipérbola horizontal:', a: ['X²/a²-y²/b²=1','Y²/a²-x²/b²=1','X²/a²+y²/b²=1','X²-y²=1'], correct: 0},
            {q: 'Ecuación de hipérbola vertical:', a: ['Y²/a²-x²/b²=1','X²/a²-y²/b²=1','X²/a²+y²/b²=1','Y²+X²=1'], correct: 0},
            {q: 'Relación en hipérbola:', a: ['C²=a²+b²','C²=a²-b²','C=a+b','C=a-b'], correct: 0},
            {q: 'Asíntotas de x²/9-y²/4=1:', a: ['Y=±2/3x','Y=±3/2x','Y=±2x','Y=±3x'], correct: 0},
            {q: 'Hipérbola con centro en el origen y asíntotas perpendiculares:', a: ['Rectangular','Equilátera','Isósceles','Común'], correct: 0},
            {q: 'Magnitud del vector (3,4):', a: ['5','7','6','√25'], correct: 0},
            {q: 'Suma de vectores (2,3) + (4,1):', a: ['(6, 4)','(6, 3)','(2, 4)','(8, 3)'], correct: 0},
            {q: 'Producto punto de (2,3) · (1,5):', a: ['17','7','6','15'], correct: 0},
            {q: 'El vector unitario se define como…', a: ['Vector de magnitud 1','Vector de magnitud 0','Vector horizontal','Vector vertical'], correct: 0},
            {q: 'Dirección del vector (6,0):', a: ['Eje positivo x','Eje positivo y','Eje negativo x','Eje negativo y'], correct: 0}
        ],
        fisica1: [
            {q: '¿Qué diferencia hay entre velocidad media y velocidad instantánea?', a: ['La velocidad media se calcula en un intervalo; la instantánea en un momento específico','Son iguales','La media es mayor','La instantánea es promedio'], correct: 0},
            {q: '¿Qué significa aceleración negativa?', a: ['Que la velocidad disminuye con el tiempo','Que el objeto se mueve hacia atrás','Que no hay movimiento','Que la distancia es negativa'], correct: 0},
            {q: '¿Qué representa el área bajo la curva en una gráfica aceleración-tiempo?', a: ['El cambio de velocidad','La distancia recorrida','La aceleración','La fuerza aplicada'], correct: 0},
            {q: '¿Qué establece la segunda ley de Newton?', a: ['Que la fuerza neta es igual al producto de la masa por la aceleración (F=m·a)','Que toda acción tiene reacción','Que la velocidad es constante','Que no hay aceleración'], correct: 0},
            {q: '¿Qué ocurre con un objeto en caída libre en la Tierra?', a: ['Su aceleración es constante e igual a 9.8 m/s²','Su velocidad es constante','No experimenta aceleración','Su masa cambia'], correct: 0},
            {q: '¿Qué es un movimiento parabólico?', a: ['Es la combinación de un movimiento horizontal uniforme y uno vertical acelerado','Es un movimiento en círculo','Es un movimiento ondulatorio','Es un movimiento armónico'], correct: 0},
            {q: '¿Qué fuerza mantiene a un planeta en órbita?', a: ['La fuerza gravitatoria','La fuerza magnética','La fuerza eléctrica','La fuerza de fricción'], correct: 0},
            {q: '¿Qué diferencia hay entre masa y peso?', a: ['La masa es la cantidad de materia; el peso es la fuerza gravitatoria sobre esa masa','Son lo mismo','El peso es materia; la masa es fuerza','No hay diferencia'], correct: 0},
            {q: '¿Qué es un sistema de referencia inercial?', a: ['Aquel en el que se cumplen las leyes de Newton','Aquel que se mueve constantemente','Aquel que experimenta aceleración','Aquel sin movimiento'], correct: 0},
            {q: '¿Qué significa equilibrio traslacional?', a: ['Que la suma de fuerzas es cero','Que el objeto está en movimiento','Que hay rotación','Que la velocidad es máxima'], correct: 0},
            {q: '¿Qué condiciones deben cumplirse para que una fuerza realice trabajo?', a: ['Que exista desplazamiento y que la fuerza tenga componente en esa dirección','Que exista fuerza solamente','Que haya movimiento circular','Que no haya fricción'], correct: 0},
            {q: '¿Qué es energía mecánica?', a: ['La suma de energía cinética y potencial','La energía de movimiento solamente','La energía de posición solamente','La energía total del universo'], correct: 0},
            {q: '¿Qué establece la conservación de la energía mecánica?', a: ['Que en ausencia de fuerzas no conservativas, la energía mecánica se mantiene constante','Que la energía desaparece','Que la energía se duplica','Que no hay energía'], correct: 0},
            {q: '¿Qué es energía potencial elástica?', a: ['Energía almacenada en un resorte: E=½kx²','Energía de movimiento','Energía de posición','Energía térmica'], correct: 0},
            {q: '¿Qué significa que una máquina tenga eficiencia del 80%?', a: ['Que convierte en útil el 80% de la energía suministrada','Que pierde el 80% de energía','Que funciona solo el 80% del tiempo','Que tiene 80 watts'], correct: 0},
            {q: '¿Qué es potencia instantánea?', a: ['El trabajo realizado por unidad de tiempo en un instante específico','La energía total disponible','La velocidad del objeto','La aceleración del objeto'], correct: 0},
            {q: '¿Qué diferencia hay entre energía cinética y potencial?', a: ['La cinética depende del movimiento; la potencial de la posición','Son iguales','La cinética es mayor','La potencial es de movimiento'], correct: 0},
            {q: '¿Qué ocurre con la energía en un péndulo ideal?', a: ['Se transforma entre cinética y potencial, pero la mecánica total se conserva','Se pierde constantemente','Se aumenta continuamente','Se mantiene como cinética'], correct: 0},
            {q: '¿Qué es trabajo negativo?', a: ['Cuando la fuerza se opone al desplazamiento','Cuando no hay movimiento','Cuando la fuerza es pequeña','Cuando la velocidad es cero'], correct: 0},
            {q: '¿Qué representa el área bajo la curva en una gráfica fuerza-desplazamiento?', a: ['El trabajo realizado','La aceleración','La velocidad','La masa'], correct: 0},
            {q: '¿Qué es cantidad de movimiento?', a: ['p=m·v','p=m/v','p=m+v','p=m-v'], correct: 0},
            {q: '¿Qué establece la conservación del momento lineal?', a: ['Que en ausencia de fuerzas externas, el momento total se conserva','Que el momento siempre aumenta','Que no existe momento','Que el momento es variable'], correct: 0},
            {q: '¿Qué diferencia hay entre colisión elástica e inelástica?', a: ['En la elástica se conserva energía cinética; en la inelástica no','Son iguales','La inelástica conserva más energía','No hay diferencia'], correct: 0},
            {q: '¿Qué ocurre en una colisión perfectamente inelástica?', a: ['Los cuerpos quedan unidos tras el choque','Los cuerpos se separan','No hay choque','Los cuerpos rebotan'], correct: 0},
            {q: '¿Qué es impulso?', a: ['El producto de la fuerza por el tiempo: I=F·Δt','La energía de un objeto','La velocidad del objeto','La aceleración'], correct: 0},
            {q: '¿Qué es frecuencia de una onda?', a: ['Número de oscilaciones por segundo','La distancia entre ondas','La velocidad de la onda','La altura de la onda'], correct: 0},
            {q: '¿Qué relación existe entre velocidad, frecuencia y longitud de onda?', a: ['v=f·λ','v=f/λ','v=f+λ','v=λ/f'], correct: 0},
            {q: '¿Qué es interferencia constructiva?', a: ['Cuando dos ondas se superponen y aumentan su amplitud','Cuando dos ondas se cancelan','Cuando una onda desaparece','Cuando la onda cambia de dirección'], correct: 0},
            {q: '¿Qué es interferencia destructiva?', a: ['Cuando dos ondas se cancelan parcialmente o totalmente','Cuando dos ondas se suman','Cuando amplifica la onda','Cuando la onda cambia de velocidad'], correct: 0},
            {q: '¿Qué fenómeno explica la formación de patrones en ondas estacionarias?', a: ['La superposición de ondas en direcciones opuestas','La refracción de ondas','La difracción de ondas','La reflexión de ondas'], correct: 0},
            {q: '¿Qué es resonancia?', a: ['Aumento de amplitud cuando la frecuencia externa coincide con la natural del sistema','Disminución de amplitud','Cambio de dirección','Reflexión total'], correct: 0},
            {q: '¿Qué es difracción?', a: ['Desviación de una onda al pasar por un obstáculo o rendija','Rebote de la onda','Cambio de medio','Aumento de velocidad'], correct: 0},
            {q: '¿Qué es refracción?', a: ['Cambio de dirección de una onda al pasar de un medio a otro','Rebote de la onda','Desviación por obstáculo','Aumento de amplitud'], correct: 0},
            {q: '¿Qué es reflexión?', a: ['Rebote de una onda al chocar con una superficie','Cambio de dirección','Cambio de velocidad','Desaparición de la onda'], correct: 0},
            {q: '¿Qué es el efecto Doppler?', a: ['Cambio en frecuencia percibida por movimiento relativo entre fuente y observador','Aumento de velocidad','Cambio de amplitud','Desaparición de frecuencia'], correct: 0},
            {q: '¿Qué es carga eléctrica?', a: ['Propiedad de la materia que produce interacciones eléctricas','Cantidad de corriente','Resistencia del material','Potencial eléctrico'], correct: 0},
            {q: '¿Qué establece la ley de Coulomb?', a: ['La fuerza entre dos cargas depende del producto de las cargas e inversamente del cuadrado de la distancia','La fuerza es directamente proporcional a la distancia','La fuerza no depende de las cargas','La fuerza es constante'], correct: 0},
            {q: '¿Qué es corriente eléctrica?', a: ['Flujo de electrones en un conductor','Acumulación de carga','Diferencia de potencial','Resistencia del circuito'], correct: 0},
            {q: '¿Qué es resistencia eléctrica?', a: ['Oposición al paso de la corriente','Conducción de corriente','Acumulación de carga','Generación de voltaje'], correct: 0},
            {q: '¿Qué establece la ley de Ohm?', a: ['V=I·R','V=I+R','V=I/R','V=I²R'], correct: 0},
            {q: '¿Qué diferencia hay entre un circuito en serie y uno en paralelo?', a: ['En serie la corriente es la misma; en paralelo el voltaje es el mismo','Son idénticos','La serie tiene más voltaje','El paralelo tiene menos corriente'], correct: 0},
            {q: '¿Qué es potencia eléctrica?', a: ['P=V·I','P=V+I','P=V/I','P=V²+I'], correct: 0},
            {q: '¿Qué es un campo eléctrico?', a: ['Región donde una carga experimenta una fuerza eléctrica','Región sin carga','Espacio vacío','Zona con temperatura'], correct: 0},
            {q: '¿Qué es un campo magnético?', a: ['Región donde actúan fuerzas magnéticas sobre cargas en movimiento','Región fría','Espacio sin movimiento','Zona con resistencia'], correct: 0},
            {q: '¿Qué establece la ley de Faraday?', a: ['Una variación en el flujo magnético induce una corriente eléctrica','El magnetismo produce resistencia','La corriente crea calor','El magnetismo desaparece'], correct: 0},
            {q: '¿Qué es un imán permanente?', a: ['Material que mantiene un campo magnético constante','Imán que cambia de polaridad','Imán temporal','Imán de corta duración'], correct: 0},
            {q: '¿Qué es inducción electromagnética?', a: ['Generación de corriente por variación de un campo magnético','Generación de magnetismo por corriente','Pérdida de magnetismo','Aumento de resistencia'], correct: 0},
            {q: '¿Qué es un transformador eléctrico?', a: ['Dispositivo que cambia voltajes en corriente alterna','Dispositivo que genera corriente','Dispositivo que almacena energía','Dispositivo que mide resistencia'], correct: 0},
            {q: '¿Qué es un motor eléctrico?', a: ['Convierte energía eléctrica en mecánica','Convierte energía mecánica en eléctrica','Almacena energía','Genera voltaje'], correct: 0},
            {q: '¿Qué es un generador eléctrico?', a: ['Convierte energía mecánica en eléctrica','Convierte energía eléctrica en mecánica','Consume energía','Almacena corriente'], correct: 0}
        ],
contabilidad: [
            {q: '¿Cuál es el objetivo principal de la contabilidad?', a: ['Registrar transacciones financieras','Entretener inversionistas','Cobrar impuestos','Ninguna'], correct: 0},
            {q: 'La ecuación contable es: Activo = Pasivo + ___', a: ['Patrimonio','Ingresos','Gastos','Capital'], correct: 0},
            {q: '¿Qué es el Activo en contabilidad?', a: ['Recursos que posee la empresa','Deudas de la empresa','Ingresos anuales','Patrimonio'], correct: 0},
            {q: '¿Qué es el Pasivo en contabilidad?', a: ['Obligaciones financieras de la empresa','Recursos propios','Beneficios obtenidos','Gastos operacionales'], correct: 0},
            {q: 'El Patrimonio incluye:', a: ['Capital + Utilidades retenidas','Préstamos bancarios','Impuestos pagados','Gastos operacionales'], correct: 0},
            {q: 'En el método de doble entrada, cada transacción afecta:', a: ['Una sola cuenta','Dos o más cuentas','Tres cuentas','Cuatro cuentas'], correct: 1},
            {q: 'El Debe se utiliza para:', a: ['Aumentar activos y gastos, disminuir pasivos e ingresos','Disminuir activos','Aumentar ingresos solamente','Registrar pérdidas'], correct: 0},
            {q: 'El Haber se utiliza para:', a: ['Aumentar pasivos e ingresos, disminuir activos y gastos','Aumentar activos','Disminuir gastos solamente','Registrar ganancias brutas'], correct: 0},
            {q: '¿Qué es un Diario Contable?', a: ['Registro cronológico de transacciones','Reporte anual de ganancias','Balance mensual','Estado de flujos'], correct: 0},
            {q: '¿Qué es un Libro Mayor?', a: ['Agrupación de todas las cuentas con sus movimientos','Documento de presupuestos','Historial de clientes','Registro de inventarios'], correct: 0},
            {q: 'El Balance General muestra la posición ___:', a: ['Financiera en una fecha específica','De ganancias del ejercicio','De flujos de caja','De presupuestos futuros'], correct: 0},
            {q: 'El Estado de Resultados muestra:', a: ['Ingresos, gastos y utilidad en un período','Activos y pasivos','Flujos de efectivo','Cambios en patrimonio'], correct: 0},
            {q: '¿Qué son los ingresos en contabilidad?', a: ['Aumentos netos del patrimonio por ventas/servicios','Gastos operacionales','Préstamos recibidos','Depreciaciones'], correct: 0},
            {q: '¿Qué son los gastos en contabilidad?', a: ['Disminuciones netas del patrimonio','Pago de deudas','Compra de activos','Depreciación acumulada'], correct: 0},
            {q: 'Gasto = Consumo de ___ para obtener ingresos', a: ['Recursos','Capital','Patrimonio','Activos fijos'], correct: 0},
            {q: '¿Qué es la Depreciación?', a: ['Pérdida de valor de activos fijos con el tiempo','Aumento de valor de inventarios','Disminución de pasivos','Reducción de ingresos'], correct: 0},
            {q: 'El flujo de caja registra:', a: ['Movimiento de dinero en efectivo','Cambio en patrimonio','Variación de activos fijos','Aumento de pasivos'], correct: 0},
            {q: 'Un ingreso diferido es:', a: ['Dinero recibido antes de vender el bien/servicio','Pago de impuestos retrasado','Gasto no pagado','Préstamo a largo plazo'], correct: 0},
            {q: 'Una cuenta por pagar es:', a: ['Obligación de pagar en el futuro','Dinero recibido de clientes','Aumento en activos corrientes','Disminución de gastos'], correct: 0},
            {q: '¿Qué es el ciclo contable?', a: ['Proceso de registrar, clasificar y resumir transacciones','Período de una transacción','Tiempo de cobro de deudas','Año fiscal empresarial'], correct: 0},
            {q: 'Las fases del ciclo contable son (primer paso):', a: ['Análisis de documentos','Registro en libro mayor','Cierre de cuentas','Elaboración de reportes'], correct: 0},
            {q: 'Después del Diario y Mayor, el siguiente paso es:', a: ['Balance de comprobación','Asiento de cierre','Estado financiero','Auditoría'], correct: 0},
            {q: 'El Balance de Comprobación verifica:', a: ['Igualdad de debe y haber','Exactitud de ingresos','Saldo final de cuentas','Ganancias del ejercicio'], correct: 0},
            {q: 'Los asientos de cierre ocurren:', a: ['Al final del período contable','Diariamente','Semanalmente','Trimestralmente'], correct: 0},
            {q: '¿Qué es el Activo Circulante?', a: ['Activos convertibles a efectivo dentro de 1 año','Bienes duraderos de la empresa','Dinero invertido a largo plazo','Intangibles'], correct: 0},
            {q: '¿Qué es el Pasivo Circulante?', a: ['Deudas pagables dentro de 1 año','Obligaciones a largo plazo','Capital social','Reservas'], correct: 0},
            {q: '¿Qué es el Activo Fijo?', a: ['Bienes duraderos usados en operaciones (>1 año)','Efectivo','Cuentas por cobrar','Inventarios'], correct: 0},
            {q: '¿Qué es el Pasivo a Largo Plazo?', a: ['Deudas con vencimiento > 1 año','Salarios por pagar','Impuestos diferidos','Dividendos'], correct: 0},
            {q: 'Ejemplos de Activo Circulante:', a: ['Efectivo, bancos, inventarios, clientes','Maquinaria, edificios','Marcas, patentes','Hipotecas'], correct: 0},
            {q: 'El ROE (Retorno sobre el Patrimonio) mide:', a: ['Ganancia en relación al capital invertido','Gasto total / Ingresos','Activos / Pasivos','Efectivo / Deudas'], correct: 0},
            {q: 'El ROA (Retorno sobre Activos) mide:', a: ['Ganancia en relación a los activos totales','Patrimonio / Activos','Ingresos / Gastos','Deudas / Patrimonio'], correct: 0},
            {q: '¿Qué es la Amortización?', a: ['Disminución gradual de una deuda','Pérdida de valor de activos fijos','Aumento de ingresos','Reducción de gastos'], correct: 0},
            {q: 'Diferencia entre Depreciación y Amortización:', a: ['La depreciación es para tangibles, amortización para intangibles','Son sinónimos','La amortización es más rápida','La depreciación es menor'], correct: 0},
            {q: '¿Qué es el Análisis Vertical?', a: ['Comparación de cuentas dentro del mismo período','Comparación de períodos distintos','Tendencias a largo plazo','Proyecciones futuras'], correct: 0},
            {q: '¿Qué es el Análisis Horizontal?', a: ['Comparación de estados financieros en diferentes períodos','Análisis de una sola cuenta','Desglose de gastos','Identificación de activos'], correct: 0},
            {q: 'La razón de liquidez general (Activo Circulante / Pasivo Circulante) mide:', a: ['Capacidad de pagar deudas a corto plazo','Rentabilidad de la empresa','Valor del patrimonio','Eficiencia operativa'], correct: 0},
            {q: '¿Cuál es el principal objetivo de los estados financieros?', a: ['Informar sobre la situación económico-financiera','Calcular impuestos solamente','Determinar sueldos','Establecer presupuestos'], correct: 0},
            {q: 'El Método PEPS en inventarios significa:', a: ['Primero Entra, Primero Sale','Punto de Equilibrio, Precio Seguro','Permite Egresos, Prohíbe Sueldos','Paciencia, Exactitud, Precisión, Seguridad'], correct: 0},
            {q: 'El Método UEPS en inventarios significa:', a: ['Último Entra, Primero Sale','Único Estándar, Precio Seguro','Utilidades Esperadas, Precios Sugeridos','Unidades Específicas, Precio Standard'], correct: 0},
            {q: '¿Qué es la Auditoría Contable?', a: ['Revisión e verificación de registros financieros','Creación de nuevas cuentas','Registro de transacciones','Cálculo de impuestos'], correct: 0},
            {q: 'El Auditor Externo es:', a: ['Profesional independiente que verifica las cuentas','Contador interno de la empresa','Funcionario de impuestos','Empleado de marketing'], correct: 0},
            {q: '¿Cuál es la diferencia entre utilidad bruta y neta?', a: ['Bruta antes de impuestos/gastos, neta después','Bruta es de operaciones, neta es de inversiones','Bruta es de ventas, neta es de costos','Son la misma'], correct: 0},
            {q: 'El Margen de Ganancia Bruta = (Utilidad Bruta / ___) × 100%:', a: ['Ventas Netas','Activos Totales','Patrimonio','Gastos Operacionales'], correct: 0},
            {q: '¿Qué es el Punto de Equilibrio?', a: ['Donde ingresos igualan costos, sin ganancia ni pérdida','Máxima ganancia posible','Mínimo de ventas requeridas','Punto donde se maximiza patrimonio'], correct: 0},
            {q: 'El Costo de Ventas incluye:', a: ['Costo de materia prima, mano de obra directa, gastos fabricación','Gastos administrativos solamente','Gastos de publicidad','Depreciación de oficinas'], correct: 0},
            {q: 'Los Gastos Operacionales incluyen:', a: ['Administración, ventas, distribución','Costo de materias primas','Intereses pagados','Dividendos repartidos'], correct: 0},
            {q: '¿Qué es el Capital de Trabajo?', a: ['Activo Circulante - Pasivo Circulante','Patrimonio total','Dinero invertido en activos fijos','Suma de todos los ingresos'], correct: 0},
            {q: 'Una empresa con Capital de Trabajo positivo:', a: ['Puede cubrir obligaciones a corto plazo','Genera pérdidas permanentemente','No puede operar','Debe cerrar operaciones'], correct: 0},
            {q: 'El Ratio Deuda / Patrimonio mide:', a: ['Nivel de endeudamiento relativo al capital propio','Capacidad de pagar intereses','Liquidez general','Rentabilidad operativa'], correct: 0}
        ],
        derecho: [
            {q: '¿Cuál es la fuente principal del Derecho en México?', a: ['La Constitución Política','Los tratados internacionales','La jurisprudencia','La costumbre'], correct: 0},
            {q: 'La Constitución Política de México fue promulgada en:', a: ['1857','1917','1985','2020'], correct: 1},
            {q: '¿Quién tiene la potestad legislativa en México?', a: ['El Congreso (Cámara de Diputados y Senado)','El Ejecutivo','El Poder Judicial','Los gobiernos locales'], correct: 0},
            {q: 'El Poder Ejecutivo en México es ejercido por:', a: ['El Presidente de la República','El Congreso','La Corte Suprema','El Senado'], correct: 0},
            {q: '¿Cuántos años dura el mandato presidencial en México?', a: ['4 años','5 años','6 años (sexenio)','8 años'], correct: 2},
            {q: 'La Corte Suprema de Justicia en México se denomina actualmente:', a: ['Suprema Corte de Justicia de la Nación (SCJN)','Tribunal Constitucional','Corte de Justicia','Poder Judicial Federal'], correct: 0},
            {q: '¿Qué es un Amparo en Derecho Mexicano?', a: ['Juicio que protege derechos fundamentales contra actos ilegales','Préstamo de dinero','Contrato laboral','Permiso administrativo'], correct: 0},
            {q: '¿Cuáles son las garantías individuales en México?', a: ['Derechos fundamentales de toda persona (artículos 1-29 CPEUM)','Privilegios de ciudadanía','Derechos laborales solamente','Garantías patrimoniales'], correct: 0},
            {q: 'El Derecho Constitucional estudia:', a: ['La estructura y funcionamiento del Estado','Contratos privados','Delitos penales','Normas de comercio'], correct: 0},
            {q: 'El Derecho Administrativo regula:', a: ['Relaciones entre el Estado y los particulares','Contratos entre empresas privadas','Derecho de familia','Propiedad intelectual'], correct: 0},
            {q: '¿Qué es el Derecho Civil?', a: ['Rama que regula relaciones patrimoniales y personales entre personas','Derecho del Estado','Normas penales','Derecho laboral'], correct: 0},
            {q: 'El Derecho Penal se encarga de:', a: ['Establecer sanciones por actos delictivos','Resolver conflictos comerciales','Regular contratos','Administrar la hacienda pública'], correct: 0},
            {q: '¿Cuáles son las ramas principales del Derecho?', a: ['Público y Privado','Penal y Civil solamente','Nacional e Internacional','Sustantivo y Adjetivo'], correct: 0},
            {q: 'El Derecho Público incluye:', a: ['Derecho Constitucional, Administrativo, Penal, Tributario','Derecho Civil, Mercantil, Laboral','Derecho Internacional privado','Derecho de familia solamente'], correct: 0},
            {q: 'El Derecho Privado incluye:', a: ['Derecho Civil, Mercantil, Laboral','Derecho Penal, Tributario','Derecho Constitucional','Derecho administrativo'], correct: 0},
            {q: '¿Qué es una Norma Jurídica?', a: ['Regla de conducta obligatoria establecida por autoridad competente','Sugerencia de comportamiento','Costumbre tradicional','Opinión de expertos'], correct: 0},
            {q: 'Las características de las normas jurídicas son:', a: ['Obligatorias, coercibles, abstractas, generales','Opcionales y subjetivas','Temporales y específicas','Privadas y personales'], correct: 0},
            {q: '¿Qué es la Capacidad Jurídica?', a: ['Aptitud para ser titular de derechos y obligaciones','Capacidad para trabajar','Habilidad para testificar','Derecho a votar'], correct: 0},
            {q: '¿Quiénes pueden ser sujetos de derecho?', a: ['Personas físicas y morales','Solo ciudadanos','Extranjeros no pueden','Menores de edad no pueden'], correct: 0},
            {q: '¿Qué es una Persona Moral?', a: ['Entidad legal que puede contraer obligaciones (empresas, asociaciones)','Ser humano individual','Grupo informal','Patrimonio heredado'], correct: 0},
            {q: 'En Derecho, la _____ es el conjunto de derechos y obligaciones de una persona:', a: ['Capacidad de goce y ejercicio','Responsabilidad penal','Situación tributaria','Edad legal'], correct: 0},
            {q: '¿A partir de qué edad se adquiere capacidad de ejercicio total en México?', a: ['18 años','16 años','21 años','25 años'], correct: 0},
            {q: '¿Qué es una Incapacidad Legal?', a: ['Restricción para ejercer derechos propios (menores, incapacitados)','Ausencia de derechos','Pérdida de nacionalidad','Delito grave'], correct: 0},
            {q: '¿Cuáles son los actos jurídicos válidos?', a: ['Los realizados con capacidad, consentimiento libre, objeto y causa lícita','Cualquier acto realizado','Solo actos públicos','Actos realizados por notario'], correct: 0},
            {q: 'Un acto jurídico nulo es:', a: ['Aquel que carece de un requisito esencial','Acto que puede corregirse','Acto realizado en error','Acto provisional'], correct: 0},
            {q: '¿Qué es la Prescripción en Derecho?', a: ['Pérdida de derecho por falta de ejercicio en tiempo determinado','Derivación de autoridad','Mandato temporal','Desistimiento voluntario'], correct: 0},
            {q: 'En México, la prescripción ordinaria es de:', a: ['10 años','5 años','15 años','Indefinida'], correct: 0},
            {q: '¿Qué es la Caducidad?', a: ['Pérdida de un derecho por no ejercerlo en plazo fatal','Delegación de poderes','Revocación de acto','Suspensión temporal'], correct: 0},
            {q: '¿Cuál es la diferencia entre Prescripción y Caducidad?', a: ['Prescripción es suspendible, caducidad es fatal y no suspendible','Son iguales','Prescripción es más larga','Caducidad es más importante'], correct: 0},
            {q: '¿Qué es la Responsabilidad Civil?', a: ['Obligación de reparar daño causado a terceros','Delito penal grave','Sanción administrativa','Multa tributaria'], correct: 0},
            {q: 'La Responsabilidad Civil puede ser:', a: ['Contractual (por contrato) o Extracontractual (por daño)','Solo penal','Solo laboral','Solo mercantil'], correct: 0},
            {q: '¿Qué es el Daño en Derecho?', a: ['Lesión injustificada a bienes, derechos o facultades','Pérdida accidental','Gasto autorizado','Depreciación normal'], correct: 0},
            {q: 'Para que exista Responsabilidad Civil se requiere:', a: ['Daño, culpa/dolo y causalidad','Solo daño','Intención exclusivamente','Autoridad competente'], correct: 0},
            {q: '¿Qué es la Culpa en materia civil?', a: ['Incumplimiento sin intención de dañar (falta de diligencia)','Delito intencional','Infracción grave','Violación de tratado'], correct: 0},
            {q: '¿Qué es el Dolo en materia civil?', a: ['Incumplimiento intencional para causar daño','Error involuntario','Equivocación de hecho','Omisión accidental'], correct: 0},
            {q: 'En un Contrato, el consentimiento debe ser:', a: ['Libre, sin vicios (error, dolo, violencia)','Coercitivo','Temporal solamente','Ratificado anualmente'], correct: 0},
            {q: '¿Cuáles son los vicios del consentimiento?', a: ['Error, dolo y violencia','Solo mentira','Cambio de opinión','Ausencia de firma'], correct: 0},
            {q: '¿Qué es un Contrato Nulo?', a: ['Aquel que falta elemento esencial (capacidad, objeto, causa lícita)','Contrato reformable','Contrato temporal','Contrato revocable'], correct: 0},
            {q: '¿Qué es un Contrato Anulable?', a: ['Aquel que tiene defectos menores y puede ser rescindido a solicitud interesado','Contrato nulo de pleno derecho','Contrato permanente','Contrato irrevocable'], correct: 0},
            {q: '¿Qué es el Derecho de Retracto?', a: ['Derecho de preferencia en la compra antes que terceros','Derecho a vender nuevamente','Derecho a cambiar de idea','Derecho a devolver producto'], correct: 0},
            {q: 'El Derecho de Familia regula:', a: ['Matrimonio, divorcio, filiación, patria potestad, sucesiones','Contratos comerciales','Delitos penales','Obligaciones tributarias'], correct: 0},
            {q: '¿Cuál es la edad mínima para contraer matrimonio en México?', a: ['18 años (16 con consentimiento parental en algunas entidades)','16 años','21 años','25 años'], correct: 0},
            {q: '¿Qué es la Patria Potestad?', a: ['Derecho y deber de los padres de cuidar, educar y representar a menores','Herencia de padres a hijos','Deuda de padres','Mandato parental'], correct: 0},
            {q: 'La Sucesión Testamentaria ocurre cuando:', a: ['Existe testamento válido del difunto','Hay ausencia de herederos','El testador es menor','No hay bienes que heredar'], correct: 0},
            {q: 'La Sucesión Intestada ocurre cuando:', a: ['No existe testamento válido','Existe testamento válido','Solo hay herederos colaterales','El difunto no tiene bienes'], correct: 0},
            {q: '¿Cuáles son los órdenes sucesorios en México?', a: ['Descendientes, ascendientes, colaterales, cónyuge','Solo hijos','Solo parientes cercanos','Solo herederos instituidos'], correct: 0},
            {q: '¿Qué es la Desheredación?', a: ['Acto mediante el cual se priva a un heredero de su herencia','Renunciar a una herencia','Dividir una herencia','Impugnar un testamento'], correct: 0},
            {q: 'La prescripción para ejercer acciones de sucesión es de:', a: ['10 años','5 años','3 años','15 años'], correct: 0}
        ],
derecho_mercantil: [
            {q: '¿Qué es el Derecho Mercantil?', a: ['Rama que regula actos de comercio','Derecho civil aplicado','Derecho administrativo','Derecho laboral'], correct: 0},
            {q: '¿Cuál es el objeto del Derecho Mercantil en México?', a: ['Regular el comercio y actividades mercantiles','Establecer impuestos','Controlar precios','Administrar el Estado'], correct: 0},
            {q: '¿Qué es un Acto de Comercio?', a: ['Acción u operación lícita de compraventa o intermediación de bienes','Relación laboral','Acto administrativo','Contrato de familia'], correct: 0},
            {q: 'Ejemplos de Actos de Comercio son:', a: ['Compraventa de mercaderías, comisión, agencia, transporte','Matrimonio, adopción','Herencia, testamento','Servicios domésticos'], correct: 0},
            {q: '¿Cuál es la diferencia entre Comerciante y no Comerciante?', a: ['Comerciante: realiza actos de comercio habitualmente; no comerciante: esporádicamente','Comerciante: tiene licencia solamente','No hay diferencia legal','Comerciante: vende solo al mayoreo'], correct: 0},
            {q: '¿Qué es la Capacidad Mercantil?', a: ['Aptitud legal para ejercer el comercio','Conocimiento en negocios','Habilidad de vendedor','Experiencia empresarial'], correct: 0},
            {q: '¿Cuál es la edad mínima para ser Comerciante en México?', a: ['18 años','16 años','21 años','25 años'], correct: 0},
            {q: '¿Qué es el Registro de Comercio?', a: ['Sistema que registra a comerciantes e inscribe actos mercantiles','Base de datos de tributación','Licencia de operación','Registro de propiedades'], correct: 0},
            {q: '¿Qué tipos de Sociedades Mercantiles existen en México?', a: ['Sociedad en Nombre Colectivo, Comandita Simple, S.A., S.A. de C.V., S.C., S.A.P.I.','Solo Sociedades Anónimas','Asociaciones civiles solamente','Cooperativas solamente'], correct: 0},
            {q: 'En una Sociedad Anónima (S.A.), la responsabilidad de socios es:', a: ['Limitada al capital aportado','Ilimitada y solidaria','Personal e ilimitada','Compartida con la empresa'], correct: 0},
            {q: 'En una Sociedad en Nombre Colectivo, los socios tienen responsabilidad:', a: ['Solidaria, ilimitada y personal','Limitada al capital','Solo del socio administrador','Compartida equitativamente'], correct: 0},
            {q: 'Una Sociedad en Comandita Simple tiene:', a: ['Socios comanditados (responsables) y comanditarios (limitados)','Solo socios con responsabilidad limitada','Solo socios con responsabilidad ilimitada','Socios iguales'], correct: 0},
            {q: '¿Qué es un Sindicato en Derecho Mercantil?', a: ['Asociación de comerciantes para defender intereses comunes','Grupo laboral de obreros','Asociación de profesionales','Cooperativa de crédito'], correct: 0},
            {q: '¿Cuál es el requisito principal para constituir una Sociedad Mercantil?', a: ['Acta constitutiva inscrita en Registro Público','Aprobación municipal solamente','Voto de socios únicamente','Autorización de Hacienda'], correct: 0},
            {q: '¿Qué es el Contrato de Compraventa Mercantil?', a: ['Intercambio de mercaderías por precio de dinero','Contrato de servicios','Contrato de arrendamiento','Contrato de comodato'], correct: 0},
            {q: 'En la Compraventa Mercantil, el vendedor debe:', a: ['Transferir la propiedad y garantizar pacíficamente','Solo transferir posesión','Mantener el bien indefinidamente','Permitir devoluciones siempre'], correct: 0},
            {q: '¿Qué es el Vicios Ocultos en una Compraventa?', a: ['Defectos no aparentes del bien que lo hacen inservible','Daño visible','Falta de certificación','Retraso en entrega'], correct: 0},
            {q: '¿Cuál es la garantía por Vicios Ocultos en Derecho Mercantil?', a: ['Saneamiento de evicción (propiedad) y por vicios ocultos','Solo devolución de dinero','Cambio por producto nuevo solamente','Descuento en precio'], correct: 0},
            {q: '¿Qué es el Contrato de Comisión?', a: ['Encargo para ejecutar actos de comercio por cuenta ajena, remunerando comisionista','Contrato de empleo','Mandato civil','Contrato de agencia'], correct: 0},
            {q: '¿Cuáles son las obligaciones del Comisionista?', a: ['Cumplir instrucciones, actuar diligentemente, rendir cuentas','Solo cobrar la comisión','Decidir libremente','Tercerizar servicios'], correct: 0},
            {q: '¿Qué es el Contrato de Agencia?', a: ['Encargo permanente para mediar transacciones mercantiles','Relación laboral fija','Contrato temporal de ventas','Permiso de distribución'], correct: 0},
            {q: '¿Cuál es la responsabilidad del Agente ante terceros?', a: ['Solidaria o mancomunada según el caso','Personal e ilimitada','Limitada al cliente solamente','Inexistente si actúa bien'], correct: 0},
            {q: '¿Qué es el Derecho de Retención?', a: ['Facultad de retener un bien hasta que se satisfaga acreencia','Derecho de propiedad','Posesión legal','Garantía hipotecaria'], correct: 0},
            {q: 'En un Contrato de Depósito Mercantil, el Depositario:', a: ['Recibe bien ajeno en custodia temporal','Es dueño del bien','Puede usar el bien libremente','Vende el depósito'], correct: 0},
            {q: '¿Qué es un Título de Crédito?', a: ['Documento que incorpra un derecho crediticio (cheque, pagaré, letra)','Comprobante de pago','Recibo de venta','Justificante tributario'], correct: 0},
            {q: 'Características de los Títulos de Crédito:', a: ['Incorporatividad, literalidad, autonomía','Solo negociabilidad','Personalización solamente','Formalidad notarial'], correct: 0},
            {q: '¿Qué es un Cheque?', a: ['Título de crédito que ordena pagar dinero del girador','Comprobante de depósito','Recibos de dinero','Letras de cambio'], correct: 0},
            {q: '¿Cuál es el plazo de presentación de un Cheque en México?', a: ['6 meses','1 año','3 meses','15 días'], correct: 0},
            {q: '¿Qué es un Pagaré?', a: ['Promesa incondicionada de pagar suma determinada a plazo fijo','Solicitud de crédito','Contrato de préstamo','Recibo de dinero'], correct: 0},
            {q: '¿Qué es una Letra de Cambio?', a: ['Orden de pago a tercera persona (girado) a favor de tenedor','Instrumento de crédito entre bancos','Comprobante tributario','Documento de identidad'], correct: 0},
            {q: '¿Qué es el Endoso en Títulos de Crédito?', a: ['Acto de transmisión del derecho mediante anotación en reverso','Aceptación de cheque','Devolución de documento','Cancelación de obligación'], correct: 0},
            {q: 'El Endoso puede ser:', a: ['En blanco (al portador) o nominativo (a persona específica)','Solo en blanco','Solo nominativo','Obligatoriamente autenticado'], correct: 0},
            {q: '¿Qué es la Aceptación en una Letra de Cambio?', a: ['Obligación que asume el girado de pagar la letra','Negación de pago','Venta de la letra','Cambio de domicilio'], correct: 0},
            {q: 'El Aval es:', a: ['Garantía de pago solidario de una obligación en título de crédito','Garantía hipotecaria','Depósito en garantía','Prenda mercantil'], correct: 0},
            {q: '¿Qué es el Protesto de un Título de Crédito?', a: ['Acta notarial que prueba falta de pago o aceptación','Cambio de tenedor','Renovación del documento','Solicitud de prórroga'], correct: 0},
            {q: '¿Quién está obligado a protestar un Título de Crédito?', a: ['Notario a solicitud del tenedor','Banco obligatoriamente','El deudor','La cámara de comercio'], correct: 0},
            {q: '¿Qué es una Letra de Cambio postdatada?', a: ['Letra con fecha futura de vencimiento','Letra vencida','Letra no aceptada','Letra rechazada'], correct: 0},
            {q: '¿Qué es la Quiebra en Derecho Mercantil?', a: ['Situación de insolvencia del comerciante (activos < pasivos)','Cierre voluntario de negocio','Jubilación empresarial','Cambio de giro comercial'], correct: 0},
            {q: '¿Cuáles son los requisitos para declarar en Quiebra?', a: ['Insolvencia, cesación de pagos, comerciante','Solo insolvencia','Mayoría de deudas','Aprobación de empleados'], correct: 0},
            {q: '¿Qué es el Concurso Mercantil?', a: ['Procedimiento legal para pagar deudas del insolvente distribuyendo activos','Competencia comercial','Acuerdo entre empresas','Fusión de sociedades'], correct: 0},
            {q: '¿Quién puede solicitar Concurso Mercantil?', a: ['El deudor o acreedores (con requisitos)','Solo acreedores','Clientes solamente','Autoridades solamente'], correct: 0},
            {q: 'Las Marcas y Patentes se regulan en:', a: ['Ley de Propiedad Industrial','Código Civil','Ley de Comercio','Ley Tributaria'], correct: 0},
            {q: '¿Cuál es el derecho de una Marca Registrada?', a: ['Usar exclusivamente en productos/servicios identificados','Monopolio total de la palabra','Derecho a producir similar','Control de precios'], correct: 0},
            {q: '¿Cuál es la duración de Registro de Marca en México?', a: ['10 años renovables indefinidamente','5 años','20 años','Indefinida'], correct: 0}
        ],
        microeconomia: [
            {q: '¿Qué es la Microeconomía?', a: ['Estudio de decisiones de individuos y empresas','Estudio de economía nacional','Análisis del sector público','Teoría del desarrollo económico'], correct: 0},
            {q: '¿Cuál es el concepto fundamental de escasez en economía?', a: ['Recursos finitos vs necesidades ilimitadas','Falta de dinero','Desempleo alto','Inflación', 'Exceso de producción'], correct: 0},
            {q: 'La Curva de Posibilidades de Producción (CPP) muestra:', a: ['Máxima producción posible con recursos y tecnología dados','Demanda de bienes','Ingresos disponibles','Preferencias de consumidores'], correct: 0},
            {q: '¿Qué es el Costo de Oportunidad?', a: ['Lo que se renuncia al elegir una alternativa','Dinero gastado en producción','Precio de mercado','Ganancia esperada'], correct: 0},
            {q: 'Un punto DENTRO de la CPP indica:', a: ['Ineficiencia (recursos no se usan plenamente)','Eficiencia máxima','Escasez de recursos','Crecimiento económico'], correct: 0},
            {q: 'Un punto FUERA de la CPP indica:', a: ['Imposible con recursos/tecnología actual','Máxima eficiencia','Equilibrio de mercado','Desempleo'], correct: 0},
            {q: '¿Qué sucede cuando hay progreso tecnológico?', a: ['La CPP se desplaza hacia afuera (mayor producción posible)','La CPP se contrae','No cambia la CPP','Desaparece la escasez'], correct: 0},
            {q: 'La Demanda de un bien se refiere a:', a: ['Cantidades dispuestas a comprar a distintos precios','Cantidad producida','Cantidad en inventario','Necesidad de consumo'], correct: 0},
            {q: 'La Ley de Demanda establece:', a: ['Relación inversa: sube precio → baja cantidad demandada','Relación directa: sube precio → sube demanda','Demanda es independiente de precio','Demanda es constante'], correct: 0},
            {q: 'La Curva de Demanda tiene pendiente:', a: ['Negativa (de izquierda a derecha hacia abajo)','Positiva','Horizontal','Vertical'], correct: 0},
            {q: 'Un movimiento SOBRE la curva de demanda ocurre por:', a: ['Cambio en el precio del bien','Cambio en preferencias','Cambio en ingresos','Cambio en precios relacionados'], correct: 0},
            {q: 'Un desplazamiento DE la curva de demanda ocurre por:', a: ['Cambios en ingresos, preferencias, precios de bienes relacionados','Solo cambio de precio del bien','Aumento de producción','Mejora en eficiencia'], correct: 0},
            {q: '¿Qué son Bienes Normales?', a: ['Demanda aumenta con ingresos (élastica al ingreso positiva)','Demanda disminuye con ingresos','No relacionados con ingresos','Bienes de lujo solamente'], correct: 0},
            {q: '¿Qué son Bienes Inferiores?', a: ['Demanda disminuye cuando sube ingreso (menos se compran)','Bienes de baja calidad','Bienes dañinos','Bienes prohibidos'], correct: 0},
            {q: '¿Qué son Bienes Sustitutos?', a: ['Bienes que pueden reemplazarse uno a otro (ej: café y té)','Bienes que se usan juntos','Bienes independientes','Bienes importados'], correct: 0},
            {q: '¿Qué son Bienes Complementarios?', a: ['Bienes que se consumen juntos (ej: pan y mantequilla)','Bienes que compiten','Bienes independientes','Bienes básicos'], correct: 0},
            {q: 'Cuando baja el precio de un bien sustituto, la demanda del bien original:', a: ['Disminuye (se sustituye por el más barato)','Aumenta','No cambia','Se duplica'], correct: 0},
            {q: 'Cuando baja el precio de un bien complementario, la demanda del bien original:', a: ['Aumenta (ambos más accesibles)','Disminuye','No cambia','Cambia según contexto'], correct: 0},
            {q: 'La Oferta se refiere a:', a: ['Cantidades dispuestas a vender a distintos precios','Cantidad disponible en mercado','Inventarios acumulados','Producción potencial'], correct: 0},
            {q: 'La Ley de Oferta establece:', a: ['Relación directa: sube precio → sube cantidad ofertada','Relación inversa','Oferta es independiente de precio','Oferta es constante'], correct: 0},
            {q: 'La Curva de Oferta tiene pendiente:', a: ['Positiva (sube de izquierda a derecha)','Negativa','Horizontal','Vertical'], correct: 0},
            {q: 'Un cambio en la Tecnología de producción afecta:', a: ['La curva de oferta (desplazamiento)','Solo el precio','La demanda exclusivamente','No afecta equilibrio'], correct: 0},
            {q: 'Un aumento en costos de producción causa:', a: ['Desplazamiento hacia la IZQUIERDA de la curva de oferta','Desplazamiento a la derecha','Giro de la curva','No afecta'], correct: 0},
            {q: '¿Qué es el Equilibrio de Mercado?', a: ['Punto donde Cantidad Demandada = Cantidad Ofertada','Máxima producción','Mínimo de precios','Igual número de oferentes y demandantes'], correct: 0},
            {q: 'En equilibrio, el Precio de Equilibrio es:', a: ['El precio donde se vacía el mercado (no hay exceso ni escasez)','El precio más alto posible','El precio más bajo posible','Precio fijado por gobierno'], correct: 0},
            {q: 'Cuando Precio > Precio de Equilibrio hay:', a: ['Exceso de Oferta (desempleo de factores)','Exceso de Demanda','Equilibrio','Escasez del bien'], correct: 0},
            {q: 'Cuando Precio < Precio de Equilibrio hay:', a: ['Exceso de Demanda (escasez del bien)','Exceso de Oferta','Equilibrio','Desempleo laboral'], correct: 0},
            {q: 'La Elasticidad Precio de la Demanda mide:', a: ['Sensibilidad de cantidad demandada ante cambios de precio (% cambio Qd / % cambio P)','Sensibilidad de oferta','Cambio absoluto en precio','Ingreso total'], correct: 0},
            {q: 'Cuando Elasticidad Precio Demanda > 1, la demanda es:', a: ['Elástica (cantidad muy sensible a precio)','Inelástica','Unitaria','Perfectamente inelástica'], correct: 0},
            {q: 'Cuando Elasticidad Precio Demanda < 1, la demanda es:', a: ['Inelástica (cantidad poco sensible a precio)','Elástica','Unitaria','Perfectamente elástica'], correct: 0},
            {q: 'Cuando Elasticidad Precio Demanda = 1, la demanda es:', a: ['Unitaria (cambio % igual en cantidad y precio)','Elástica','Inelástica','Nula'], correct: 0},
            {q: 'Bienes con demanda inelástica (Ep < 1):', a: ['Bienes de necesidad (sal, medicinas, alimentos básicos)','Bienes de lujo','Bienes suntuarios','Servicios de entretenimiento'], correct: 0},
            {q: 'Bienes con demanda elástica (Ep > 1):', a: ['Bienes de lujo, no esenciales, muchos sustitutos','Alimentos básicos','Servicios de salud esencial','Servicios de agua'], correct: 0},
            {q: 'La Elasticidad Ingreso de la Demanda mide:', a: ['Sensibilidad de cantidad demandada ante cambios en ingreso (% cambio Qd / % cambio I)','Cambio de precio','Satisfacción del consumidor','Número de compradores'], correct: 0},
            {q: 'Elasticidad Ingreso > 0 indica:', a: ['Bien normal (demanda ↑ con ingresos)','Bien inferior','Bien complementario','Bien sustituto'], correct: 0},
            {q: 'Elasticidad Ingreso < 0 indica:', a: ['Bien inferior (demanda ↓ con ingresos)','Bien normal','Bien de lujo','Bien de necesidad'], correct: 0},
            {q: 'La Elasticidad Cruzada de Demanda mide:', a: ['Sensibilidad de cantidad demandada de un bien ante cambios de precio de otro bien','Cambio en oferta propia','Cambio de preferencias','Cambio en calidad'], correct: 0},
            {q: 'Elasticidad Cruzada > 0 indica que los bienes son:', a: ['Sustitutos (compiten)','Complementarios','Independientes','Relacionados en oferta'], correct: 0},
            {q: 'Elasticidad Cruzada < 0 indica que los bienes son:', a: ['Complementarios (se consumen juntos)','Sustitutos','Independientes','Bienes normales'], correct: 0},
            {q: '¿Qué es el Excedente del Consumidor?', a: ['Diferencia entre lo que está dispuesto a pagar y lo que realmente paga','Dinero ahorrado en compras','Ingresos del consumidor','Gastos totales'], correct: 0},
            {q: '¿Qué es el Excedente del Productor?', a: ['Diferencia entre precio que recibe y costo mínimo de producción','Ganancia neta anual','Ingresos por ventas','Costos operacionales'], correct: 0},
            {q: 'El Excedente Total del Mercado es:', a: ['Excedente Consumidor + Excedente Productor','Ingreso nacional','PIB total','Índice de precios'], correct: 0},
            {q: '¿Qué ocurre con el Excedente Total cuando hay Eficiencia Asignativa?', a: ['Se maximiza (óptimo de Pareto)','Se minimiza','Se distribuye equitativamente','No existe'], correct: 0},
            {q: 'El Costo Marginal es:', a: ['Costo adicional de producir una unidad más (ΔCT / ΔQ)','Costo promedio total','Costo variable promedio','Costo hundido'], correct: 0},
            {q: 'El Ingreso Marginal es:', a: ['Ingreso adicional por vender una unidad más (ΔIT / ΔQ)','Ingreso promedio','Ingreso total anual','Precio de mercado'], correct: 0},
            {q: 'Una empresa maximiza ganancia cuando:', a: ['Ingreso Marginal = Costo Marginal (IM = CM)','Ingreso Total > Costo Total','Producción es máxima','Precio es mínimo'], correct: 0},
            {q: 'El Punto de Cierre ocurre cuando:', a: ['Precio < Costo Variable Medio (el precio no cubre ni siquiera costos variables)','Ganancia es cero','Costos fijos son altos','Demanda desaparece'], correct: 0},
            {q: 'En Competencia Perfecta, una empresa enfrenta una demanda:', a: ['Perfectamente elástica (horizontal al precio de mercado)','Ligeramente elástica','Inelástica','Vertical'], correct: 0},
            {q: '¿Cuántas empresas hay típicamente en Competencia Perfecta?', a: ['Muchas (infinitas)','Dos o tres','Una','Ninguna'], correct: 0},
            {q: 'En Monopolio, el Monopolista es:', a: ['Único oferente de un bien sin sustitutos cercanos','Uno de muchos competidores','Comprador de mercado','Mediador neutral'], correct: 0},
            {q: 'El Monopolio puede surgir por:', a: ['Barreras a entrada (economías escala, tecnología, patentes, recursos)','Libre entrada','Muchos competidores','Subsidios al competidor'], correct: 0}
        ]
  };

    // Utilidades: mezclar array y seleccionar subset aleatorio
    function shuffleArray(arr){
        const a = arr.slice();
        for(let i = a.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function sampleArray(arr, n){
        if(!Array.isArray(arr)) return [];
        if(arr.length <= n) return shuffleArray(arr);
        const shuffled = shuffleArray(arr);
        return shuffled.slice(0, n);
    }

    // Clona pregunta y mezcla opciones, ajustando índice correcto
    function cloneQuestionWithShuffledOptions(item){
        const copy = { q: item.q, a: item.a.slice(), correct: item.correct };
        const indexed = copy.a.map((opt, idx) => ({opt, idx}));
        const shuffled = shuffleArray(indexed);
        const newOptions = shuffled.map(x => x.opt);
        const newCorrect = shuffled.findIndex(x => x.idx === copy.correct);
        return { q: copy.q, a: newOptions, correct: newCorrect };
    }

    function qs(sel){ return document.querySelector(sel); }

    function getParam(name){
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const materia = getParam('materia') || '';
    const materiaTitle = qs('#materia-title');
    const materiaDesc = qs('#materia-desc');
    const startBtn = qs('#start-quiz');
    const retryBtn = qs('#retry-quiz');
    const quizArea = qs('#quiz-area');

    if(materia){
        materiaTitle.textContent = materia.charAt(0).toUpperCase() + materia.slice(1);
        materiaDesc.textContent = 'Cuestionario de: ' + materiaTitle.textContent;
    } else {
        materiaTitle.textContent = 'Seleccione una materia desde la página principal';
    }

    function renderQuestions(list){
        quizArea.innerHTML = '';
        const form = document.createElement('form');
        list.forEach((item, idx) => {
            const field = document.createElement('fieldset');
            const legend = document.createElement('legend');
            legend.textContent = (idx + 1) + '. ' + item.q;
            field.appendChild(legend);
            item.a.forEach((opt, i) => {
                const label = document.createElement('label');
                label.style.display = 'block';
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'q' + idx;
                radio.value = i;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(' ' + opt));
                field.appendChild(label);
            });
            form.appendChild(field);
        });
        const submit = document.createElement('button');
        submit.type = 'button';
        submit.textContent = 'Enviar respuestas';
        submit.addEventListener('click', function(){
            validate(form, list);
        });
        form.appendChild(submit);
        quizArea.appendChild(form);
    }

    function startQuiz(){
        if(startBtn) startBtn.style.display = 'none';
        if(retryBtn) retryBtn.style.display = 'none';
        const full = bank[materia] || [];
        if(full.length === 0){
            quizArea.innerHTML = '<p>No hay preguntas preparadas para esta materia.</p>';
            return;
        }
        // Seleccionar aleatoriamente 30 preguntas distintas de las disponibles
        const selected = sampleArray(full, 30).map(q => cloneQuestionWithShuffledOptions(q));
        renderQuestions(selected);
    }

    if(startBtn){
        startBtn.addEventListener('click', startQuiz);
    }
    if(retryBtn){
        retryBtn.addEventListener('click', startQuiz);
    }

    function validate(form, list){
        let score = 0;
        list.forEach((item, idx) => {
            const sel = form.querySelector('input[name="q' + idx + '"]:checked');
            const ans = sel ? parseInt(sel.value,10) : null;
            if(ans === item.correct) score++;
        });
        const total = list.length;
        quizArea.innerHTML = '<p>Obtuviste ' + score + ' de ' + total + ' respuestas correctas.</p>';
        if(retryBtn) retryBtn.style.display = 'inline-block';
        // Guardar resultado en localStorage
        try{
            // guardar resultados por usuario para no sobreescribir otros usuarios
            const user = sessionStorage.getItem('user') || localStorage.getItem('user') || 'guest';
            const key = 'quizResults_' + user;
            const resultsRaw = localStorage.getItem(key);
            const results = resultsRaw ? JSON.parse(resultsRaw) : [];
            const entry = {
                usuario: user,
                materia: materia || 'desconocida',
                date: new Date().toISOString(),
                correct: score,
                total: total
            };
            results.push(entry);
            // mantener solo los últimos 50 por usuario
            const trimmed = results.slice(-50);
            localStorage.setItem(key, JSON.stringify(trimmed));
        }catch(e){
            console.error('No se pudo guardar el resultado', e);
        }
    }

    if(startBtn){
        startBtn.addEventListener('click', function(){
            const full = bank[materia] || [];
            if(full.length === 0){
                quizArea.innerHTML = '<p>No hay preguntas preparadas para esta materia.</p>';
                return;
            }
            // Seleccionar aleatoriamente 30 preguntas distintas de las disponibles
            const selected = sampleArray(full, 30).map(q => cloneQuestionWithShuffledOptions(q));
            renderQuestions(selected);
        });
    }
})();
