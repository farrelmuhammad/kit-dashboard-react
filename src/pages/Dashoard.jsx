import React from 'react';
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DataTable from '../components/Backoffice/DataTable';
import { useEffect } from 'react';
import { useState } from 'react';
import QueryString from 'qs';
import Chart from '../components/Backoffice/Chart';
import PieChart from '../components/Backoffice/PieChart';
import { FiEdit2, FiTrash2, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { Button, Tooltip } from 'antd';
import { useMemo } from 'react';


const buttonWidth = 50;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};

const Dashoard = () => {
  const isLoggedIn = useSelector(state => state.auth.accessToken);

  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const [toggle, setToggle] = useState(false);

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'male',
        },
        {
          text: 'Female',
          value: 'female',
        },
      ],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <>
          <div className='flex justify-space-between gap-1'>
            <Tooltip placement="bottom" title={'Edit'} arrow={mergedArrow}>
              <Button type="primary" ghost size='small' icon={<FiEdit2 />} {...btnProps}></Button>
            </Tooltip>
            {/* <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
              <Button size='small' {...btnProps}>Bottom</Button>
            </Tooltip> */}
            <Tooltip placement="bottom" title={"Delete"} arrow={mergedArrow}>
              <Button type="primary" danger ghost size='small' icon={<FiTrash2 />} {...btnProps}></Button>
            </Tooltip>
          </div>
        </>
      )
    },
  ];
  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${QueryString.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className={["w-1/5"]}>
          <Sidebar onClick={toggleSidebar} onToggle={toggle} />
        </div>

        <div className="w-4/5">
          <div className="px-6 py-4 border-b border-gray-100">
            <Header isLoggedIn={isLoggedIn} />
          </div>
          <div className="px-6 py-4">
            <div className="flex gap-3">
              <div className="w-full border border-spacing-1 p-6 text-black rounded-lg flex flex-col">
                <h2 className="text-lg font-semibold mb-2">Open Opportunity</h2>
                <div className="flex items-start justify-between">
                  <span className="text-lg italic text-black font-bold flex items-center gap-1 underline p-1">
                    <FiTrendingUp className='text-green-400' />
                    +2%
                  </span>
                  <p className="text-2xl font-bold italic">Rp4.500.000</p>
                </div>
              </div>

              <div className="w-full border border-spacing-1 p-6 text-black rounded-lg flex flex-col">
                <h2 className="text-lg font-semibold mb-2">Reimbursement Disetujui</h2>
                <div className="flex justify-between">
                  <span className="text-lg italic text-black font-bold flex items-center gap-1 underline p-1">
                    <FiTrendingDown className='text-red-400' />
                    -2%
                  </span>
                  <p className="text-2xl font-bold italic">Rp2.500.000</p>
                </div>
              </div>

              <div className="w-full border border-spacing-1 p-6 text-black rounded-lg flex flex-col">
                <h2 className="text-lg font-semibold mb-2">Reimbursement Ditolak</h2>
                <div className="flex justify-between">
                  <span className="text-lg italic text-black font-bold flex items-center gap-1 underline p-1">
                    <FiTrendingDown className='text-red-400' />
                    -2%
                  </span>
                  <p className="text-2xl font-bold italic">Rp2.500.000</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2/3">
                <Chart text="Penjualan Produk" />
              </div>
              <div className="w-1/3">
                <PieChart text="Jenis Produk" />
              </div>
            </div>
            <div className='w-full border border-spacing-1 p-2 rounded-lg my-4'>
              <div className="flex flex-wrap-reverse">
                <h2 className='text-gray-800 text-2xl font-semibold text-start px-2 py-1'>Tabel Karyawan</h2>
                {/* <button type='button' className="flex justify-center items-center border border-indigo-300 px-2 py-1 text-indigo-400 font-normal text-sm leading-tight rounded-lg
            focus:shadow-lg focus:outline-none active:shadow-lg disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                >Tambah</button> */}
              </div>
              <DataTable columns={columns} data={data} pagination={tableParams} loading={loading} onChange={handleTableChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashoard