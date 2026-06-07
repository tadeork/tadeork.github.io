document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Slide Deck Controller (PPT Presentation Mode)
    // ==========================================================================
    const slides = document.querySelectorAll('.slide-card');
    const dots = document.querySelectorAll('.deck-dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (totalSlides === 0) return;
        
        // Clamp index
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;

        currentSlideIndex = index;

        // Apply slide animation classes
        slides.forEach((slide, idx) => {
            slide.classList.remove('active', 'prev', 'next');
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else if (idx < currentSlideIndex) {
                slide.classList.add('prev');
            } else {
                slide.classList.add('next');
            }
        });

        // Update dot states
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlideIndex);
        });

        // Update control button states
        if (prevBtn) prevBtn.disabled = (currentSlideIndex === 0);
        if (nextBtn) nextBtn.disabled = (currentSlideIndex === totalSlides - 1);

        // Update top progress bar
        if (progressBar) {
            const percentage = (currentSlideIndex / (totalSlides - 1)) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    // Expose slide control functions to window for HTML inline event listeners
    window.nextSlide = function() {
        if (currentSlideIndex < totalSlides - 1) {
            showSlide(currentSlideIndex + 1);
        }
    };

    window.prevSlide = function() {
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1);
        }
    };

    window.goToSlide = function(index) {
        showSlide(index);
    };

    // Keyboard Arrow Keys navigation
    document.addEventListener('keydown', (e) => {
        const activeEl = document.activeElement;
        if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
            return;
        }

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            window.nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.prevSlide();
        }
    });

    // Initialize slide deck
    showSlide(0);

    // ==========================================================================
    // Interactive Prompt Builder
    // ==========================================================================
    const roleInput = document.getElementById('input-role');
    const contextInput = document.getElementById('input-context');
    const toneSelect = document.getElementById('input-tone');
    const formatSelect = document.getElementById('input-format');
    const previewOutput = document.getElementById('preview-output');
    const copyButton = document.getElementById('btn-copy-prompt');
    const copyText = document.getElementById('copy-text');

    function updatePrompt() {
        if (!previewOutput) return;

        const role = roleInput.value.trim() || 'un asistente de IA generalista';
        const context = contextInput.value.trim() || 'Sin pautas ni restricciones adicionales de contexto.';
        const tone = toneSelect.value;
        const format = formatSelect.value;

        const systemPrompt = `[ROL Y OBJETIVO]
Actúa como: ${role}.

[CONTEXTO Y REGLAS DE RESPUESTA]
${context}

[TONO Y ESTILO]
Tu tono de comunicación debe ser: ${tone}.

[FORMATO DE RESPUESTA]
Organiza tus respuestas como: ${format}.`;

        previewOutput.textContent = systemPrompt;
    }

    const promptInputs = [roleInput, contextInput, toneSelect, formatSelect];
    promptInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', updatePrompt);
            input.addEventListener('change', updatePrompt);
        }
    });

    if (copyButton && previewOutput) {
        copyButton.addEventListener('click', () => {
            const textToCopy = previewOutput.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopySuccess();
            }).catch(err => {
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    showCopySuccess();
                } catch (e) {
                    console.error('No se pudo copiar el texto', e);
                }
                document.body.removeChild(textArea);
            });
        });
    }

    function showCopySuccess() {
        if (!copyButton) return;
        const originalText = copyText ? copyText.textContent : 'Copiar bloque';
        if (copyText) copyText.textContent = '¡Copiado!';
        
        copyButton.style.backgroundColor = 'var(--accent-burgundy)';
        copyButton.style.color = 'var(--bg-paper)';

        setTimeout(() => {
            if (copyText) copyText.textContent = originalText;
            copyButton.style.backgroundColor = '';
            copyButton.style.color = '';
        }, 2000);
    }

    // Initialize prompt builder output
    updatePrompt();

    // ==========================================================================
    // Carbon Footprint Calculator
    // ==========================================================================
    const rangeQueries = document.getElementById('range-queries');
    const queriesVal = document.getElementById('queries-val');
    const selectModel = document.getElementById('select-model');
    
    const valEnergy = document.getElementById('val-energy');
    const valEnergyLed = document.getElementById('val-energy-led');
    const valWater = document.getElementById('val-water');
    const valCO2 = document.getElementById('val-co2');
    const valCO2Car = document.getElementById('val-co2-car');

    function calculateFootprint() {
        if (!rangeQueries || !selectModel) return;

        const queries = parseInt(rangeQueries.value);
        const modelFactor = parseFloat(selectModel.value);

        queriesVal.textContent = queries;

        // Constants per standard query
        const baseEnergy = 2.9; // Wh (IEA, 2024)
        const baseWater = 15;   // ml (Li et al., 2023)
        const co2Intensity = 0.45; // g/Wh
        const carEmission = 120; // g/km

        const dailyEnergy = queries * baseEnergy * modelFactor;
        const dailyWater = queries * baseWater * modelFactor;
        const dailyCO2 = dailyEnergy * co2Intensity;
        
        const ledHours = dailyEnergy / 10;
        const carKm = dailyCO2 / carEmission;

        if (valEnergy) valEnergy.textContent = `${dailyEnergy.toFixed(1)} Wh`;
        if (valEnergyLed) valEnergyLed.textContent = `${ledHours.toFixed(1)} horas`;
        
        if (valWater) {
            if (dailyWater >= 1000) {
                valWater.textContent = `${(dailyWater / 1000).toFixed(2)} Litros`;
            } else {
                valWater.textContent = `${Math.round(dailyWater)} ml`;
            }
        }

        if (valCO2) valCO2.textContent = `${dailyCO2.toFixed(1)} g CO2eq`;
        if (valCO2Car) valCO2Car.textContent = `${carKm.toFixed(2)} km`;
    }

    if (rangeQueries && selectModel) {
        rangeQueries.addEventListener('input', calculateFootprint);
        selectModel.addEventListener('change', calculateFootprint);
        
        // Run first calculation
        calculateFootprint();
    }

    // ==========================================================================
    // AI Profitability ROI Calculator (Slide 6)
    // ==========================================================================
    const rangeInvestment = document.getElementById('range-investment');
    const investmentVal = document.getElementById('investment-val');
    const valAmortization = document.getElementById('val-amortization');
    const valSubscribers = document.getElementById('val-subscribers');

    function calculateViability() {
        if (!rangeInvestment || !investmentVal || !valAmortization || !valSubscribers) return;

        const investment = parseFloat(rangeInvestment.value); // In Billions USD
        investmentVal.textContent = `$${investment}B`;

        // Calculate Amortization: investment * 1.5 (due to chip lifespan + energy costs)
        const amortization = investment * 1.5;
        valAmortization.textContent = `$${amortization.toFixed(1)}B`;

        // Break-even subscribers count at $20/month ($240/year per subscriber)
        // Subscribers needed = Amortization (in Billions) / 240
        // Convert to Millions: (Amortization * 1000) / 240
        const subscribersNeededMillions = (amortization * 1000) / (20 * 12);

        if (subscribersNeededMillions >= 1000) {
            valSubscribers.textContent = `${(subscribersNeededMillions / 1000).toFixed(2)}B`;
        } else {
            valSubscribers.textContent = `${subscribersNeededMillions.toFixed(1)}M`;
        }
    }

    if (rangeInvestment) {
        rangeInvestment.addEventListener('input', calculateViability);
        rangeInvestment.addEventListener('change', calculateViability);
        
        // Initial calculation
        calculateViability();
    }
});
