/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

export default function App() {
  const [showDownsell, setShowDownsell] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Downsell Modal */}
      {showDownsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl md:rounded-[1.5rem] flex flex-col font-sans shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border-4 border-[#FACC15]">
            <div className="bg-[#FACC15] text-center pt-5 pb-4 px-4 sm:pt-6 sm:px-6 sm:pb-5 relative shrink-0">
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
                <div className="flex items-baseline justify-center text-[#ca8a04]">
                  <span className="text-base sm:text-xl font-bold">R$</span><span className="text-5xl sm:text-6xl font-black tracking-tighter mx-1">14</span><span className="text-base sm:text-xl font-bold">,99</span>
                </div>
                <div className="text-[#ca8a04] text-[10px] sm:text-xs font-black uppercase tracking-wide mt-1">ECONOMIZE +R$ 132,01 AGORA!</div>
              </div>
              <div className="w-full space-y-3 sm:space-y-4 shrink-0 mt-auto">
                <a href="https://checkout.pagmaterial.shop/VCCL1O8SD0WP" className="px-4 sm:px-8 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap animate-pulse-scale w-full bg-[#FACC15] hover:bg-[#EAB308] text-gray-900 font-black text-[13px] sm:text-[14px] py-3.5 sm:py-4 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.4)] uppercase tracking-wide">SIM! QUERO O PREMIUM (R$ 14,99)</a>
                <a href="https://checkout.pagmaterial.shop/VCCL1O8SD0WO" onClick={() => setShowDownsell(false)} className="text-slate-500 text-center font-medium text-[11px] sm:text-xs hover:text-slate-800 transition-colors underline decoration-slate-300 underline-offset-4 pb-2 sm:pb-0 block w-full">Não, prefiro continuar com o básico por R$ 10,00</a>
              </div>
            </div>
            <div className="bg-slate-50 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-6 border-t border-slate-100 shrink-0">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-emerald-500" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Compra Segura
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#D92525] text-white py-2 px-2 sm:px-4 shadow-md relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4 relative z-10">
          <p className="text-sm font-black uppercase tracking-wide leading-none text-center sm:text-left whitespace-nowrap">
            OFERTA VÁLIDA ATÉ:
          </p>
          <div className="bg-white text-[#D92525] rounded-md px-2 py-0.5 font-black text-sm shadow-sm">
            {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 md:mb-6 text-gray-900 text-center font-['Plus_Jakarta_Sans']">
          +150 Treinos de Futevôlei <br className="hidden md:block" /> prontos para aplicar <span className="bg-gradient-to-r from-[#FACC15] to-[#EAB308] bg-clip-text text-transparent uppercase">+ Bônus</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-center">
          Treinos organizados por categorias, explicados e aplicáveis mesmo sem quadra ou parceiro.
        </p>
        <div className="mb-8 md:mb-10 flex justify-center">
          <img decoding="async" alt="Treinos de Futefutevôlei" className="max-w-full h-auto" referrerPolicy="no-referrer" src="https://i.ibb.co/TqDpcx65/Untitled-design-3.png" />
        </div>
        <div className="flex flex-col items-center pb-8 md:pb-16 mt-4">
          <a onClick={(e) => { e.preventDefault(); document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' }); }} href="#oferta" className="px-4 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-lg cursor-pointer whitespace-nowrap animate-pulse-scale bg-[#FACC15] hover:bg-[#EAB308] text-gray-900 shadow-lg shadow-yellow-500/20 w-full sm:w-auto">
            Quero Evoluir Meu Jogo Agora
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50 border-t-4 border-white font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0">O Que Você Vai Receber</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">Tudo o que você precisa para sair do amador ao profissional, organizado passo a passo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 hover:shadow-lg hover:border-[#FACC15] transition-all group flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-4 sm:mb-5 group-hover:bg-[#FACC15] group-hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play sm:w-6 sm:h-6 shrink-0" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-tight">+150 Treinos de Futevôlei</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Treinos prontos, organizados e simples de executar. É só abrir, escolher e começar, sem precisar pensar no que fazer.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 hover:shadow-lg hover:border-[#FACC15] transition-all group flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-4 sm:mb-5 group-hover:bg-[#FACC15] group-hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy sm:w-6 sm:h-6 shrink-0" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-tight">Treinos para Todos os Níveis</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Do iniciante ao intermediário. Você começa do básico e evolui de forma natural, sem travar.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 hover:shadow-lg hover:border-[#FACC15] transition-all group flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-4 sm:mb-5 group-hover:bg-[#FACC15] group-hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open sm:w-6 sm:h-6 shrink-0" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-tight">100% Organizados</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Todos os treinos são divididos por nível, objetivo e fundamento (controle, levantamento, ataque, defesa, posicionamento, etc.).</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 hover:shadow-lg hover:border-[#FACC15] transition-all group flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-4 sm:mb-5 group-hover:bg-[#FACC15] group-hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target sm:w-6 sm:h-6 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-tight">Estrutura Pronta</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Cada treino já vem com objetivo, tempo, execução e meta clara, pra você simplesmente seguir e evoluir sem dúvidas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-white border-t-4 border-white">
        <div className="container mx-auto px-4 sm:px-6"><div className="w-full max-w-3xl mx-auto"><div className="md:mb-12 text-center mb-8"><h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0">Benefícios Exclusivos</h2><p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">Vantagens que você só encontra aqui nesta metodologia exclusiva.</p></div><ul className="space-y-6"><li className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm"><div className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center sm:mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check sm:w-[18px] sm:h-[18px]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div><h4 className="font-bold text-slate-900 mb-1">Treine em Qualquer Lugar</h4><p className="text-slate-600 text-[13px] sm:text-sm">Exercícios adaptáveis para quadras ou espaços pequenos em casa.</p></div></li><li className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm"><div className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center sm:mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check sm:w-[18px] sm:h-[18px]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div><h4 className="font-bold text-slate-900 mb-1">Metodologia Validada</h4><p className="text-slate-600 text-[13px] sm:text-sm">Baseado no treinamento de atletas de elite adaptado para todos os níveis.</p></div></li><li className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm"><div className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center sm:mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check sm:w-[18px] sm:h-[18px]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div><h4 className="font-bold text-slate-900 mb-1">Acesso Vitalício</h4><p className="text-slate-600 text-[13px] sm:text-sm">Pague uma vez e tenha acesso para sempre, incluindo todas as atualizações.</p></div></li><li className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm"><div className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center sm:mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check sm:w-[18px] sm:h-[18px]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div><h4 className="font-bold text-slate-900 mb-1">Suporte Especializado</h4><p className="text-slate-600 text-[13px] sm:text-sm">Tire suas dúvidas diretamente com nossa equipe técnica na plataforma.</p></div></li></ul>
          <div className="mt-8 flex justify-center">
            <a href="#oferta" className="px-4 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[14px] sm:text-lg cursor-pointer whitespace-nowrap animate-pulse-scale bg-[#FACC15] hover:bg-[#EAB308] text-gray-900 shadow-lg shadow-yellow-500/20 w-full sm:w-auto mx-auto" id="d0647b42-70b5-646e-c962-b86cdf78076a">Quero Garantir Minha Vaga</a>
          </div>
        </div></div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gray-50 border-t-4 border-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="inline-flex items-center text-[#FACC15] border border-[#FACC15]/20 bg-[#FACC15]/5 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift w-4 h-4 mr-2" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg> BÔNUS EXCLUSIVOS
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">Receba 3 Bônus <span className="text-[#FACC15]">Exclusivos</span></h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl">Hoje você também recebe esses materiais sem custo adicional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl border-2 border-[#FACC15] shadow-[0_0_15px_rgba(250,204,21,0.1)] flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] transition-all h-full text-center group">
              <div className="bg-gray-50 h-56 md:h-72 flex items-center justify-center p-4">
                <img loading="lazy" decoding="async" alt="Certificado" className="max-w-full max-h-full object-contain rounded-xl shadow-sm" src="https://i.ibb.co/ymXfZyFV/c63229f6-4152-4b66-af6b-d4e929eb7e2e.png" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-gray-900 mb-1 leading-tight">Certificado de Conclusão</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow">Comprove sua evolução no futevôlei com um certificado ao finalizar o treinamento.</p>
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-center gap-3">
                  <span className="text-red-500 line-through text-sm font-medium">R$ 49,90</span>
                  <div className="bg-[#FACC15] text-gray-900 font-black px-3 py-1 rounded text-[10px] uppercase tracking-tighter">GRÁTIS</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#FACC15] shadow-[0_0_15px_rgba(250,204,21,0.1)] flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] transition-all h-full text-center group">
              <div className="bg-gray-50 h-56 md:h-72 flex items-center justify-center p-4">
                <img loading="lazy" decoding="async" alt="Dinâmicas" className="max-w-full max-h-full object-contain rounded-xl shadow-sm" src="https://i.ibb.co/b4BJjSc/03e484be-7e78-4705-a3d9-7f8f4da1b294.png" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-gray-900 mb-1 leading-tight">+50 Aquecimentos Prontos</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow">Aquecimentos prontos que já ensinam fundamento e deixam a aula fluir melhor.</p>
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-center gap-3">
                  <span className="text-red-500 line-through text-sm font-medium">R$ 34,90</span>
                  <div className="bg-[#FACC15] text-gray-900 font-black px-3 py-1 rounded text-[10px] uppercase tracking-tighter">GRÁTIS</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#FACC15] shadow-[0_0_15px_rgba(250,204,21,0.1)] flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] transition-all h-full text-center group">
              <div className="bg-gray-50 h-56 md:h-72 flex items-center justify-center p-4">
                <img loading="lazy" decoding="async" alt="Aquecimentos" className="max-w-full max-h-full object-contain rounded-xl shadow-sm" src="https://i.ibb.co/Q7c01vQ5/dee56dcd-e461-4a57-840a-f5e45fb9c556.png" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-gray-900 mb-1 leading-tight">Ranking & Desafios</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 flex-grow">Modelos prontos para criar competição, engajar alunos e aumentar a frequência.</p>
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-center gap-3">
                  <span className="text-red-500 line-through text-sm font-medium">R$ 24,90</span>
                  <div className="bg-[#FACC15] text-gray-900 font-black px-3 py-1 rounded text-[10px] uppercase tracking-tighter">GRÁTIS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-12 md:py-20 px-4 bg-white border-t-4 border-white">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Ofertas Exclusivas</h2>
          <p className="text-base md:text-lg text-gray-600">Escolha o melhor plano para sua evolução na areia.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-stretch mt-4 md:mt-8">
          <div className="bg-white p-6 sm:p-10 rounded-xl border-2 border-slate-200 flex flex-col hover:border-[#FACC15] transition-all shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight text-center sm:text-left">Pacote Básico</h3>
            <div className="mb-6 text-center sm:text-left">
              <div className="text-red-500 line-through font-bold text-sm mb-1">R$ 47,00</div>
              <div className="flex items-baseline justify-center sm:justify-start mb-1 text-[#FACC15]">
                <span className="text-xl font-bold">R$</span><span className="text-4xl sm:text-5xl font-black tracking-tighter">10</span><span className="text-xl font-bold">,00</span>
              </div>
              <div className="text-slate-500 text-xs">pagamento único</div>
            </div>
            <ul className="text-left w-full space-y-3 mb-8 sm:mb-10 flex-1">
              <li className="flex items-center gap-3 text-slate-700 text-[13px] sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 bg-yellow-50 rounded-full" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="leading-tight">150 Treinos de Futevôlei</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-[13px] sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 bg-yellow-50 rounded-full" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="leading-tight">Acesso Vitalício</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-[13px] sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 bg-yellow-50 rounded-full" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="leading-tight">Acesso Imediato</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-[13px] sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 bg-yellow-50 rounded-full" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="leading-tight">Entrega Via Email + WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-[13px] sm:text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 bg-yellow-50 rounded-full" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="leading-tight">Garantia de 7 Dias</span>
              </li>
            </ul>
            <button onClick={() => setShowDownsell(true)} type="button" className="px-4 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap animate-pulse-scale bg-transparent border-2 w-full text-gray-900 border-gray-200 hover:border-[#FACC15] hover:bg-yellow-50 font-black py-4 uppercase tracking-wide text-xs sm:text-sm">COMPRAR AGORA</button>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-xl border-[3px] border-[#FACC15] flex flex-col items-center relative shadow-xl mt-4 md:mt-0">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FACC15] text-gray-900 font-black px-6 py-1.5 rounded-full text-xs flex items-center gap-2 shadow-sm whitespace-nowrap">👑 MAIS VENDIDO</div>
            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-center text-slate-900 uppercase tracking-tight mt-2 sm:mt-0">Pacote Completo</h3>
            <div className="w-full max-w-[180px] sm:max-w-[200px] mb-6 sm:mb-8"><img loading="lazy" decoding="async" alt="Pacote Completo" className="w-full h-auto rounded-lg shadow-sm" src="https://i.ibb.co/TqDpcx65/Untitled-design-3.png" /></div>
            <ul className="text-left w-full space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {[
                "+150 Treinos de Futevôlei",
                "+30 Treinos de Controle de Bola",
                "+25 Treinos de Ataque",
                "+20 Treinos de Precisão e Direcionamento",
                "+20 Treinos de Movimentação",
                "+15 Treinos de Velocidade e Reflexo",
                "+10 Treinos de Defesa e Recuperação",
                "+10 Treinos de Combinações e Estratégia",
                "+10 Treinos para Fazer Sozinho",
                "+10 Treinos Rápidos (10 Minutos)",
                "Acesso Imediato",
                "Acesso Vitalício",
                "Garantia de 7 Dias",
                "Atualizações",
                "Suporte Prioritário"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-[#FACC15] shrink-0 mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#fffdf0] border border-[#f5ead2] rounded-xl p-4 sm:p-5 w-full mb-6 sm:mb-8">
              <div className="text-[#b46b0a] font-bold text-[10px] sm:text-xs mb-3 uppercase tracking-wider">Bônus Inclusos:</div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-slate-800 font-medium text-[13px] sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift text-[#d9810b] shrink-0 mt-0.5" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                  <span className="leading-tight">Certificado de Conclusão</span>
                </li>
                <li className="flex items-start gap-2 text-slate-800 font-medium text-[13px] sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift text-[#d9810b] shrink-0 mt-0.5" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                  <span className="leading-tight">+50 Aquecimentos Prontos</span>
                </li>
                <li className="flex items-start gap-2 text-slate-800 font-medium text-[13px] sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift text-[#d9810b] shrink-0 mt-0.5" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                  <span className="leading-tight">Ranking & Desafios</span>
                </li>
              </ul>
            </div>
            <div className="text-center w-full mb-5 sm:mb-6">
              <div className="text-red-500 line-through font-bold text-sm mb-1">R$ 147,00</div>
              <div className="text-slate-500 text-[13px] sm:text-sm mb-1">Por apenas</div>
              <div className="flex items-baseline justify-center mb-1 text-[#FACC15]">
                <span className="text-xl sm:text-2xl font-bold">R$</span><span className="text-5xl sm:text-7xl font-black tracking-tighter">19</span><span className="text-xl sm:text-2xl font-bold">,99</span>
              </div>
              <div className="text-slate-400 text-[10px] sm:text-xs mb-2 sm:mb-3">pagamento único</div>
              <div className="text-gray-600 font-bold text-[13px] sm:text-sm">Você economiza R$127,01</div>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 mb-5 sm:mb-6 font-medium">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FACC15]"></div>+1.736 pessoas escolheram essa oferta
            </div>
            <a href="https://checkout.pagmaterial.shop/VCCL1O8SD0WQ" className="px-4 sm:px-8 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap animate-pulse-scale shadow-[0_0_20px_rgba(250,204,21,0.4)] w-full bg-[#FACC15] hover:bg-[#EAB308] text-gray-900 font-black py-3.5 sm:py-4 uppercase tracking-wide text-xs sm:text-sm">Quero o Pacote Completo</a>
          </div>
        </div>
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-500 sm:text-slate-400 font-medium sm:font-normal">
          <div className="flex items-center gap-2 bg-slate-100 sm:bg-transparent px-4 py-2 sm:px-0 sm:py-0 rounded-full sm:rounded-none w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check sm:w-5 sm:h-5 text-slate-600 sm:text-slate-400" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Compra 100% Segura
          </div>
          <div className="flex items-center gap-2 bg-slate-100 sm:bg-transparent px-4 py-2 sm:px-0 sm:py-0 rounded-full sm:rounded-none w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar sm:w-5 sm:h-5 text-slate-600 sm:text-slate-400" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 7 Dias de Garantia
          </div>
          <div className="flex items-center gap-2 bg-slate-100 sm:bg-transparent px-4 py-2 sm:px-0 sm:py-0 rounded-full sm:rounded-none w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap sm:w-5 sm:h-5 text-slate-600 sm:text-slate-400" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Acesso Imediato
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#b45309] font-bold mb-1 sm:mb-2 text-sm sm:text-base">Sobre o Autor</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-1 sm:mb-2">Professor Marcos</h2>
            <div className="text-slate-500 text-sm sm:text-lg mb-6 sm:mb-10">Especialista em Futevôlei Esportivo</div>
            <div className="flex justify-center mb-6 sm:mb-12">
              <div className="w-28 h-28 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1 sm:p-2 bg-yellow-50 border-2 border-yellow-100 mx-auto">
                <img loading="lazy" decoding="async" alt="Professor Marcos" className="w-full h-full object-cover rounded-full" src="https://i.ibb.co/vvPhpSZ5/aa1995fd-bc97-41b9-a27e-e34a3b1611b0.png" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-yellow-50 text-[#ca8a04] rounded-full flex items-center justify-center mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award sm:w-7 sm:h-7" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                </div>
                <div className="text-sm sm:text-xl font-bold text-slate-900 leading-tight mb-0.5 sm:mb-1">10+ Anos</div>
                <div className="text-slate-500 text-[10px] sm:text-sm">Experiência na Área</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-yellow-50 text-[#ca8a04] rounded-full flex items-center justify-center mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users sm:w-7 sm:h-7" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
                <div className="text-sm sm:text-xl font-bold text-slate-900 leading-tight mb-0.5 sm:mb-1">+2.000</div>
                <div className="text-slate-500 text-[10px] sm:text-sm">Alunos Ajudados</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-yellow-50 text-[#ca8a04] rounded-full flex items-center justify-center mb-2 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy sm:w-7 sm:h-7" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                </div>
                <div className="text-sm sm:text-xl font-bold text-slate-900 leading-tight mb-0.5 sm:mb-1">Futevôlei</div>
                <div className="text-slate-500 text-[10px] sm:text-sm">Referência Nacional</div>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border-2 border-slate-200 text-slate-600 italic text-xs sm:text-base md:text-lg text-center shadow-sm">
              "Fui atleta de futevôlei e sei exatamente onde os jogadores amadores mais erram. Desenvolvi um método focado em organização, progressão técnica e aplicação simples, tanto para atletas quanto para professores que precisam de uma estrutura pronta para evoluir na areia ou ensinar com mais qualidade."
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gray-50 border-t-4 border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 text-gray-900">Dúvidas Frequentes</h2>
          {[
            {
              q: "O acesso é vitalício?",
              a: "Sim! Você paga uma vez e o curso é seu para sempre, incluindo todas as atualizações futuras e novos treinos que adicionarmos."
            },
            {
              q: "Serve para quem nunca jogou?",
              a: "Com certeza. Temos módulos básicos que ensinam desde a pegada na raquete até exercícios para quem já está em nível intermediário/avançado (adapte para futevolei)"
            },
            {
              q: "Como vou receber o acesso?",
              a: "O acesso é imediato logo após a confirmação do pagamento. Você receberá um e-mail com seus dados de login à nossa área de membros exclusiva."
            },
            {
              q: "Preciso de um parceiro para treinar?",
              a: "Muitos dos +150 treinos podem ser feitos sozinho (shadow badminton, footwork, força). Também incluímos treinos específicos para fazer com parceiro. adapte para futevolei"
            },
            {
              q: "Tem garantia?",
              a: "Sim, oferecemos 7 dias de garantia incondicional. Se não gostar do material por qualquer motivo, devolvemos 100% do seu dinheiro."
            }
          ].map((faq, i) => (
            <details key={i} className="group border border-[#FACC15]/20 rounded-lg mb-3 bg-white overflow-hidden text-left">
              <summary className="w-full text-left px-4 py-3 md:px-5 md:py-4 font-semibold text-gray-800 flex justify-between items-center focus:outline-none hover:bg-gray-50 text-sm md:text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                {faq.a.replace("(adapte para futevolei)", "").replace("(shadow badminton, footwork, força)", "(embaixadinhas, controle de bola, fortalecimento, parede)").replace("a pegada na raquete", "os fundamentos mais simples, como domínio e passe,")}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-white text-gray-500 py-8 md:py-10 px-4 text-center text-xs md:text-sm border-t-4 border-white">
        <div className="max-w-4xl mx-auto">
          <p>© 2026 Treinos de Futefutevôlei. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

