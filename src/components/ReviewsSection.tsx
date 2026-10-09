import React from 'react';
import { REVIEWS, STUDIO_CONFIG } from '../data/studioData';
import { Star, CheckCircle2, ExternalLink, Quote, MessageSquareHeart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Confiança & Resultados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            O Que Minhas Clientes Dizem
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            A satisfação e o carinho de quem confia a beleza e a saúde das suas unhas ao studio Rachel Caetano.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Google Scorecard Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FCFAF7] via-white to-[#FCFAF7] border border-[#C5A059]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#C5A059]/30 flex items-center justify-center shadow-xs shrink-0">
              {/* Google colored G */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-serif text-3xl font-bold text-stone-900">5.0</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">
                Classificação Máxima no Google
              </p>
              <p className="text-xs text-stone-500">
                Avaliado por clientes reais em Belo Horizonte - MG
              </p>
            </div>
          </div>

          <a
            href={STUDIO_CONFIG.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gold-gradient-bg text-stone-900 text-xs sm:text-sm font-bold tracking-wider uppercase hover:brightness-105 active:scale-95 transition-all shadow-xs shrink-0"
          >
            <span>Ver Avaliações no Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map(review => (
            <div
              key={review.id}
              className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-7 border border-stone-200/70 hover:border-[#C5A059]/40 transition-all shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A059]/25" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  “{review.comment}”
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-5 pt-4 border-t border-stone-200/50 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-semibold text-stone-900">{review.author}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                    {review.serviceMentioned && (
                      <span className="text-[#9A7836] font-medium">{review.serviceMentioned}</span>
                    )}
                    {review.serviceMentioned && <span>·</span>}
                    <span>{review.date}</span>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verificada
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-500 flex items-center justify-center gap-1.5">
            <MessageSquareHeart className="w-4 h-4 text-[#C5A059]" />
            <span>Já foi cliente ou aluna? Compartilhe também sua experiência no Google!</span>
          </p>
        </div>

      </div>
    </section>
  );
};
