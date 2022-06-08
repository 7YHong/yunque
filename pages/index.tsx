import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: '焦点', href: '#', current: true },
  { name: '推荐', href: '#', current: false },
  { name: '国内', href: '#', current: false },
  { name: '国际', href: '#', current: false },
  { name: '云南', href: '#', current: false },
]

const news = [
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832186943.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
  { title: "全球连线｜四季中国之芒种：风吹麦浪", cover: "https://img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg", editor: "小云" },
]

const IndigoTabs = () => {
  const [activeStatus, setActiveStatus] = useState(0);
  return (
    <div className="sticky top-0 w-full px-20 justify-between flex-wrap block bg-white rounded shadow">
      <div className="xl:w-full xl:mx-0 px-5 h-12 flex">
        <span className="text-2xl py-2 pr-10 text-yellow-700 font-bold font-mono">云雀</span>
        <ul className="flex">
          {navigation.map((nav, idx) => (
            <li key={idx} className={classNames("text-sm mr-10 font-normal py-3 flex-col", activeStatus == idx ? "text-indigo-700 border-indigo-700" : "text-gray-600 hover:text-gray-800")}
              onClick={() => setActiveStatus(idx)}>
              <span className="mb-3 cursor-pointer">{nav.name}</span>
              {activeStatus == idx && <div className="mt-3 w-full h-1 bg-indigo-700 rounded-t-md" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {news.map((n, idx) => (
        <div key={idx} className="w-100 h-36 flex my-1 text-center rounded-md shadow-lg border border-gray-100 overflow-hidden">
          <div className="w-2/5 h-full bg-cover"
            style={{ backgroundImage: `url(${n.cover})` }}>
          </div>
          <div className="w-3/5 h-full p-3 flex flex-wrap content-between">
            <p className="text-lg text-left font-semibold">{n.title}</p>
            <p className="w-full text-gray-500 text-right">{n.editor}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Pagination = () => {
  return (
    <div className="w-full bg-white px-20 py-3 items-center border-t border-gray-200 sm:flex sm:justify-between">
      <div>
        <p className="text-sm text-gray-700 text-center">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">97</span> results
        </p>
      </div>
      <div className="text-center mt-3 sm:mt-0">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          <a
            href="#"
            aria-current="page"
            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            1
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            2
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            8
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            9
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <MyTabs /> */}
      <IndigoTabs />
      <GridLayout />
      <Pagination />


      <footer className="sticky bottom-0 bg-gray-50 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 7YHong
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
