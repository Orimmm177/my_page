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
  { id: 'g1', name: '艾尔登法环', genre: 'RPG', hoursPlayed: 150, rating: 10, status: 'Completed', achievementPercentage: 100 },
  { id: 'g2', name: '星露谷物语', genre: '模拟经营', hoursPlayed: 80, rating: 9, status: 'Playing', achievementPercentage: 60 },
  { id: 'g3', name: '空洞骑士', genre: '银河恶魔城', hoursPlayed: 45, rating: 9.5, status: 'Completed', achievementPercentage: 90 },
  { id: 'g4', name: '赛博朋克 2077', genre: 'RPG', hoursPlayed: 60, rating: 8, status: 'Completed', achievementPercentage: 75 },
  { id: 'g5', name: '蔚蓝 (Celeste)', genre: '平台跳跃', hoursPlayed: 20, rating: 9, status: 'Completed', achievementPercentage: 85 },
  { id: 'g6', name: '博德之门 3', genre: 'CRPG', hoursPlayed: 200, rating: 10, status: 'Playing', achievementPercentage: 40 },
];