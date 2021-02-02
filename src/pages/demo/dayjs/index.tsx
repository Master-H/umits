import React from 'react';
import { DatePicker, TimePicker, Calendar } from 'antd';
import CodeMirror from '@/components/codeMirror';
import { code } from './config';

function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <DatePicker />
                    <TimePicker />
                    <div style={{ width: 400, border: '1px solid gray' }}>
                        <Calendar fullscreen={false} />
                    </div>
                </div>
            </div>
            <div>
                <CodeMirror code={code} isShowTitle={false} />
            </div>
        </div>
    );
}

export default index;
