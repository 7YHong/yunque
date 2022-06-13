import { Fragment, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import Pagination from '../components/pagination'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


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

const NewsCard = ({ data }: { data: any }) => {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-100 h-36 flex my-1 text-center rounded-md shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl"
        onClick={openModal}>
        <div className="w-2/5 h-full bg-cover group-hover:opacity-80"
          style={{ backgroundImage: `url(${data.cover})` }}>
        </div>
        <div className="w-3/5 h-full p-3 flex flex-wrap content-between">
          <p className="text-lg text-left font-semibold group-hover:underline">{data.title}</p>
          <p className="w-full text-gray-500 text-right">{data.editor}</p>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div dangerouslySetInnerHTML={{
                    __html: `<div id="layer216"><p style="text-indent:2em;font-weight:bold">原标题：全球连线｜四季中国之芒种：风吹麦浪</p>

              <p style="text-indent: 2em; text-align: center;">芒种</p>
              
              <p style="text-indent: 2em; text-align: center;">北方麦黄</p>
              
              <p style="text-indent: 2em; text-align: center;">江南秧绿</p>
              
              <p style="text-indent: 2em; text-align: center;">仲夏如约而至</p>
              
              <p style="text-align: center;"><img src="//img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832172688.jpg"></p>
              
              <p style="text-indent: 2em; text-align: center;">在河南</p>
              
              <p style="text-indent: 2em; text-align: center;">经过不懈努力</p>
              
              <p style="text-indent: 2em; text-align: center;">小麦长势良好</p>
              
              <p style="text-indent: 2em; text-align: center;">处处洒满丰收的喜悦</p>
              
              <p style="text-align: center;"><img src="//img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832188138.jpg"></p>
              
              <p style="text-indent: 2em; text-align: center;">芒之谷</p>
              
              <p style="text-indent: 2em; text-align: center;">收获幸福</p>
              
              <p style="text-indent: 2em; text-align: center;">芒之光</p>
              
              <p style="text-indent: 2em; text-align: center;">播种希望</p>
              
              <p style="text-align: center;"><img src="//img-issue.yunnan.cn/uploadfile/test/2022/0606/20220606083218744.jpg"></p>
              
              <p style="text-indent: 2em; text-align: center;">风吹麦浪</p>
              
              <p style="text-indent: 2em; text-align: center;">栀子芬芳</p>
              
              <p style="text-indent: 2em; text-align: center;">带着太阳的光芒</p>
              
              <p style="text-indent: 2em; text-align: center;">未来之路</p>
              
              <p style="text-indent: 2em; text-align: center;">早已不再迷茫</p>
              
              <p style="text-align: center;"><img src="//img-issue.yunnan.cn/uploadfile/test/2022/0606/202206060832186943.jpg"></p>
              
              <p style="text-indent: 2em; text-align: center;">监制：幸培瑜</p>
              
              <p style="text-indent: 2em; text-align: center;">统筹：王璐</p>
              
              <p style="text-indent: 2em; text-align: center;">制片人 / 策划：林煜</p>
              
              <p style="text-indent: 2em; text-align: center;">记者：姜亮</p>
              
              <p style="text-indent: 2em; text-align: center;">摄影：王正一</p>
              
              <p style="text-indent: 2em; text-align: center;">编辑：陈艺 艾思奇 米可 曾莹 张艺缤</p>
              
              <p style="text-indent: 2em; text-align: center;">联合制作</p>
              
              <p style="text-indent: 2em; text-align: center;">新华社国际传播融合平台出品</p>
              </div>`
                  }} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

const GridLayout = () => {
  return (
    <div className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {news.map((n, idx) => (
        <NewsCard key={idx} data={n} />
      ))}
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
      <GridLayout />
      <Pagination />
    </div>
  );
};

export default Home;
