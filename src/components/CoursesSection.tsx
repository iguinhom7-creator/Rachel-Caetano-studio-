import React from 'react';
import { COURSES, STUDIO_CONFIG } from '../data/studioData';
import { GraduationCap, CheckCircle2, MessageCircle, Sparkles, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';

export const CoursesSection: React.FC = () => {
  return (
    <section id="cursos" className="py-14 sm:py-20 bg-[#FCFAF7] border-y border-[#C5A059]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A7836]">
            Educação & Mentoria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Cursos e Formação
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Domine as técnicas de alto padrão com metodologia didática, prática intensiva em modelo real e suporte individualizado para alavancar sua carreira na área da beleza.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:border-[#C5A059]/50 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Modality & Level Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F5EEDB] text-[#9A7836] text-[11px] font-semibold tracking-wide uppercase">
                    {course.modality}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug group-hover:text-[#9A7836] transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                  {course.description}
                </p>

                {/* Target Audience */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200/60">
                  <div className="flex items-start gap-2.5">
                    <UserCheck className="w-4 h-4 text-[#9A7836] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-stone-900">Para quem é o curso:</h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {course.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Techniques Taught */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#9A7836]" />
                    <span>Técnicas Ensinadas & Conteúdo:</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                    {course.modules.map((mod, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7836] shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Included */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#9A7836]" />
                    <span>O que está incluso:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {course.whatsIncluded.map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inscription & WhatsApp CTA */}
              <div className="mt-8 pt-5 border-t border-stone-100">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-medium text-stone-700">{course.spotsStatus}</span>
                  <span className="text-[11px] text-[#9A7836] font-medium">Turmas Reduzidas</span>
                </div>

                <a
                  href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-900 text-xs sm:text-sm font-bold tracking-wider uppercase text-center hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-stone-900" />
                  <span>Quero saber mais</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Editable Note & Guidance */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-dashed border-[#C5A059]/40 text-center max-w-2xl mx-auto">
          <p className="text-xs text-stone-600">
            <strong>Informações sobre Inscrição:</strong> As datas e disponibilidades de turmas 
            são abertas sob demanda para garantir acompanhamento personalizado a cada aluna. 
            Consulte o cronograma da próxima turma diretamente pelo WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
