import Link from "next/link";

function PartnerList() {
    return (
        <div className={"ml-5 items-center"}>
            <ol className={"list-decimal space-y-5"}>
                <li>
                    <Link href={"https://www.facebook.com/ngan.tinh.3958"} className={"underline"}>
                        <b>Phổ Lang</b>
                    </Link>
                    : Chủ nhóm Arknights&apos;s Goods - Buôn thận và cày ruộng cùng thú 4 tai
                </li>
                <li>
                    <Link href={"https://www.facebook.com/rei.naoca.7"} className={"underline"}>
                        <b>Rei Não Cá</b>
                    </Link>
                    : Trực thuộc circle Văn phòng Vã
                </li>
                <li>
                    <Link href={"https://www.facebook.com/shinsei.hijiri"} className={"underline"}>
                        <b>Võ Thị Bi</b>
                    </Link>
                    : Trực thuộc circle 0 Sanity Dokutah
                </li>
                <li>
                    <Link href={"https://linktr.ee/vncommunityleague"} className={"underline"}>
                        <b>Vietnam Community League</b>
                    </Link>
                    : Hệ thống giải osu! chuyên nghiệp đầu tiên tại Việt Nam.
                </li>
            </ol>
        </div>
    );
}

export default function AboutDreamchasers() {
    return (
        <div className={"p-10 sm:w-150 md:w-200 lg:w-250"}>
            <div className={"text-center text-3xl font-extrabold"}>Về tụi mình</div>
            <br />
            <div className={"items-center font-normal"}>
                <p>
                    <b>
                        <i>Dreamchasers</i>
                    </b>
                    , là một đội ngũ chuyên về làm sự kiện Offline, trực thuộc cộng đồng{" "}
                    <Link href={"https://www.facebook.com/groups/arknights.vietnam.station"} className={"underline"}>
                        <b>Arknights Vietnam Station [Arknights VNS]</b>
                    </Link>
                    , đồng thời cũng là một trong những nhánh của Station Network / Project VNS
                </p>
                <br />
                <p>Arknights VNS hiện có các nền tảng khác để kết nối cộng đồng trong Project VNS như:{"\n\n"}</p>
                <br />
                <ul className={"ml-10 list-disc space-y-5"}>
                    <li>
                        <Link href={"https://www.facebook.com/terrastationvn"} className={"underline"}>
                            <b>Tram dừng chân chốn Terra / @terrastationvn</b>
                        </Link>
                        : Fanpage chính thức của nhóm, là một team chuyên dịch truyện tranh được phát hành bởi{" "}
                        Hypergryph (dưới tên Terra Historicus) hoặc fanart cộng đồng. Ngoài ra, page thỉnh thoảng cũng
                        sẽ cập nhật & chia sẻ các nội dung, tin tức liên quan đến Arknights.
                    </li>
                    <li>
                        <b>「 Arknights VNS 」</b>- Máy chủ Discord chính thức của nhóm (
                        <Link href={"https://discord.gg/arknights-vns"} className={"underline"}>
                            discord.gg/arknights-vns
                        </Link>
                        ).
                    </li>
                </ul>
            </div>
            <br />
            <div className={"text-center text-2xl font-extrabold"}>Đối tác phát triển</div>
            <br />
            <PartnerList />
        </div>
    );
}
