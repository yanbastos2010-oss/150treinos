/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function App() {
  const [showDownsell, setShowDownsell] = useState(false);
  const [showBasicUpsell, setShowBasicUpsell] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const feedbacks = [
    'https://i.ibb.co/PvQZm6y9/Chat-GPT-Image-3-de-jun-de-2026-21-42-52.png',
    'https://i.ibb.co/R4gzttWW/Chat-GPT-Image-3-de-jun-de-2026-22-03-35.png',
    'https://i.ibb.co/Xf5kS6dF/Chat-GPT-Image-3-de-jun-de-2026-22-45-15.png'
  ];

  const nextFeedback = () => setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  const prevFeedback = () => setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Downsell Modal */}
      {showDownsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl md:rounded-[1.5rem] flex flex-col font-sans shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border-4 border-[#00B259]">
            <div className="bg-[#00B259] text-center pt-5 pb-4 px-4 sm:pt-6 sm:px-6 sm:pb-5 relative shrink-0">
              <button 
                type="button" 
                onClick={() => setShowDownsell(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-gray-900/60 hover:text-gray-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
              </button>
              <div className="inline-block bg-white text-gray-900 text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-2 sm:mb-3 tracking-wide">OFERTA ÚNICA</div>
              <h3 className="text-[22px] sm:text-3xl font-black italic tracking-tight leading-none uppercase"><span className="text-gray-900">ESPERA! NÃO VÁ </span><span className="text-white">EMBORA!</span></h3>
            </div>
            <div className="p-5 sm:p-8 text-center flex flex-col items-center overflow-y-auto">
              <div className="relative mb-5 sm:mb-6 max-w-[160px] sm:max-w-[240px] shrink-0 mt-2 sm:mt-0">
                <img loading="lazy" decoding="async" alt="Pacote Completo" className="w-full h-auto drop-shadow-lg" src="https://i.ibb.co/TqDpcx65/Untitled-design-3.png" />
                <div className="absolute -bottom-3 -right-3 bg-red-600 text-white font-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full transform rotate-[-8deg] shadow-lg border-2 border-white">70% OFF</div>
              </div>
              <p className="text-slate-600 font-medium text-xs sm:text-sm mb-4 leading-relaxed max-w-[300px]">Leve o <strong className="text-slate-800">PACOTE COMPLETO</strong> agora com todos os bônus incluídos por um valor especial:</p>
              <div className="mb-5 sm:mb-6 flex flex-col items-center shrink-0">
                <div className="text-slate-400 line-through text-[10px] sm:text-xs font-semibold mb-1">De R$ 147,00</div>
                <div className="flex items-baseline justify-center text-[#009A4D]">
                  <span className="text-base sm:text-xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-black tracking-tighter mx-1">14</span><span className="text-base sm:text-xl font-bold">,99</span>
                </div>
                <div className="text-[#009A4D] text-[10px] sm:text-xs font-black uppercase tracking-wide mt-1">ECONOMIZE +R$ 132,01 AGORA!</div>
              </div>
              <div className="w-full space-y-3 sm:space-y-4 shrink-0 mt-auto">
                <a href="https://checkout.pagmaterial.shop/VCCL1O8SD0WP" className="px-4 sm:px-8 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap animate-pulse-scale w-full bg-[#00B259] hover:bg-[#009A4D] text-white font-black text-[13px] sm:text-[14px] py-3.5 sm:py-4 rounded-xl shadow-[0_0_20px_rgba(0,178,89,0.4)] uppercase tracking-wide">SIM! QUERO O PREMIUM (R$ 14,99)</a>
                <a href="https://checkout.materialcompleto.shop/VCCL1O8SD2NG" onClick={() => setShowDownsell(false)} className="text-slate-500 text-center font-medium text-[11px] sm:text-xs hover:text-slate-800 transition-colors underline decoration-slate-300 underline-offset-4 pb-2 sm:pb-0 block w-full">Não, prefiro continuar com o básico por R$ 10,00</a>
              </div>
            </div>
            <div className="bg-slate-50 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-6 border-t border-slate-100 shrink-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-emerald-500" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Compra Segura
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#00B259" stroke="#00B259" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      )}
      {showBasicUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-[385px] max-h-[95vh] sm:max-h-[92vh] bg-white rounded-2xl md:rounded-[1.5rem] flex flex-col font-sans shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#00B259] text-center pt-5 pb-4 px-5 sm:pt-6 sm:px-6 sm:pb-5 relative shrink-0">
              <button 
                type="button" 
                onClick={() => setShowBasicUpsell(false)}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
              <div className="inline-block bg-white text-[#00B259] text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-1.5 sm:mb-3 tracking-wide">OFERTA VÁLIDA SÓ NESTE MOMENTO</div>
              <h3 className="text-[19px] sm:text-2xl font-black italic tracking-tight leading-none uppercase text-white">Espere! Antes de finalizar...</h3>
            </div>
            
            <div className="px-4 py-4.5 sm:p-7 text-center flex flex-col items-center overflow-y-auto w-full">
              <p className="text-slate-600 font-semibold text-[12.5px] sm:text-sm mb-3.5 leading-relaxed max-w-[340px] mt-0.5 sm:mt-0">
                Você escolheu o plano básico de <strong className="text-slate-800">R$ 10,00</strong>, mas por apenas <strong className="text-[#00B259]">R$ 9,90 a mais</strong> pode liberar o <span className="text-slate-800 font-normal">Pacote Completo</span>, com acesso total a +250 Dinâmicas de Treinos de Goleiros e todos os bônus.
              </p>
 
               <div className="w-full mb-4 sm:mb-6 text-left shrink-0 max-w-[340px] mx-auto bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col items-center pb-2.5 sm:pb-3.5 border-b border-slate-200/80">
                  <div className="flex items-baseline justify-center text-[#009A4D]">
                    <span className="text-base sm:text-xl font-bold">R$</span><span className="text-[48px] sm:text-6xl font-black tracking-tighter mx-1 leading-none">19</span><span className="text-base sm:text-xl font-bold">,90</span>
                  </div>
                </div>
 
                <div className="space-y-2 sm:space-y-2.5 mt-2.5 sm:mt-3.5">
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#00B259] shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>+250 DINÂMICAS PARA TREINOS DE GOLEIROS</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#00B259] shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[12px] font-bold text-slate-700 leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#00B259] shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>BÔNUS EXCLUSIVOS</span>
                  </div>
                </div>
              </div>
 
              <div className="w-full space-y-2.5 sm:space-y-4 shrink-0 mt-auto">
                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NF" 
                  className="px-5 transition-all flex items-center justify-center gap-2 cursor-pointer w-full bg-[#00B259] hover:bg-[#009A4D] text-white font-black text-[13px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(0,178,89,0.35)] uppercase tracking-wide text-center"
                >
                  SIM, QUERO O PLANO COMPLETO!
                </a>
                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NG" 
                  onClick={() => setShowBasicUpsell(false)} 
                  className="text-slate-500 hover:text-slate-800 text-center font-bold text-xs sm:text-sm transition-colors underline decoration-slate-300 underline-offset-4 py-1 block w-full"
                >
                  Não, prefiro o plano básico
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-slate-900 py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-200">
          <span className="w-2 h-2 bg-[#00B259] rounded-full animate-pulse"></span>
          OFERTA VÁLIDA ATÉ HOJE <span className="text-white font-medium">({new Date().toLocaleDateString('pt-BR')})</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-[30px] font-black leading-tight mb-4 md:mb-6 text-gray-900 text-center font-['Plus_Jakarta_Sans']">
          +250 Dinâmicas para <span className="text-[#00B259]">Treinos de Goleiros</span> prontas para aplicar
        </h1>

        <div className="mb-8 md:mb-10 flex justify-center px-4 sm:px-0">
          <img decoding="async" alt="Treinos de Goleiros Mockup" className="max-w-[400px] sm:max-w-[485px] w-full h-auto drop-shadow-md rounded-lg" referrerPolicy="no-referrer" src="https://i.ibb.co/Qjx0XrXb/Untitled-design-7.webp" />
        </div>
        <div className="flex flex-col items-center pb-8 md:pb-16 mt-4">
          <button 
            type="button" 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })} 
            className="w-[85%] max-w-[240px] sm:w-[220px] h-[50px] px-8 sm:px-10 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-[#00B259] text-white hover:bg-[#009A4D] shadow-sm hover:shadow" 
            id="6040b8d1-48ee-ef7f-0c73-c68186954454"
          >
            Quero Agora!
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-2 justify-center">
            <div className="flex items-center gap-0.5">
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
              <span className="text-yellow-400 text-sm leading-none">⭐</span>
            </div>
            <p className="text-xs font-bold text-slate-700 tracking-wider">+5MIL AVALIAÇÕES</p>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50 border-t-4 border-white font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0">O Que Você Vai Receber</h2>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: +250 Dinâmicas Prontas */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00B259] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(0,178,89,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-6 h-6 shrink-0" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-tight">+250 Dinâmicas Prontas</h3>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">Dinâmicas organizadas e fáceis de aplicar nos treinos. É só abrir e começar.</p>
            </div>

            {/* Card 2: Para Todos os Níveis */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00B259] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(0,178,89,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 shrink-0" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-tight">Para Todos os Níveis</h3>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">Do iniciante ao avançado, com evolução técnica progressiva.</p>
            </div>

            {/* Card 3: 100% Organizado */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00B259] rounded-xl flex items-center justify-center text-white mb-5 shadow-[0_4px_12px_rgba(0,178,89,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-tight">100% Organizadas</h3>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">Separadas por nível, objetivo e fundamento (posicionamento, defesas, saídas do gol, reposição, 1x1 e mais).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="feedbacks">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-2 sm:px-0 whitespace-nowrap">Feedbacks de quem usou</h2>
          </div>
          <div className="max-w-[280px] sm:max-w-xl mx-auto relative group">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-slate-900">
              <div 
                className="flex transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${currentFeedback * 100}%)` }}
              >
                {feedbacks.map((src, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img alt={`Feedback ${index + 1}`} className="w-full h-auto object-cover" src={src} />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevFeedback}
              className="absolute left-[-15px] sm:left-[-30px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all shadow-lg z-30 cursor-pointer" 
              id="2260ea4b-adca-5b4c-9091-8b439ae8ea8b"
              aria-label="Feedback anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left sm:hidden" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left hidden sm:block" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button 
              onClick={nextFeedback}
              className="absolute right-[-15px] sm:right-[-30px] top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all shadow-lg z-30 cursor-pointer" 
              id="61a38552-b42b-9f64-9356-98e1ca45871a"
              aria-label="Próximo feedback"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right sm:hidden" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right hidden sm:block" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
            <div className="flex justify-center gap-2 mt-8">
              {feedbacks.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentFeedback(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all cursor-pointer ${currentFeedback === index ? 'bg-[#00B259] w-6 sm:w-8' : 'bg-slate-300 w-2 sm:w-3'}`} 
                  id={`feedback-dot-${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0">Escolha seu Plano</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-2 sm:px-0">
            {/* PLAN 1: R$10 (Standard / Básico) */}
            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border-2 border-slate-200 flex flex-col relative shadow-md text-slate-800 hover:border-slate-300 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center text-slate-900 mt-2 sm:mt-0">Plano Básico</h3>
              
              <div className="text-center w-full mb-8">
                <div className="text-slate-400 line-through text-sm mb-1">R$ 47,00</div>
                <div className="flex items-baseline justify-center mb-1 text-slate-950">
                  <span className="text-xl sm:text-2xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-bold tracking-tight">10</span><span className="text-xl sm:text-2xl font-bold">,00</span>
                </div>
                <div className="text-slate-500 text-xs mt-1">pagamento único</div>
              </div>

              <ul className="text-left w-full space-y-4 mb-8">
                {[
                  { text: "+250 Dinâmicas para Treinos de Goleiros", checked: true },
                  { text: "Acesso Digital", checked: true },
                  { text: "Garantia de 7 dias", checked: true },
                  { text: "Bônus Exclusivos", checked: false },
                  { text: "Atualizações Mensais", checked: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] sm:text-sm">
                    {item.checked ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#00B259] shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x text-red-500 shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    )}
                    <span className="leading-tight text-slate-700">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-3 w-full mt-auto">
                <button 
                  type="button"
                  onClick={() => setShowBasicUpsell(true)}
                  className="w-[85%] max-w-[240px] sm:w-[220px] h-[50px] px-8 sm:px-10 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow animate-scale-pulse" 
                  id="checkout-basico-btn"
                >
                  Comprar agora!
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
                <div className="text-slate-500 text-xs font-medium italic">Acesso Imediato e Vitalício</div>
              </div>
            </div>

            {/* PLAN 2: R$27 (Premium / Profissional Completo) */}
            <div className="bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 flex flex-col relative shadow-xl text-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00B259] text-white font-bold px-6 py-1.5 rounded-full text-xs flex items-center gap-2 whitespace-nowrap uppercase tracking-wider">Mais Escolhido</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center text-white mt-2 sm:mt-0">Plano Premium</h3>
              
              <div className="mt-4"></div>

              <div className="text-center w-full mb-8">
                <div className="text-slate-400 line-through text-sm mb-1">R$ 97,00</div>
                <div className="flex items-baseline justify-center mb-1 text-white">
                  <span className="text-xl sm:text-2xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-bold tracking-tight">27</span><span className="text-xl sm:text-2xl font-bold">,00</span>
                </div>
                <div className="text-slate-400 text-xs mt-1">pagamento único</div>
              </div>

              <ul className="text-left w-full space-y-4 mb-8">
                {[
                  "+250 Dinâmicas para Treinos de Goleiros",
                  "Organizadas por Categorias",
                  "Método Passo a Passo",
                  "+ Bônus Exclusivos",
                  "Atualizações Mensais",
                  "Entrega via WhatsApp + Email",
                  "Suporte VIP 24/7",
                  "Garantia de 7 dias",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-[13px] sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#00B259] shrink-0 mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-3 w-full mt-auto">
                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NE" 
                  className="w-[85%] max-w-[240px] sm:w-[220px] h-[50px] px-8 sm:px-10 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-base cursor-pointer whitespace-nowrap bg-[#00B259] text-white hover:bg-[#009A4D] shadow-sm hover:shadow animate-scale-pulse" 
                  id="checkout-premium-btn"
                >
                  Comprar agora!
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <div className="text-slate-400 text-xs font-medium italic">Acesso Imediato e Vitalício</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gray-50 border-t-4 border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 text-gray-900">Dúvidas Frequentes</h2>
          {[
            {
              q: "Como vou receber o acesso?",
              a: "O envio é imediato e 100% automático por WhatsApp e E-mail logo após a confirmação do pagamento."
            },
            {
              q: "O acesso é vitalício?",
              a: "Sim! Você paga apenas uma vez e tem acesso permanente para usar e baixar as dinâmicas quando quiser."
            },
            {
              q: "Para quem servem as dinâmicas?",
              a: "Para treinadores, preparadores de goleiro e goleiros de todos os níveis que querem otimizar seus treinos."
            },
            {
              q: "Preciso de parceiro para treinar?",
              a: "Não. A maioria das dinâmicas são adaptáveis, permitindo o treino individual ou com companheiros."
            },
            {
              q: "Como funciona a garantia de 7 dias?",
              a: "Se por qualquer motivo você achar que o material não é para você, basta pedir o reembolso e devolvemos todo o seu dinheiro."
            }
          ].map((faq, i) => (
            <details key={i} className="group border border-[#00B259]/20 rounded-lg mb-3 bg-white overflow-hidden text-left">
              <summary className="w-full text-left px-4 py-3 md:px-5 md:py-4 font-semibold text-gray-800 flex justify-between items-center focus:outline-none hover:bg-gray-50 text-sm md:text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-white text-gray-500 py-8 md:py-10 px-4 text-center text-xs md:text-sm border-t-4 border-white">
        <div className="max-w-4xl mx-auto">
          <p>© 2026 Treinos de Goleiros. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

