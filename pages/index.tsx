import { Fragment, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BellIcon, ChevronLeftIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Disclosure, Menu, Transition } from "@headlessui/react";

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

const Navigation = () => {
  const [activeStatus, setActiveStatus] = useState(0);
  return (
    <Disclosure as="nav" className="sticky top-0 w-full bg-gray-800 sm:px-20">
      {({ open }) => (
        <>
          <div className="flex justify-center sm:justify-start">
            <Disclosure.Button className="absolute p-4 left-0 text-gray-400 sm:hidden">
              {open ?
                <XIcon className="block h-6 w-6" aria-hidden="true" /> :
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              }
            </Disclosure.Button>
            <text className="text-2xl py-3 text-yellow-700 font-bold font-mono sm:pr-10">云雀</text>
            <div className="hidden sm:flex space-x-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>)}
    </Disclosure>
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
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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
