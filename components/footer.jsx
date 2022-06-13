import Image from "next/image";
export default function Footer() {
    return (
        <footer className="sticky bottom-0 bg-gray-50 flex h-24 w-full items-center justify-center border-t">
            <a
                className="flex items-center justify-center gap-2"
                href="https://github.com/7YHong/yunque"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by 7YHong
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
        </footer>
    )
}