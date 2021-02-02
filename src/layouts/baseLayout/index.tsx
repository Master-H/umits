import React from 'react';
import { Layout } from 'antd';
import HeaderContent from './header';
import MenuContent from './menu';
import styles from './index.less';
import { menusData, MenusData } from '../../../config/route';

const { Header, Content, Sider } = Layout;

const BaseLayout: React.FunctionComponent = (props: any) => {
    const { children } = props;
    return (
        <Layout className={styles.container}>
            <Header className={styles.contentHeader}>
                <HeaderContent />
            </Header>
            <Layout style={{ padding: 0 }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <MenuContent menusData={menusData as MenusData} />
                </Sider>
                <Content className={styles.content}>{children}</Content>
            </Layout>
        </Layout>
    );
};
export default BaseLayout;
