import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie 
} from 'recharts';
import { GAMES } from '../constants';
import { Trophy, Clock, Gamepad, Star } from 'lucide-react';
import { useTheme } from '../App';

const COLORS = ['#93c5fd', '#fcd34d', '#86efac', '#fdba74', '#c4b5fd', '#fda4af'];
const DARK_COLORS = ['#3b82f6', '#d97706', '#22c55e', '#ea580c', '#8b5cf6', '#f43f5e'];

const Games: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const statusData = React.useMemo(() => [
    { name: '已通关', value: GAMES.filter(g => g.status === 'Completed').length },
    { name: '进行中', value: GAMES.filter(g => g.status === 'Playing').length },
    { name: '搁置', value: GAMES.filter(g => g.status === 'Backlog').length },
  ], []);

  const sortedGames = React.useMemo(() => [...GAMES].sort((a, b) => b.hoursPlayed - a.hoursPlayed), []);

  const chartColors = isDark ? DARK_COLORS : COLORS;
  const axisColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBg = isDark ? '#1e293b' : '#fff';
  const tooltipText = isDark ? '#f1f5f9' : '#1e293b';

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-swirls transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-4xl font-serif text-slate-800 dark:text-slate-100 mb-2"
          >
            游戏记录
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 italic">"伟大的事业是由一系列小事汇集而成的。" - 梵高 (也是我, 在收集成就时)</p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: '总时长', value: GAMES.reduce((acc, g) => acc + g.hoursPlayed, 0), icon: Clock, color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-50 dark:bg-sky-900/20' },
            { label: '游戏数量', value: GAMES.length, icon: Gamepad, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
            { label: '已通关', value: GAMES.filter(g => g.status === 'Completed').length, icon: Trophy, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
            { label: '平均评分', value: (GAMES.reduce((acc, g) => acc + g.rating, 0) / GAMES.length).toFixed(1), icon: Star, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center hover:shadow-md transition-all"
            >
              <div className={`p-3 rounded-full ${stat.bg} ${stat.color} mb-2`}>
                <stat.icon size={24} />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Chart 1: Hours Played */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-lg font-serif font-bold text-slate-700 dark:text-slate-200 mb-6">游戏时长统计</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sortedGames} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: axisColor }} interval={0} height={60} tickFormatter={(val) => val.length > 8 ? val.substr(0,8)+'...' : val} />
                  <YAxis tick={{ fontSize: 12, fill: axisColor }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: tooltipBg, color: tooltipText, borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: tooltipText }}
                    cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : '#f1f5f9' }}
                  />
                  <Bar dataKey="hoursPlayed" radius={[4, 4, 0, 0]}>
                    {sortedGames.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Chart 2: Status Distribution */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center"
          >
            <h3 className="text-lg font-serif font-bold text-slate-700 dark:text-slate-200 mb-4">通关状态分布</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={[ '#86efac', '#93c5fd', '#cbd5e1'][index]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: tooltipBg, color: tooltipText, borderRadius: '8px', border: 'none' }} itemStyle={{ color: tooltipText }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 text-sm mt-4">
              {statusData.map((status, idx) => (
                 <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: [ '#86efac', '#93c5fd', '#cbd5e1'][idx] }}></div>
                    <span className="text-slate-600 dark:text-slate-400">{status.name}</span>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Detailed List */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-6 pl-2 border-l-4 border-amber-300 dark:border-amber-600">详细列表</h3>
          {GAMES.map((game) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-white dark:border-slate-700 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors"
            >
              <div className="flex items-center gap-4 md:col-span-5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${game.status === 'Completed' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400' : 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400'}`}>
                  {game.rating >= 9 ? <Trophy size={20} /> : <Gamepad size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">{game.name}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{game.genre}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 md:col-span-4">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                  <span>完成度</span>
                  <span>{game.achievementPercentage}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" 
                    style={{ width: `${game.achievementPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:col-span-3">
                 <div className="text-center w-16">
                   <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{game.hoursPlayed}h</div>
                   <div className="text-[10px] text-slate-400 uppercase">时长</div>
                 </div>
                 <div className="text-center w-16">
                   <div className="text-sm font-bold text-amber-500 flex items-center justify-center gap-1">
                     {game.rating} <Star size={12} fill="currentColor" />
                   </div>
                   <div className="text-[10px] text-slate-400 uppercase">评分</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;