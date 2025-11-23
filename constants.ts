import { Experience, GameRecord, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: '高级前端工程师',
    company: '科技创新有限公司',
    period: '2021 - 至今',
    description: '带领前端团队使用 React 和 TypeScript 重构核心旧版应用。',
    details: '主导从 AngularJS 到 React 18 的迁移。将页面加载速度提升了 40%。指导并培养了 3 名初级开发人员。',
    color: 'border-amber-400 dark:border-amber-500'
  },
  {
    id: '2',
    title: '软件开发工程师',
    company: '创意解决方案工作室',
    period: '2019 - 2021',
    description: '为知名创意客户开发交互式网络体验。',
    details: '与设计师紧密合作实现像素级 UI。利用 WebGL 技术开发 3D 产品配置器。',
    color: 'border-sky-400 dark:border-sky-500'
  },
  {
    id: '3',
    title: '初级 Web 开发',
    company: '创业孵化中心',
    period: '2017 - 2019',
    description: '负责早期初创公司的全栈开发。',
    details: '使用 MERN 技术栈构建 MVP。负责部署流程和 AWS 基础设施搭建。',
    color: 'border-emerald-400 dark:border-emerald-500'
  },
  {
    id: '4',
    title: '实习生',
    company: '大型企业实验室',
    period: '2016 夏季',
    description: '协助数据可视化项目。',
    details: '使用 D3.js 将内部指标数据可视化，用于高管仪表板。',
    color: 'border-indigo-400 dark:border-indigo-500'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '神经网络可视化',
    year: 2023,
    category: '人工智能',
    description: '一个交互式网络工具，用于可视化简单神经网络训练期间权重的变化过程。',
    techStack: ['Python', 'React', 'D3.js'],
    link: '#'
  },
  {
    id: 'p2',
    title: '分布式文件系统',
    year: 2023,
    category: '系统架构',
    description: '受 GFS 启发的高容错分布式文件系统实现。',
    techStack: ['Go', 'gRPC', 'Docker'],
    link: '#'
  },
  {
    id: 'p3',
    title: 'AR 校园导航',
    year: 2022,
    category: '移动应用',
    description: '帮助新生使用 AR 标记导航大学校园的移动应用程序。',
    techStack: ['Unity', 'C#', 'ARFoundation'],
    link: '#'
  },
  {
    id: 'p4',
    title: '编译器构建',
    year: 2022,
    category: '系统架构',
    description: '针对 C 语言子集的自定义编译器，可生成 x86 汇编代码。',
    techStack: ['C++', 'LLVM'],
    link: '#'
  }
];

