import "@components/noticeboard.css"

interface NoticeBoardParams {
    children: React.ReactNode,
}

export default function NoticeBoard({ children }: NoticeBoardParams) {
    const noticeboardSection = document.getElementById("noticeboard");

    let index = 0;
    if (noticeboardSection) {
        const images = noticeboardSection?.children ?? [];

        function moveNotice() {
            index = (index + 1) % images.length;
            if (noticeboardSection) noticeboardSection.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(moveNotice, 12000);
    }
    return <section id="noticeboard_container" className="noticeboard_container">{children}</section>
}