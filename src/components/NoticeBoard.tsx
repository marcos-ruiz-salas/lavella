import "@components/noticeboard.css"

interface NoticeBoardParams {
    children: React.ReactNode,
}

export default function NoticeBoard({ children }: NoticeBoardParams) {
    return <section id="noticeboard_container" className="noticeboard_container">{children}</section>
}