export const GAMES: GameRecord[] = [
  { id: 'g1', name: '怪物猎人：世界', genre: 'ARPG', hoursPlayed: 2100, rating: 9.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g2', name: '怪物猎人：崛起', genre: 'ARPG', hoursPlayed: 1225, rating: 9, status: 'Completed', achievementPercentage: 100 },
  { id: 'g3', name: '怪物猎人：荒野', genre: 'ARPG', hoursPlayed: 525, rating: 7, status: 'Completed', achievementPercentage: 100 },
  { id: 'g4', name: '怪物猎人：GU', genre: 'ARPG', hoursPlayed: 370, rating: 8.5, status: 'Completed', achievementPercentage: 60 },
  { id: 'g5', name: '塞尔达传说：旷野之息', genre: 'AVG', hoursPlayed: 310, rating: 10, status: 'Completed', achievementPercentage: 100 },
  { id: 'g6', name: '宝可梦：紫', genre: 'RPG', hoursPlayed: 215, rating: 7.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g7', name: '博德之门3', genre: 'CRPG', hoursPlayed: 185, rating: 9, status: 'Completed', achievementPercentage: 50 },
  { id: 'g8', name: '女神异闻录5', genre: 'JRPG', hoursPlayed: 160, rating: 9, status: 'Completed', achievementPercentage: 100 },
  { id: 'g9', name: '塞尔达传说：王国之泪', genre: 'AVG', hoursPlayed: 140, rating: 9.5, status: 'Completed', achievementPercentage: 60 },
  { id: 'g10', name: '艾尔登法环', genre: 'SL', hoursPlayed: 140, rating: 9.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g11', name: '最终幻想15', genre: 'JRPG', hoursPlayed: 137, rating: 7.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g12', name: '女神异闻录3', genre: 'JRPG', hoursPlayed: 119, rating: 8.5, status: 'Completed', achievementPercentage: 88 },
  { id: 'g13', name: '生化危机4重制版', genre: 'SH', hoursPlayed: 108, rating: 9.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g14', name: '歧路旅人2', genre: 'JRPG', hoursPlayed: 98, rating: 9.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g15', name: '龙之信条2', genre: 'ARPG', hoursPlayed: 92, rating: 8, status: 'Completed', achievementPercentage: 72 },
  { id: 'g16', name: '暗喻幻想', genre: 'JRPG', hoursPlayed: 90, rating: 8, status: 'Completed', achievementPercentage: 75 },
  { id: 'g17', name: '只狼', genre: 'ARPG', hoursPlayed: 83, rating: 9, status: 'Completed', achievementPercentage: 100 },
  { id: 'g18', name: '真女神转生VV', genre: 'JRPG', hoursPlayed: 79, rating: 8.5, status: 'Completed', achievementPercentage: 42 },
  { id: 'g19', name: '刺客信条：影', genre: 'ARPG', hoursPlayed: 75, rating: 0, status: 'Playing', achievementPercentage: 41 },
  { id: 'g20', name: '黑神话：悟空', genre: 'ARPG', hoursPlayed: 75, rating: 8.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g21', name: '怪物猎人物语2:破灭之翼', genre: 'RPG', hoursPlayed: 68, rating: 0, status: 'Playing', achievementPercentage: 63 },
  { id: 'g22', name: '宝可梦传说：阿尔宙斯', genre: 'RPG', hoursPlayed: 65, rating: 8, status: 'Completed', achievementPercentage: 90 },
  { id: 'g23', name: '植物大战僵尸', genre: '塔防', hoursPlayed: 63, rating: 9.5, status: 'Completed', achievementPercentage: 100 },
  { id: 'g24', name: '女神异闻录4：黄金版', genre: 'JRPG', hoursPlayed: 59, rating: 7, status: 'Backlog', achievementPercentage: 58 },
  { id: 'g25', name: '宝可梦：明亮珍珠', genre: 'RPG', hoursPlayed: 55, rating: 5.5, status: 'Completed', achievementPercentage: 80 },
  { id: 'g26', name: '小丑牌', genre: '卡牌Rogue', hoursPlayed: 55, rating: 8.5, status: 'Completed', achievementPercentage: 58 },
  { id: 'g27', name: '最终幻想7重制', genre: 'JRPG', hoursPlayed: 34, rating: 8, status: 'Completed', achievementPercentage: 59 },
  { id: 'g28', name: '刺客信条：奥德赛', genre: 'ARPG', hoursPlayed: 34, rating: 7, status: 'Backlog', achievementPercentage: 18 },
  { id: 'g29', name: '双影奇境', genre: '双人RPG', hoursPlayed: 32, rating: 8.5, status: 'Backlog', achievementPercentage: 30 },
  { id: 'g30', name: '尼尔：机械生命', genre: 'ARPG', hoursPlayed: 32, rating: 8, status: 'Completed', achievementPercentage: 62 },
  { id: 'g31', name: '刺客信条：幻景', genre: 'ARPG', hoursPlayed: 32, rating: 8, status: 'Backlog', achievementPercentage: 48 },
  { id: 'g32', name: '精灵与萤火意志', genre: '平台跳跃', hoursPlayed: 25, rating: 8.5, status: 'Completed', achievementPercentage: 80 },
  { id: 'g33', name: '木筏', genre: '生存建造', hoursPlayed: 24, rating: 8, status: 'Backlog', achievementPercentage: 46 },
  { id: 'g34', name: '剑星', genre: 'ARPG', hoursPlayed: 24, rating: 8, status: 'Backlog', achievementPercentage: 31 },
  { id: 'g35', name: '生化危机2', genre: '生存恐怖', hoursPlayed: 23, rating: 8, status: 'Completed', achievementPercentage: 61 },
  { id: 'g36', name: '哈迪斯', genre: 'Roguelike', hoursPlayed: 22, rating: 8.5, status: 'Completed', achievementPercentage: 20 },
];