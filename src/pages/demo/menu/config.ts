/* eslint-disable import/prefer-default-export */
//
export const code = `
// 直接在config/route.ts配置即可生成左侧菜单
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
            }
        ]
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


`;
