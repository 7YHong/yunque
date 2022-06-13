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

const Preview = ({ previewContent, previewOpened, setPreviewOpened }) => {
  return (
    <Transition appear show={previewOpened} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setPreviewOpened(false)}>
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
                  __html: previewContent
                }} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const NewsCard = ({ data, setPreviewOpened, setPreviewContent }) => {
  return (
    <>
      <div className="w-100 h-36 flex my-1 text-center rounded-md shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl"
        onClick={() => {
          setPreviewContent(`<p class=\"art_p\">近日，多个中国驻外使馆优化外国人赴华签证政策。</p>\n<p class=\"art_p\">中国驻捷克使馆6月10日发布了“关于优化外国人赴华签证政策的通知”，包括免除赴华就业人员签证邀请函、复工复产人员家属签证邀请函等内容。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"550\" h=\"405\" src='https://n.sinaimg.cn/news/crawl/155/w550h405/20220610/b53d-5fb4e38d8d7df5c94af21cf2862325bf.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">驻捷克使馆通知称，自即日起优化外国人赴华签证政策，调整内容包括：经中国国内主管部门批准赴华就业人员，申请工作签证时无需提交中国国内相关政府部门出具的签证邀请函；复工复产人员（包括已在华工作的外国人）的外籍家庭成员（配偶、父母、未满18周岁的子女、配偶的父母）申请赴华随居或探亲，无需提交中国国内相关政府部门出具的签证邀请函。通知称，复工复产人员的其他外籍家庭成员，即成年子女及其配偶、非婚伴侣，如确需赴华，可申请相应类别签证，且无需提交中国国内相关政府部门出具的签证邀请函。优化内容还包括扩大因人道事由赴华人员范围。在现行奔丧、探望危重病亲属等事由基础上，中国公民及在华具有永久居留资格的外国人的外籍家庭成员（配偶、父母、配偶的父母、子女、子女的配偶、兄弟姐妹、祖父母、外祖父母、孙子女、外孙子女），可申请相应类别签证赴华团聚或探亲。通知强调，现阶段中国驻捷克使馆仍暂停受理赴华旅游、就医或其他私人事务相关签证申请。近日，中国驻新加坡大使馆、中国驻韩国大使馆、中国驻印尼使馆也发布了类似信息。驻新加坡大使馆：10日起调整赴华探亲等签证要求据中国驻新加坡大使馆微信公众号消息，自2022年6月10日起，中国驻新加坡大使馆调整赴华商务、工作、探亲等签证办理要求。以下为各类签证材料：</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"550\" h=\"353\" src='https://n.sinaimg.cn/news/crawl/103/w550h353/20220610/5ae6-4a062d867c267d4a923f3fee1175664e.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"550\" h=\"314\" src='https://n.sinaimg.cn/news/crawl/64/w550h314/20220610/bcaf-eb4b88626800f6638bab6a8d3259bcf5.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\"><strong>驻韩国使领馆：13日起调整多种赴华签证办理要求</strong></p>\n<div sax-type=\"proxy\" class=\"j_native_uvw220610 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">据中国驻韩国大使馆微信公众号6月8日消息，自2022年6月13日起，中国驻韩国使领馆调整赴华商务、工作、探亲等签证办理要求。</p>\n<p class=\"art_p\">更新后的办理流程和材料要求如下：1、在线填写签证申请表（https：//bio.visaforchina.org/SEL4_ZH/），打印出确认页及表格，并在确认页及表格第九项签字。2、在线预约递交申请时间，打印出签证预约确认表。3、按预约时间本人亲自到中国签证申请服务中心递交申请，并留存十指指纹。4、签证材料：在线填写的申请表；护照原件和资料页复印件；有效韩国外国人登录证、韩国签证原件或入境确认小条（ENTRY CONFIRMATION）（适用在韩第三国公民）；新冠肺炎疫苗接种证明。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"550\" h=\"587\" src='https://n.sinaimg.cn/news/crawl/337/w550h587/20220610/bcf1-4f0ec8e8061c4c13ebf411bd2dc5aa70.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\"><strong>驻印尼使馆：20日起对赴华签证作出调整</strong></p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"550\" h=\"331\" src='https://n.sinaimg.cn/news/crawl/81/w550h331/20220610/7891-cc9c703de26c611d759cd28ad4e84452.png' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">中国驻印尼使馆6月8日发布“关于优化外国人赴华签证政策的通知”。根据通知，6月20日起，中国驻印尼使馆对外国人赴华签证政策作出调整，受理范围包括从事外交、公务活动或符合礼遇签证办理条件的外国人及其家属，从事各领域复工复产活动的外国人及其家属，部分赴华外籍留学人员等七类人员。目前仍暂停受理赴华旅游、就医或其他私人事务相关签证申请。外国人入境中国前原则上应接种中国或世界卫生组织批准紧急使用或上市的新冠肺炎疫苗。</p>`)
          setPreviewOpened(true);
        }}>
        <div className="w-2/5 h-full bg-cover group-hover:opacity-80"
          style={{ backgroundImage: `url(${data.cover})` }}>
        </div>
        <div className="w-3/5 h-full p-3 flex flex-wrap content-between">
          <p className="text-lg text-left font-semibold group-hover:underline">{data.title}</p>
          <p className="w-full text-gray-500 text-right">{data.editor}</p>
        </div>
      </div>

    </>
  )
}

const GridLayout = ({ setPreviewOpened, setPreviewContent }) => {
  return (
    <div className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {news.map((n, idx) => (
        <NewsCard key={idx} data={n} setPreviewOpened={setPreviewOpened} setPreviewContent={setPreviewContent} />
      ))}
    </div>
  )
}

const Home: NextPage = () => {
  const [previewOpened, setPreviewOpened] = useState(false)
  const [previewContent, setPreviewContent] = useState('')
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridLayout setPreviewOpened={setPreviewOpened} setPreviewContent={setPreviewContent} />
      <Pagination />
      <Preview previewContent={previewContent} previewOpened={previewOpened} setPreviewOpened={setPreviewOpened} />
    </div>
  );
};

export default Home;
