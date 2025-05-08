"use client";

import { Operator } from "@/app/tournament/models/Operator";
import ClassIcon from "@/components/tournament/ClassIcon";
import OperatorIcon from "@/components/tournament/OperatorIcon";
import VNS_Banner from "@/public/VNS_Banner.png";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function TournamentBan() {
    const bannedList: Operator[] = [
        // testing long operator names
        { id: "151_myrtle", name: "Texas the Omertosa", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Vulpisfoglia", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Entelechia", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Executor the Ex Foedere", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Silence the Paradigmatic", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Myrtle", rarity: 4, class: 1 },
    ];
    const OperatorClasses: string[] = [
        "Vanguard",
        "Guard",
        "Defender",
        "Sniper",
        "Caster",
        "Medic",
        "Supporter",
        "Specialist",
    ];
    const [activeClass, setActiveClass] = useState<number>(0);
    const [activeRarity, setActiveRarity] = useState<number>(-1);
    const OperatorList: Operator[] = [
        { id: "151_myrtle", name: "Vulpisfoglia", rarity: 6, class: 1 },
        { id: "151_myrtle", name: "Texas", rarity: 5, class: 1 },
        { id: "151_myrtle", name: "Courier", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Fang", rarity: 3, class: 1 },
        { id: "151_myrtle", name: "Yato", rarity: 2, class: 1 },
        { id: "151_myrtle", name: "Confess-47", rarity: 1, class: 1 },
        { id: "151_myrtle", name: "Vulpisfoglia", rarity: 6, class: 1 },
        { id: "151_myrtle", name: "Texas", rarity: 5, class: 1 },
        { id: "151_myrtle", name: "Courier", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Fang", rarity: 3, class: 1 },
        { id: "151_myrtle", name: "Yato", rarity: 2, class: 1 },
        { id: "151_myrtle", name: "Confess-47", rarity: 1, class: 1 },
        { id: "151_myrtle", name: "Vulpisfoglia", rarity: 6, class: 1 },
        { id: "151_myrtle", name: "Texas", rarity: 5, class: 1 },
        { id: "151_myrtle", name: "Courier", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Fang", rarity: 3, class: 1 },
        { id: "151_myrtle", name: "Yato", rarity: 2, class: 1 },
        { id: "151_myrtle", name: "Confess-47", rarity: 1, class: 1 },
        { id: "151_myrtle", name: "Vulpisfoglia", rarity: 6, class: 1 },
        { id: "151_myrtle", name: "Texas", rarity: 5, class: 1 },
        { id: "151_myrtle", name: "Courier", rarity: 4, class: 1 },
        { id: "151_myrtle", name: "Fang", rarity: 3, class: 1 },
        { id: "151_myrtle", name: "Yato", rarity: 2, class: 1 },
        { id: "151_myrtle", name: "Confess-47", rarity: 1, class: 1 },
    ];
    return (
        <div className={"block w-screen overflow-hidden"}>
            <div className={"flex h-full w-full flex-col items-start justify-start"}>
                <div className={"flex my-3 w-full items-center justify-center"}>
                    <Image src={VNS_Banner} alt={"VNS_Banner"} width={150} className={"object-contain"} />
                </div>
                <div className={"grid min-h-25 w-full grid-cols-6"}>
                    {bannedList.map((operator) => {
                        return (
                            <div
                                key={operator.name}
                                className={"flex h-full w-full flex-col items-center justify-start"}
                            >
                                <div className={"h-12 w-12 bg-gray-400"}>
                                    <Image
                                        src={`/operators/char_${operator.id}.png`}
                                        alt={operator.name}
                                        width={48}
                                        height={48}
                                        className={"object-contain grayscale"}
                                    />
                                </div>
                                <div className={"w-full px-1 text-center text-[10px] break-words"}>{operator.name}</div>
                            </div>
                        );
                    })}
                </div>
                <div className={"flex h-8 w-full flex-row justify-between bg-gray-300 px-2"}>
                    <div className={"text-xs leading-8"}>
                        Thời gian còn lại: <span className={"text-red-500"}>30</span> giây
                    </div>
                    <div className={"text-xs leading-8"}>
                        Đã cấm: <span className={"text-red-500"}>0</span>/6 Op
                    </div>
                </div>
                <div className={"grid w-full grid-rows-2"}>
                    <div className={"my-1 flex h-9 w-full flex-row justify-between px-2"}>
                        {OperatorClasses.map((operatorClass, index) => {
                            return (
                                <ClassIcon
                                    key={operatorClass}
                                    operatorClass={operatorClass}
                                    active={index == activeClass}
                                    onClick={() => setActiveClass(index)}
                                />
                            );
                        })}
                    </div>
                    <div className={"flex w-full items-center justify-center"}>
                        <div className={"my-1 grid h-9 grid-cols-6 gap-4"}>
                            {Array.from({ length: 6 }).map((_, index) => {
                                return (
                                    <div
                                        className={"flex flex-col items-center justify-center"}
                                        onClick={() => setActiveRarity(index)}
                                        key={index}
                                    >
                                        <FaStar
                                            className={`h-8 w-8 ${index <= activeRarity ? "text-yellow-400" : "text-gray-400"} `}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={"mt-2 w-full max-h-[35vh] overflow-auto"}>
                    <div className="flex flex-wrap">
                        {OperatorList.map((operator, index) => (
                            <div key={index} className="w-1/4 flex justify-center">
                            <OperatorIcon operator={operator} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
