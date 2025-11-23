import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements (Abstract Stars) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-gradient-to-br from-yellow-200/40 to-amber-100/0 dark:from-amber-500/10 dark:to-transparent blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-200/30 to-blue-100/0 dark:from-blue-500/10 dark:to-transparent blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 relative">
             <div className="absolute inset-0 bg-yellow-300 dark:bg-amber-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
             <img 
               src="https://picsum.photos/150/150?grayscale" 
               alt="Portrait" 
               className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl shadow-sky-900/10 dark:shadow-black/50 mx-auto"
             />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 dark:text-slate-100 mb-6 tracking-tight">
            逻辑的 <span className="text-sky-700 dark:text-sky-400 italic">艺术家</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            以工程师的精准和印象派的灵魂构建数字景观。欢迎来到我的个人主页。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={PageRoute.EXPERIENCE}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-sky-700 text-sky-800 dark:text-sky-200 rounded-full font-semibold shadow-lg shadow-sky-100 dark:shadow-none flex items-center justify-center gap-2 transition-colors"
              >
                查看我的历程
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to={PageRoute.PROJECTS}>
              <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="group px-8 py-4 bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-200 rounded-full font-semibold shadow-lg shadow-amber-100 dark:shadow-none flex items-center justify-center gap-2 transition-colors"
              >
                探索作品
                <Star size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
           {[
             { title: '匠心', text: '整洁的代码，详尽的文档，以及可扩展的架构。', color: 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' },
             { title: '创意', text: '创新的问题解决方案和独特的用户界面设计。', color: 'bg-yellow-50 border-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-800' },
             { title: '好奇', text: '持续学习新技术和探索游戏机制。', color: 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800' },
           ].map((card, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 + (index * 0.1) }}
               className={`p-6 rounded-2xl border ${card.color} shadow-sm hover:shadow-md transition-all`}
             >
               <h3 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-2">{card.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.text}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Home;