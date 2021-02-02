/**
 * menu Highlight key
 * @param pathname string
 */
const queryKeysByPath = (pathname: string): { openKey: string; selectKey: string } => {
    const reg = /(^\/*)|(\/*$)/g; // 匹配字符串首尾斜杠
    const path = pathname.replace(reg, '');
    const routes = path.split('/');
    return { openKey: routes[0], selectKey: routes[1] || routes[0] };
};
export default queryKeysByPath;
