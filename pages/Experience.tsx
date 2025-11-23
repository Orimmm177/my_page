import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { ChevronRight, X } from 'lucide-react';

const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-swirls transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-center text-slate-800 dark:text-slate-100 mb-20"
        >
          职业生涯
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Timeline Line - Left Side */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-sky-300 to-amber-200 dark:from-amber-800 dark:via-sky-700 dark:to-amber-800 opacity-50"></div>

          <div className="w-full space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-[26px] top-8 w-4 h-4 bg-amber-100 dark:bg-amber-900 border-4 border-sky-400 dark:border-sky-500 rounded-full shadow-lg shadow-sky-200/50 dark:shadow-sky-900/50 z-10"></div>

                {/* Content Card */}
                <div 
                  className={`
                    p-6 rounded-2xl bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border-l-4 shadow-lg cursor-pointer
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800
                    ${exp.color}
                  `}
                  onClick={() => setSelectedId(exp.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-sky-800 dark:text-sky-200 bg-sky-100 dark:bg-sky-900/50 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-md font-medium text-amber-700 dark:text-amber-500 mb-2">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">{exp.description}</p>
                  
                  <div className="mt-4 flex items-center text-sky-600 dark:text-sky-400 text-sm font-semibold group">
                    查看详情 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={selectedId}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-lg w-full p-8 relative border border-amber-100 dark:border-slate-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 dark:bg-amber-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {(() => {
                const exp = EXPERIENCES.find(e => e.id === selectedId);
                if (!exp) return null;
                return (
                  <>
                    <h2 className="text-3xl font-serif text-slate-800 dark:text-slate-100 mb-1">{exp.title}</h2>
                    <p className="text-lg text-sky-700 dark:text-sky-400 font-medium mb-6">{exp.company}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">职责概述</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">主要成就</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic font-serif">{exp.details}</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;