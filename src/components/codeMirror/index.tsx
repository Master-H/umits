import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import styles from './index.less';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

interface IProps {
    code: any;
    text?: string;
    isShowTitle?: boolean;
}
const CodeMirrorComponent: React.FunctionComponent<IProps> = props => {
    const { code, text, isShowTitle = true } = props;

    return (
        <div>
            {isShowTitle && <h1 style={{ color: 'gray', marginTop: 20 }}>{text || '代码示例'} </h1>}
            <div className={styles.codeWrap}>
                <CodeMirror
                    value={code}
                    autoScroll={true}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: true,
                    }}
                />
            </div>
        </div>
    );
};
export default CodeMirrorComponent;
