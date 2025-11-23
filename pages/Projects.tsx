import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  // Group projects by year
  const projectsByYear = PROJECTS.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {} as Record<number, typeof PROJECTS>);

  const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-swirls transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-slate-800 dark:text-slate-100 mb-4"
          >
            学术成果
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            我在学术任期内建立的研究、实验和系统集合。
          </motion.p>
        </div>

        {years.map((year) => (
          <div key={year} className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-5xl font-serif text-amber-200 dark:text-amber-800/80 font-bold">{year}</span>
              <div className="h-px bg-amber-200 dark:bg-amber-800 flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsByYear[year].map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-xl hover:shadow-sky-900/5 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Decorative corner brush stroke */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-100 dark:bg-sky-900/30 rounded-full blur-xl group-hover:bg-sky-200 dark:group-hover:bg-sky-800/30 transition-colors"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 rounded-md border border-amber-100 dark:border-amber-900/50 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <a href={project.link} className="text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <h3 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-3 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                          <Code2 size={12} /> {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;