export type VNS_Member = {
    name: string;
    quote: string;

    // https://github.com/microsoft/TypeScript/issues/26552
    // the reason behind this bogus.
    role:
        | string
        | "Head_Admin"
        | "Secretary"
        | "Lead_Staff"
        | "Mini_Tournament"
        | "Logistics"
        | "Wordle"
        | "Kahoot"
        | "Media"
        | "Donator"
        | "Partner"
        | "Collaborator";
};
