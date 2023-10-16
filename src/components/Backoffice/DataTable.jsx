import { Table } from 'antd';
import * as React from 'react';

export default function DataTable({
    height = 400,
    width = '100%',
    pagination,
    loading,
    onChange,
    data,
    columns,
    size = 'small',
}) {

    return (
        <>
            <div className="px-2">
                <Table
                    columns={columns}
                    controlHeight={height}
                    rowKey={(record) => record.login.uuid}
                    dataSource={data}
                    pagination={pagination.pagination}
                    loading={loading}
                    onChange={onChange}
                    size={size}
                />
            </div>
        </>
    );
}