import React, { useState } from 'react';
import { User, Calendar, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { NEWS_ARTICLES, POPULAR_NEWS } from '../data/mockData';

export default function NewsPage({ setCurrentPage }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          News & Articles
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Market trends, collector guides, and set reviews curated by TCG specialists.
        </p>
      </div>

      {/* Main 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Featured Main Articles (8 Columns) */}
        <div className="lg:col-span-8 space-y-8">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Article Hero Image */}
              <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 space-y-3">
                <span className="inline-block bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Author & Date Meta */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>

                  <span className="text-blue-600 font-bold group-hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Column: Popular Content (4 Columns) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Popular Content
            </h3>

            <div className="space-y-4">
              {POPULAR_NEWS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3.5 p-2 rounded-2xl hover:bg-slate-50 transition cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-medium">
                      <User className="w-3 h-3 text-slate-400" />
                      {item.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
