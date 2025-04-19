export type VNS_Member = {
    name: string;
    quote: string;

    // https://github.com/microsoft/TypeScript/issues/26552
    // the reason behind this bogus.
    role:
        | string
        | "Event_Director"
        | "Secretary"
        | "Co-Director"
        | "Mini_Tournament"
        | "Logistics"
        | "Wordle"
        | "Kahoot"
        | "Multimedia"
        | "Donator"
        | "Artist"
        | "Collaborator"
        | "Sponsor";
};
