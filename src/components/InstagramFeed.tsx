import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS, COMPANY_INFO } from '../data/veterinariaData';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-20 bg-[#FFF9FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 bg-brand-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-200">
              <Instagram className="w-4 h-4" />
              <span>Comunidad en Redes Sociales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
              Historias reales de nuestros pacientes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Síguenos en <strong className="text-brand-600">@{COMPANY_INFO.instagram}</strong> para consejos veterinarios, casos de éxito y el día a día en la clínica.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-extrabold text-slate-900">+5,800 Seguidores</div>
              <div className="text-xs text-slate-500">Comunidad de amantes de mascotas</div>
            </div>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-brand-500 to-amber-500 hover:opacity-95 text-white font-bold px-6 py-3 rounded-2xl text-sm shadow-md transition-all transform hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Instagram Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tag Pill */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-brand-700 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {post.tag}
                </span>

                {/* Hover Meta Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Post Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <p className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{post.date}</span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-600 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Ver post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
