import { Operator } from "@/app/tournament/models/Operator";
import Image from "next/image";

const getRarityColor = (rarity: number) => {
    switch (rarity) {
        case 1:
            return "#A0A0A0";
        case 2:
            return "#DCDC00";
        case 3:
            return "#00AAEE";
        case 4:
            return "#D6C5D6";
        case 5:
            return "#FFFFA9";
        case 6:
            return "#FFC800";
        default:
            console.error("Invalid rarity:", rarity);
    }
};

function OperatorIcon({ operator }: { operator: Operator }) {
    const rarityColor = getRarityColor(operator.rarity);
    return (
        <div className={"flex h-full w-full flex-col items-center justify-center"}>
            <div
                className={`flex h-15 w-14 items-center justify-center`}
                style={{
                    background: `linear-gradient(
            to top,
            ${rarityColor} 0%,
            ${rarityColor}70 50%,
            ${rarityColor}00 100%
          )`,
                    borderBottom: `2px solid ${rarityColor}`,
                }}
            >
                <Image
                    src={`/operators/char_${operator.id}.png`}
                    width={56}
                    height={56}
                    alt={operator.name}
                    className={"object-contain"}
                />
            </div>
            <div className={"h-full w-full text-center text-xs break-words"}>{operator.name}</div>
        </div>
    );
}

export default OperatorIcon;
