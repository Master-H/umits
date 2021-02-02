import { HomeOutlined } from '@ant-design/icons';

const menusData = [
    {
        title: 'demo',
        link: '/demo/cancel',
        key: 'demo',
        children: [
            {
                title: '取消请求使用',
                link: '/demo/cancel',
                key: 'cancel',
                icon: HomeOutlined,
                children: [],
            },
            {
                title: '动态加载',
                link: '/demo/dynamic',
                key: 'dynamic',
                icon: HomeOutlined,
                children: [],
            },
            {
                title: '权限控制',
                link: '/demo/access',
                key: 'access',
                icon: HomeOutlined,
                children: [],
            },
            {
                title: '配置化菜单',
                link: '/demo/menu',
                key: 'menu',
                icon: HomeOutlined,
                children: [],
            },
            {
                title: 'dayjs替代moment',
                link: '/demo/dayjs',
                key: 'dayjs',
                icon: HomeOutlined,
                children: [],
            },
            {
                title: '组件卸载,自动取消请求',
                link: '/demo/withCancelHoc',
                key: 'witchCancelHoc',
                icon: HomeOutlined,
                children: [],
            },
        ],
    },
    {
        title: '菜单',
        link: '/menu',
        key: 'menu',
        icon: '',
    },
];
interface MenuData {
    title: string;
    link: string;
    key: string;
    icon?: string;
    children: MenuData | [];
}
type MenusData = Array<MenuData>;

export { menusData, MenuData, MenusData };
