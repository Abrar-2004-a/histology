 // Flashcards data
        const flashcards = [
            { front: "What is histology?", back: "Histology is the study of the microscopic anatomy of cells and tissues." },
            { front: "How many major tissue types are there?", back: "There are four major tissue types: epithelial, connective, muscle, and nervous." },
            { front: "What is epithelial tissue?", back: "Epithelial tissue forms protective barriers and linings in the body." },
            { front: "What are the characteristics of epithelial tissue?", back: "Avascular, closely packed cells, basement membrane, free apical surface." },
            { front: "What are the types of epithelial tissue?", back: "Simple, stratified, glandular, and neuro-epithelium." },
            { front: "What is simple squamous epithelium?", back: "A single layer of flattened cells found in capillaries and alveoli." },
            { front: "Where is simple cuboidal epithelium found?", back: "In kidney tubules and ducts of exocrine glands." },
            { front: "What is pseudostratified epithelium?", back: "Appears stratified but all cells connect to the basement membrane." },
            { front: "What is keratinized stratified squamous epithelium?", back: "Multiple layers with keratinized surface, found in skin epidermis." },
            { front: "What is transitional epithelium?", back: "Changes shape with stretching, found in urinary bladder." },
            { front: "What is connective tissue?", back: "Tissue that supports, connects, or separates other tissues." },
            { front: "What is the origin of connective tissue?", back: "Mesoderm." },
            { front: "What are the components of connective tissue?", back: "Cells, fibers, and extracellular matrix." },
            { front: "What are the types of connective tissue fibers?", back: "Collagenous, elastic, and reticular fibers." },
            { front: "What are fibroblasts?", back: "Cells that produce collagen and other fibers in connective tissue." },
            { front: "What are macrophages?", back: "Phagocytic cells that engulf foreign particles and debris." },
            { front: "What is areolar connective tissue?", back: "Loose connective tissue with all fiber types, found under epithelia." },
            { front: "What is adipose tissue?", back: "Connective tissue specialized for fat storage." },
            { front: "What is cartilage?", back: "Semi-rigid connective tissue with chondrocytes in lacunae." },
            { front: "What is bone tissue?", back: "Rigid connective tissue with calcified matrix, provides support." },
            { front: "What is blood?", back: "Fluid connective tissue with formed elements in plasma." },
            { front: "What are the formed elements of blood?", back: "Red blood cells, white blood cells, and platelets." },
            { front: "What is muscle tissue?", back: "Tissue specialized for contraction and movement." },
            { front: "What are the three types of muscle tissue?", back: "Skeletal, cardiac, and smooth muscle." },
            { front: "What is skeletal muscle?", back: "Striated, voluntary muscle attached to bones." },
            { front: "What is cardiac muscle?", back: "Striated, involuntary muscle found only in the heart." },
            { front: "What are intercalated discs?", back: "Specialized junctions between cardiac muscle cells." },
            { front: "What is smooth muscle?", back: "Non-striated, involuntary muscle found in hollow organs." },
            { front: "What is the sarcolemma?", back: "The cell membrane of a muscle fiber." },
            { front: "What is the sarcoplasm?", back: "The cytoplasm of a muscle fiber." },
            { front: "What is nervous tissue?", back: "Tissue specialized for communication via electrical impulses." },
            { front: "What are the two cell types in nervous tissue?", back: "Neurons and glial cells." },
            { front: "What is a neuron?", back: "The functional unit of nervous tissue, transmits nerve impulses." },
            { front: "What are dendrites?", back: "Neuron processes that receive signals from other neurons." },
            { front: "What is an axon?", back: "A neuron process that transmits signals away from the cell body." },
            { front: "What is the myelin sheath?", back: "A fatty covering that insulates axons and speeds impulse conduction." },
            { front: "What are glial cells?", back: "Support cells in nervous tissue that protect and nourish neurons." },
            { front: "What is the central nervous system?", back: "The brain and spinal cord." },
            { front: "What is the peripheral nervous system?", back: "Nerves and ganglia outside the CNS." },
            { front: "What are the types of neurons by structure?", back: "Unipolar, bipolar, pseudounipolar, and multipolar." },
            { front: "What is a multipolar neuron?", back: "A neuron with multiple dendrites and one axon." },
            { front: "What is a bipolar neuron?", back: "A neuron with one dendrite and one axon." },
            { front: "What is a unipolar neuron?", back: "A neuron with a single process that divides into two branches." },
            { front: "What is the function of nervous tissue?", back: "To receive, process, and transmit information." },
            { front: "What are Nissl bodies?", back: "Granular structures in neuron cytoplasm involved in protein synthesis." },
            { front: "What are neurofibrils?", back: "Fine threads in neuron cytoplasm that help transmit impulses." },
            { front: "What is the node of Ranvier?", back: "Gaps in the myelin sheath where action potentials are generated." },
            { front: "What are Schwann cells?", back: "Glial cells in the PNS that form myelin sheaths." },
            { front: "What are oligodendrocytes?", back: "Glial cells in the CNS that form myelin sheaths." },
            { front: "What are astrocytes?", back: "Star-shaped glial cells that support and nourish neurons." }
        ];

        // MCQ data
        const mcqQuestions = [
            {
                question: "What is the study of tissues called?",
                options: ["Histology", "Cytology", "Anatomy", "Physiology"],
                correct: 0
            },
            {
                question: "How many major tissue types are there in the human body?",
                options: ["Three", "Four", "Five", "Six"],
                correct: 1
            },
            {
                question: "Which tissue type forms protective barriers and linings?",
                options: ["Connective tissue", "Muscle tissue", "Epithelial tissue", "Nervous tissue"],
                correct: 2
            },
            {
                question: "Which of the following is NOT a characteristic of epithelial tissue?",
                options: ["Avascular", "Closely packed cells", "Extensive extracellular matrix", "Basement membrane"],
                correct: 2
            },
            {
                question: "Simple squamous epithelium is found in:",
                options: ["Kidney tubules", "Capillaries", "Trachea", "Epidermis"],
                correct: 1
            },
            {
                question: "Which type of epithelium appears stratified but all cells connect to the basement membrane?",
                options: ["Simple columnar", "Stratified squamous", "Transitional", "Pseudostratified"],
                correct: 3
            },
            {
                question: "Keratinized stratified squamous epithelium is found in:",
                options: ["Mouth lining", "Esophagus", "Skin epidermis", "Urinary bladder"],
                correct: 2
            },
            {
                question: "Transitional epithelium is found in:",
                options: ["Urinary bladder", "Trachea", "Small intestine", "Esophagus"],
                correct: 0
            },
            {
                question: "Connective tissue originates from:",
                options: ["Ectoderm", "Mesoderm", "Endoderm", "Neuroectoderm"],
                correct: 1
            },
            {
                question: "Which of the following is NOT a component of connective tissue?",
                options: ["Cells", "Fibers", "Extracellular matrix", "Tight junctions"],
                correct: 3
            },
            {
                question: "Which cells produce collagen fibers in connective tissue?",
                options: ["Macrophages", "Fibroblasts", "Mast cells", "Plasma cells"],
                correct: 1
            },
            {
                question: "Which type of connective tissue fiber is stretchable?",
                options: ["Collagenous", "Elastic", "Reticular", "All of the above"],
                correct: 1
            },
            {
                question: "Areolar connective tissue is classified as:",
                options: ["Dense regular", "Dense irregular", "Loose", "Specialized"],
                correct: 2
            },
            {
                question: "Adipose tissue is specialized for:",
                options: ["Protection", "Fat storage", "Blood formation", "Impulse conduction"],
                correct: 1
            },
            {
                question: "Cartilage and bone are types of:",
                options: ["Epithelial tissue", "Muscle tissue", "Connective tissue", "Nervous tissue"],
                correct: 2
            },
            {
                question: "Blood is classified as:",
                options: ["Epithelial tissue", "Muscle tissue", "Connective tissue", "Nervous tissue"],
                correct: 2
            },
            {
                question: "Which of the following is NOT a formed element of blood?",
                options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                correct: 3
            },
            {
                question: "How many types of muscle tissue are there?",
                options: ["One", "Two", "Three", "Four"],
                correct: 2
            },
            {
                question: "Skeletal muscle is characterized as:",
                options: ["Striated and voluntary", "Non-striated and voluntary", "Striated and involuntary", "Non-striated and involuntary"],
                correct: 0
            },
            {
                question: "Cardiac muscle is found in:",
                options: ["Blood vessels", "Heart", "Intestines", "All of the above"],
                correct: 1
            },
            {
                question: "Intercalated discs are characteristic of:",
                options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All muscle types"],
                correct: 1
            },
            {
                question: "Smooth muscle is found in:",
                options: ["Biceps", "Heart", "Stomach", "All of the above"],
                correct: 2
            },
            {
                question: "The cell membrane of a muscle fiber is called:",
                options: ["Sarcoplasm", "Sarcolemma", "Myofibril", "Endomysium"],
                correct: 1
            },
            {
                question: "Nervous tissue originates from:",
                options: ["Ectoderm", "Mesoderm", "Endoderm", "Mesenchyme"],
                correct: 0
            },
            {
                question: "The functional unit of nervous tissue is the:",
                options: ["Glial cell", "Neuron", "Axon", "Dendrite"],
                correct: 1
            },
            {
                question: "Which part of a neuron receives signals?",
                options: ["Axon", "Dendrite", "Cell body", "Myelin sheath"],
                correct: 1
            },
            {
                question: "Which part of a neuron transmits signals away from the cell body?",
                options: ["Axon", "Dendrite", "Cell body", "Nissl bodies"],
                correct: 0
            },
            {
                question: "The myelin sheath functions to:",
                options: ["Produce neurotransmitters", "Protect and insulate axons", "Receive signals", "Store nutrients"],
                correct: 1
            },
            {
                question: "Which cells form myelin in the peripheral nervous system?",
                options: ["Oligodendrocytes", "Astrocytes", "Schwann cells", "Microglia"],
                correct: 2
            },
            {
                question: "The central nervous system includes:",
                options: ["Brain and spinal cord", "Cranial and spinal nerves", "Sensory receptors", "All of the above"],
                correct: 0
            },
            {
                question: "Which type of neuron has multiple dendrites and one axon?",
                options: ["Unipolar", "Bipolar", "Pseudounipolar", "Multipolar"],
                correct: 3
            },
            {
                question: "Nissl bodies are involved in:",
                options: ["Impulse conduction", "Protein synthesis", "Myelin formation", "Neurotransmitter storage"],
                correct: 1
            },
            {
                question: "Nodes of Ranvier are:",
                options: ["Junctions between neurons", "Gaps in the myelin sheath", "Types of glial cells", "Sensory receptors"],
                correct: 1
            },
            {
                question: "Which glial cells support and nourish neurons in the CNS?",
                options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
                correct: 2
            },
            {
                question: "What is the main function of nervous tissue?",
                options: ["Support", "Movement", "Communication", "Protection"],
                correct: 2
            },
            {
                question: "Which tissue is avascular?",
                options: ["Epithelial", "Connective", "Muscle", "Nervous"],
                correct: 0
            },
            {
                question: "Which tissue has the greatest capacity for regeneration?",
                options: ["Epithelial", "Connective", "Muscle", "Nervous"],
                correct: 0
            },
            {
                question: "Which connective tissue cell produces antibodies?",
                options: ["Fibroblast", "Macrophage", "Plasma cell", "Mast cell"],
                correct: 2
            },
            {
                question: "Which connective tissue cell stores histamine?",
                options: ["Fibroblast", "Macrophage", "Plasma cell", "Mast cell"],
                correct: 3
            },
            {
                question: "Tendons are composed of:",
                options: ["Dense regular connective tissue", "Dense irregular connective tissue", "Elastic connective tissue", "Areolar connective tissue"],
                correct: 0
            },
            {
                question: "The dermis of the skin is composed of:",
                options: ["Dense regular connective tissue", "Dense irregular connective tissue", "Elastic connective tissue", "Areolar connective tissue"],
                correct: 1
            },
            {
                question: "Hyaline cartilage is found in:",
                options: ["Intervertebral discs", "External ear", "Articular surfaces", "Epiglottis"],
                correct: 2
            },
            {
                question: "Osteocytes are found in:",
                options: ["Cartilage", "Bone", "Blood", "Adipose tissue"],
                correct: 1
            },
            {
                question: "Erythrocytes are:",
                options: ["Red blood cells", "White blood cells", "Platelets", "Nerve cells"],
                correct: 0
            },
            {
                question: "Leukocytes are:",
                options: ["Red blood cells", "White blood cells", "Platelets", "Nerve cells"],
                correct: 1
            },
            {
                question: "Which muscle type has intercalated discs?",
                options: ["Skeletal", "Cardiac", "Smooth", "All of the above"],
                correct: 1
            },
            {
                question: "Which muscle type is under voluntary control?",
                options: ["Skeletal", "Cardiac", "Smooth", "Both skeletal and cardiac"],
                correct: 0
            },
            {
                question: "The sarcoplasmic reticulum stores:",
                options: ["Glycogen", "Oxygen", "Calcium ions", "ATP"],
                correct: 2
            },
            {
                question: "Neurotransmitters are stored in:",
                options: ["Dendrites", "Cell bodies", "Axon terminals", "Myelin sheath"],
                correct: 2
            }
        ];

        // DOM elements
        const topicButtons = document.querySelectorAll('.topic-btn');
        const topicNotes = document.querySelectorAll('.topic-notes');
        const flashcardContainer = document.getElementById('flashcardContainer');
        const prevCardBtn = document.getElementById('prevCard');
        const nextCardBtn = document.getElementById('nextCard');
        const cardCounter = document.getElementById('cardCounter');
        const questionText = document.getElementById('questionText');
        const optionInputs = document.querySelectorAll('input[name="mcq"]');
        const optionLabels = document.querySelectorAll('label[for^="option"]');
        const submitAnswerBtn = document.getElementById('submitAnswer');
        const nextQuestionBtn = document.getElementById('nextQuestion');
        const feedback = document.getElementById('feedback');
        const questionCounter = document.getElementById('questionCounter');
        const printBtn = document.getElementById('printBtn');

        // Initialize variables
        let currentCardIndex = 0;
        let currentQuestionIndex = 0;
        let score = 0;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Hide all topic notes initially
            topicNotes.forEach(note => {
                note.style.display = 'none';
            });
            
            // Show epithelial notes by default
            document.getElementById('epithelial-notes').style.display = 'block';
            
            // Initialize flashcards
            updateFlashcard();
            
            // Initialize MCQ
            updateMCQ();
        });

        // Topic navigation
        topicButtons.forEach(button => {
            button.addEventListener('click', function() {
                const topic = this.getAttribute('data-topic');
                
                // Hide all topic notes
                topicNotes.forEach(note => {
                    note.style.display = 'none';
                });
                
                // Show selected topic notes
                document.getElementById(`${topic}-notes`).style.display = 'block';
                
                // Scroll to notes section
                document.getElementById('notesSection').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Flashcard functionality
        function updateFlashcard() {
            const card = flashcards[currentCardIndex];
            const front = flashcardContainer.querySelector('.flashcard-front');
            const back = flashcardContainer.querySelector('.flashcard-back');
            
            front.querySelector('p').textContent = card.front;
            back.querySelector('p').textContent = card.back;
            cardCounter.textContent = `Card ${currentCardIndex + 1} of ${flashcards.length}`;
            
            // Reset flip state
            flashcardContainer.classList.remove('flipped');
        }

        flashcardContainer.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        prevCardBtn.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
            updateFlashcard();
        });

        nextCardBtn.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            updateFlashcard();
        });

        // MCQ functionality
        function updateMCQ() {
            const question = mcqQuestions[currentQuestionIndex];
            questionText.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
            
            optionLabels.forEach((label, index) => {
                label.textContent = question.options[index];
            });
            
            // Clear selections and feedback
            optionInputs.forEach(input => {
                input.checked = false;
            });
            feedback.classList.add('hidden');
            feedback.textContent = '';
            
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${mcqQuestions.length}`;
        }

        submitAnswerBtn.addEventListener('click', function() {
            let selectedOption = -1;
            
            optionInputs.forEach((input, index) => {
                if (input.checked) {
                    selectedOption = index;
                }
            });
            
            if (selectedOption === -1) {
                feedback.textContent = 'Please select an answer!';
                feedback.className = 'bg-yellow-100 text-yellow-800';
                feedback.classList.remove('hidden');
                return;
            }
            
            const question = mcqQuestions[currentQuestionIndex];
            if (selectedOption === question.correct) {
                feedback.textContent = 'Correct! Well done.';
                feedback.className = 'bg-green-100 text-green-800';
                score++;
            } else {
                feedback.textContent = `Incorrect. The correct answer is: ${question.options[question.correct]}`;
                feedback.className = 'bg-red-100 text-red-800';
            }
            
            feedback.classList.remove('hidden');
        });

        nextQuestionBtn.addEventListener('click', function() {
            currentQuestionIndex = (currentQuestionIndex + 1) % mcqQuestions.length;
            updateMCQ();
            
            // If we've completed all questions, show score
            if (currentQuestionIndex === 0) {
                alert(`Quiz completed! Your score: ${score}/${mcqQuestions.length}`);
                score = 0;
            }
        });

        // Print functionality
        printBtn.addEventListener('click', function() {
            window.print();
        });