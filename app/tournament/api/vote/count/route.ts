import { prismaClient } from "@/lib/prisma_client";

/**
 * Get total vote count.
 */
export async function GET() {
    const entries = await prismaClient.memberVote.findMany({
        select: {
            count: true,
        },
    });

    let voteCount = 0;

    entries.forEach((x: { count: number }) => {
        voteCount += x.count;
    });

    return Response.json({
        count: voteCount,
    });
}
