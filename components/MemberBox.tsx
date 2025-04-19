import { VNS_Member } from "@/lib/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"my-auto h-75 w-60 p-8 text-center"}>
            <Image
                className={"mx-auto rounded-full border-2 border-gray-400 shadow-md"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"py-1 text-xl font-extrabold"}>{props.name}</div>
            <div className={`Crew_Role py-1 ${props.role}`}>{props.role.replaceAll("_", " ")}</div>
            <div className={"py-1 text-xs text-gray-600 italic"}>&#34;{props.quote}&#34;</div>
        </div>
    );
}
